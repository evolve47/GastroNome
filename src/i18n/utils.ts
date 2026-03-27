// ============================================================
// GASTRO|nome — Internationalization: Utility Functions
// ============================================================

import { ui, type Locale, type UIKey } from './ui';

/**
 * Get a translated string. Falls back to Swedish if key is missing in the
 * requested locale.
 */
export function t(lang: Locale, key: UIKey): string {
  return ui[lang]?.[key] ?? ui.sv[key] ?? key;
}

/**
 * Detect locale from a URL pathname.
 * Anything under /en/ is English; everything else is Swedish.
 */
export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname === '/en' || pathname === '/en/' || pathname.startsWith('/en/')) {
    return 'en';
  }
  return 'sv';
}

// ── Slug mapping between Swedish and English paths ──────────────

const slugMap: Record<string, string> = {
  '/': '/en/',
  '/evenemang': '/en/events',
  '/menyer': '/en/menus',
  '/boka-bord': '/en/book-a-table',
  '/presentkort': '/en/gift-cards',
  '/stora-sallskap': '/en/large-groups',
  '/bestall-online': '/en/order-online',
};

/** Reverse map: English path -> Swedish path */
const reverseSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([sv, en]) => [en, sv])
);

/** Normalise a pathname by stripping trailing slashes (except bare "/") */
function normalise(path: string): string {
  if (path === '/' || path === '/en/') return path;
  return path.replace(/\/+$/, '');
}

/**
 * Get the alternate-language URL for a given pathname.
 * Returns null if no mapping exists.
 */
export function getAlternateUrl(
  pathname: string,
  currentLocale: Locale,
): string | null {
  const clean = normalise(pathname);

  if (currentLocale === 'sv') {
    return slugMap[clean] ?? null;
  }

  // English -> Swedish
  // Try exact match first, then try with trailing slash variants
  const exactMatch = reverseSlugMap[clean];
  if (exactMatch !== undefined) return exactMatch;

  const withSlash = clean.endsWith('/') ? clean : clean + '/';
  const withoutSlash = clean.endsWith('/') ? clean.slice(0, -1) : clean;

  return reverseSlugMap[withSlash] ?? reverseSlugMap[withoutSlash] ?? null;
}

/**
 * Generate hreflang link objects for SEO.
 * Returns an array of { lang, href } for use in <link rel="alternate">.
 */
export function getHreflangUrls(
  pathname: string,
  currentLocale: Locale,
  siteUrl: string,
): { lang: string; href: string }[] {
  const base = siteUrl.replace(/\/+$/, '');
  const clean = normalise(pathname);
  const alternate = getAlternateUrl(clean, currentLocale);

  if (!alternate) return [];

  const svPath = currentLocale === 'sv' ? clean : alternate;
  const enPath = currentLocale === 'en' ? clean : alternate;

  // Ensure proper trailing slash for root paths
  const svUrl = svPath === '/' ? `${base}/` : `${base}${svPath}`;
  const enUrl = enPath === '/en/' ? `${base}/en/` : `${base}${enPath}`;

  return [
    { lang: 'sv', href: svUrl },
    { lang: 'en', href: enUrl },
    { lang: 'x-default', href: svUrl },
  ];
}

/**
 * Build the navigation array for a given locale.
 * Returns { label, href }[] ready to use in Navbar/Footer.
 */
export function getNav(lang: Locale): { label: string; href: string }[] {
  const keys = [
    'hem',
    'evenemang',
    'menyer',
    'boka-bord',
    'presentkort',
    'stora-sallskap',
    'bestall-online',
  ] as const;

  return keys.map((key) => ({
    label: t(lang, `nav.${key}` as UIKey),
    href: t(lang, `href.${key}` as UIKey),
  }));
}

// Re-export types for convenience
export type { Locale, UIKey };
