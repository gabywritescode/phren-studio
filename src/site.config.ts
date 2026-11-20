// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Phren Thought Studio',
  founder: 'Gabrielle van Welie',
  email: 'gabrielle@phrenstudio.com',
  tagline: 'Expert content that reads like a gut feeling.',
  intro:
    'White papers, thought leadership, and brand narrative for organizations looking to build trust in complex spaces.',
  description:
    'Phren Thought Studio: white papers, thought leadership, and brand narrative for organizations looking to build trust in complex spaces. Bilingual English/Spanish, based in Madrid.',
  status: 'Madrid · English & Spanish',
  // Add a LinkedIn link here, e.g. { label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' }
  social: [] as { label: string; href: string }[],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
] as const;
