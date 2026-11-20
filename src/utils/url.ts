// Prefixes internal links with the site's base path, so the site works both
// on the GitHub Pages preview (/phren-studio/) and on phrenstudio.com (/).
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

// Strips the base path from a pathname, for "is this nav link active?" checks.
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}
