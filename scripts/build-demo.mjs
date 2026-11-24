/**
 * Builds the GitHub Pages preview into dist-demo/.
 *
 * GitHub Pages serves this repo from /West-Coast-Roof-Care-website-demo/, so
 * every root link ("/about/") must be prefixed. Astro already prefixes its own
 * assets when `base` is set; this script fixes the hand-written links, drops
 * the cPanel-only files (PHP has nowhere to run on Pages) and adds .nojekyll
 * so Pages does not hide the _astro/ folder.
 */
import {execSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const BASE = '/West-Coast-Roof-Care-website-demo';
const OUT = 'dist-demo';

execSync(`npx astro build --outDir ${OUT}`, {stdio: 'inherit', env: {...process.env, PUBLIC_DEMO: '1'}});

const walk = (dir) =>
  fs.readdirSync(dir, {withFileTypes: true}).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : [p];
  });

// Prefix root-relative URLs in href/src/action/content/srcset that are not
// already prefixed and are not protocol-relative ("//").
const attr = /(\s(?:href|src|action)=")\/(?!\/)(?!West-Coast-Roof-Care-website-demo\/)/g;
const srcset = /(\ssrcset="[^"]*")/g;
let files = 0;
for (const file of walk(OUT).filter((f) => f.endsWith('.html'))) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(attr, `$1${BASE}/`);
  html = html.replace(srcset, (m) => m.replace(/(^|[\s,"])\/(?!\/)(?!West-Coast-Roof-Care-website-demo\/)/g, `$1${BASE}/`));
  // The location.href set by the demo form uses form.action, which is now prefixed.
  fs.writeFileSync(file, html);
  files++;
}

for (const f of ['send.php', '.htaccess']) fs.rmSync(path.join(OUT, f), {force: true});
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
fs.writeFileSync(path.join(OUT, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
console.log(`Demo build ready in ${OUT}/ (${files} pages rewritten for ${BASE}/)`);
