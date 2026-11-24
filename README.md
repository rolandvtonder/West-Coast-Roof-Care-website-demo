# West Coast Roof Care: website

New multi-page website for **West Coast Roof Care (Pty) Ltd**, roofer and waterproofer in Vredenburg on the West Coast, South Africa.

**Live demo:** https://rolandvtonder.github.io/West-Coast-Roof-Care-website-demo/

> The demo is a preview copy: search engines are told not to index it, and the quote form doesn't send email. The real site goes on the client's cPanel host at wcroofcare.co.za.

## What's inside

- 21 pages:
  - Home, About, Contact
  - A Services page plus one page per service (6)
  - Projects gallery
  - FAQ & pricing
  - GGC Steel Division
  - An Areas page plus one page per town (5)
  - Thank-you and 404 pages
- Local SEO:
  - Per-page titles and descriptions, canonical links, Open Graph tags
  - Structured data: `RoofingContractor`, `Service`, `FAQPage`, `BreadcrumbList`
  - Sitemap, plus 301 redirects from the old WordPress URLs
- Built with [Astro](https://astro.build), Tailwind CSS v4 and Lenis smooth scrolling. Photos are converted to responsive WebP at build time.

## Commands

```bash
npm install
npm run dev         # local preview at http://localhost:4321
npm run build       # production build for wcroofcare.co.za -> dist/
npm run build:demo  # GitHub Pages preview build -> dist-demo/
```

All copy, contact details, services, towns and FAQs live in `src/data/site.ts`.

## Deploying the real site

Upload the contents of `dist/` (including `.htaccess` and `send.php`) to `public_html` on the cPanel host. `send.php` emails quote requests to info@wcroofcare.co.za.
