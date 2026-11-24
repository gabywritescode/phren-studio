import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '@/i18n';

// Portfolio files live in src/content/work/en/*.md and src/content/work/es/*.md.
// The same filename in both folders = the same piece in two languages.

/** The URL slug of a piece, e.g. "es/good-teacher" -> "good-teacher". */
export function slugOf(entry: CollectionEntry<'work'>): string {
  return entry.id.split('/').slice(1).join('/');
}

/** All published pieces in one language, in display order. */
export async function getWork(lang: Lang) {
  const entries = await getCollection(
    'work',
    (e) => e.id.startsWith(`${lang}/`) && !e.data.draft,
  );
  return entries.sort((a, b) => a.data.order - b.data.order);
}
