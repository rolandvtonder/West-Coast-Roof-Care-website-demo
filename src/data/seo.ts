import {business} from './site';

/** BreadcrumbList schema matching the visible breadcrumb trail. */
export function breadcrumbs(items: {name: string; href: string}[]) {
  const all = [{name: 'Home', href: '/'}, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, business.url).href,
    })),
  };
}

export function faqSchema(list: {q: string; a: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {'@type': 'Answer', text: f.a},
    })),
  };
}
