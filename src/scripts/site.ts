import Lenis from 'lenis';

/**
 * One rAF loop for every page. Lenis advances first, then each scroll-driven
 * element reads its own rect and writes styles directly — no framework state,
 * so scrolling never triggers re-renders.
 */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.9, anchors: true});
}

type Tick = (time: number) => void;
const subscribers = new Set<Tick>();
const loop = (time: number) => {
  lenis?.raf(time);
  subscribers.forEach((fn) => fn(time));
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);

/* ---------- Hero: as you scroll away, the photo blurs, dims and pulls back ---------- */
document.querySelectorAll<HTMLElement>('[data-hero]').forEach((root) => {
  const stage = root.querySelector<HTMLElement>('[data-hero-stage]');
  if (!stage || reduced) return;
  subscribers.add(() => {
    const r = root.getBoundingClientRect();
    if (r.bottom < -50) return;
    const h = window.innerHeight;
    const p = clamp(-r.top / Math.max(1, r.height));
    stage.style.transform = `translate3d(0, ${(p * h * 0.5).toFixed(1)}px, 0) scale(${(1 - p * 0.08).toFixed(4)})`;
    stage.style.filter = p > 0.01 ? `blur(${(p * 18).toFixed(1)}px) brightness(${(1 - p * 0.5).toFixed(3)})` : 'none';
  });
});

/* ---------- Reveals + panels: add .is-in the first time each is seen ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  },
  {rootMargin: '0px 0px -10% 0px'},
);
document.querySelectorAll('[data-reveal], [data-panels]').forEach((el) => io.observe(el));

/* ---------- Wordmark sized by measurement so it spans its parent exactly ---------- */
document.querySelectorAll<HTMLElement>('[data-fit]').forEach((el) => {
  const parent = el.parentElement;
  if (!parent) return;
  const PROBE = 100;
  const fit = () => {
    el.style.fontSize = `${PROBE}px`;
    const s = getComputedStyle(parent);
    const available = parent.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight);
    const natural = el.offsetWidth;
    if (natural > 0) el.style.fontSize = `${(PROBE * available) / natural}px`;
  };
  fit();
  document.fonts?.ready.then(fit);
  new ResizeObserver(fit).observe(parent);
});

/* ---------- Menu: three slabs wipe in (ink, red, paper); items ripple on hover ---------- */
const menu = document.getElementById('site-menu');
const toggle = document.getElementById('menu-toggle');
if (menu && toggle) {
  const label = toggle.querySelector('[data-label]');
  const links = Array.from(menu.querySelectorAll<HTMLAnchorElement>('[data-menu-item]'));
  const turb = menu.querySelector('feTurbulence');
  const disp = menu.querySelector('feDisplacementMap');
  let open = false;

  const set = (next: boolean) => {
    open = next;
    menu.toggleAttribute('data-open', open);
    menu.inert = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.toggleAttribute('data-open', open);
    if (label) label.textContent = open ? 'Close' : 'Menu';
    document.documentElement.toggleAttribute('data-menu-open', open);
    if (open) {
      lenis?.stop();
      window.setTimeout(() => links[0]?.focus({preventScroll: true}), 450);
    } else {
      lenis?.start();
    }
  };
  menu.inert = true;
  toggle.addEventListener('click', () => set(!open));
  menu.querySelector('[data-menu-close]')?.addEventListener('click', () => set(false));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) {
      set(false);
      toggle.focus();
    }
  });

  // Heat-haze ripple: animate only while an item is hovered or focused.
  let raf = 0;
  const stopRipple = () => {
    cancelAnimationFrame(raf);
    raf = 0;
    disp?.setAttribute('scale', '0');
    links.forEach((l) => {
      l.style.filter = 'none';
      l.style.opacity = '';
    });
  };
  const startRipple = (target: HTMLAnchorElement) => {
    links.forEach((l) => {
      l.style.filter = l === target && !reduced ? 'url(#ripple)' : 'none';
      l.style.opacity = l === target ? '1' : '0.35';
    });
    if (reduced || raf) return;
    let t = 0;
    let amp = 0;
    const tick = () => {
      t += 0.016;
      amp = Math.min(1, amp + 0.08);
      turb?.setAttribute('baseFrequency', `${(0.012 + Math.sin(t * 2.1) * 0.004).toFixed(4)} ${(0.06 + Math.cos(t * 1.7) * 0.02).toFixed(4)}`);
      turb?.setAttribute('seed', String(Math.floor(t * 12) % 50));
      disp?.setAttribute('scale', (amp * 9).toFixed(2));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  };
  links.forEach((l) => {
    l.addEventListener('mouseenter', () => startRipple(l));
    l.addEventListener('focus', () => startRipple(l));
    l.addEventListener('blur', stopRipple);
  });
  menu.querySelector('[data-menu-list]')?.addEventListener('mouseleave', stopRipple);
}

/* ---------- Floating quote button hides over the footer CTA (no double CTA) ---------- */
const fab = document.querySelector<HTMLElement>('[data-fab]');
const footer = document.querySelector('[data-footer]');
if (fab && footer) {
  new IntersectionObserver(([e]) => fab.toggleAttribute('data-hidden', e.isIntersecting), {threshold: 0.05}).observe(footer);
}
