// Two languages: English at /, Spanish at /es/.
import { url, stripBase } from '@/utils/url';

export type Lang = 'en' | 'es';
export const LANGS: Lang[] = ['en', 'es'];

/** Which language a page is in, from its URL. */
export function getLang(u: URL): Lang {
  const path = stripBase(u.pathname);
  return path === '/es' || path.startsWith('/es/') ? 'es' : 'en';
}

/** An internal path in the given language, with the site base applied. */
export function href(path: string, lang: Lang): string {
  if (lang === 'en') return url(path);
  return url(path === '/' ? '/es/' : `/es${path}`);
}

/** The same page in the other language. */
export function otherLangHref(u: URL): string {
  const path = stripBase(u.pathname);
  if (getLang(u) === 'es') return url(path.replace(/^\/es(\/|$)/, '/') || '/');
  return url(path === '/' ? '/es/' : `/es${path}`);
}

/** The path of this page without its language prefix, e.g. /es/about -> /about */
export function pathWithoutLang(u: URL): string {
  const path = stripBase(u.pathname);
  return path.replace(/^\/es(\/|$)/, '/');
}

export const UI = {
  en: {
    htmlLang: 'en',
    nav: { services: 'Services', about: 'About', portfolio: 'Portfolio', contact: 'Contact' },
    switchLabel: 'ES',
    switchTitle: 'Leer en español',
    status: 'Madrid · English & Spanish',
    tagline: 'Expert content that reads like a gut feeling.',
    taglineLead: 'Expert content that reads',
    taglineEm: 'like a gut feeling.',
    intro:
      'White papers, thought leadership, and brand narrative for organizations looking to build trust in complex spaces.',
    description:
      'Phren Thought Studio: white papers, thought leadership, and brand narrative for organizations looking to build trust in complex spaces. Bilingual English/Spanish, based in Madrid.',
    letsTalk: "Let's talk →",
    seeWork: 'See the work',
    principleEyebrow: 'My guiding principle',
    principleQuote:
      '“Phren” comes from the Greek for “mind”. Yet, in ancient Greek tradition, the mind did not live in the head but in the diaphragm, a reminder that understanding requires both reason and emotion.',
    principleBody:
      'At Phren Thought Studio, I help you find the wisdom intrinsic to your business and translate it into thought leadership that connects emotionally and rationally with your buyers and partners. Through white papers, long-form research, executive voice, and brand narrative, we can set the stage for the right gut feeling.',
    offerEyebrow: 'What I offer',
    seeAllServices: 'See all services →',
    selectedWork: 'Selected work',
    seePortfolio: 'See portfolio →',
    conversationEyebrow: 'Begin the conversation',
    conversationQ: 'Ready to build trust through thought leadership?',
    servicesTitle: 'Services',
    servicesHeadline: 'Seven ways to put your expertise on the page.',
    servicesDescription:
      'White papers, executive thought leadership, brand narrative, content strategy, retainers, workshops, and conference content.',
    uses: 'Uses',
    notSure: 'Not sure which one you need?',
    notSureBody: 'Every engagement starts with a short conversation.',
    aboutTitle: 'About',
    aboutEyebrow: 'About me',
    aboutDescription:
      'Gabrielle van Welie, bilingual content strategist and writer in Madrid, and the voice behind Phren Thought Studio.',
    aboutButton: 'Begin the conversation →',
    contactTitle: 'Contact',
    contactHeadline: 'Begin the conversation',
    contactBody: 'Ready to build trust through thought leadership? Send me a short message.',
    contactButton: 'Write to me →',
    contactSubject: 'Hello from phrenstudio.com',
    contactDescription: 'Begin the conversation with Phren Thought Studio.',
    portfolioTitle: 'Portfolio',
    portfolioHeadline: 'Selected work',
    portfolioDescription:
      'Selected white papers, documentaries, editorial series, and case studies by Gabrielle van Welie.',
    allWork: '← All work',
    previous: '← Previous',
    next: 'Next →',
    client: 'Client',
    format: 'Format',
    top: 'Top ↑',
    notFound: 'Page not found',
    notFoundBody: "This page doesn't exist or has moved.",
    backHome: '← Back home',
  },
  es: {
    htmlLang: 'es',
    nav: { services: 'Servicios', about: 'Sobre mí', portfolio: 'Portafolio', contact: 'Contacto' },
    switchLabel: 'EN',
    switchTitle: 'Read in English',
    status: 'Madrid · Inglés y español',
    tagline: 'Contenido experto que se lee como una corazonada.',
    taglineLead: 'Contenido experto que se lee',
    taglineEm: 'como una corazonada.',
    intro:
      'White papers, liderazgo de opinión y narrativa de marca para organizaciones que quieren generar confianza en sectores complejos.',
    description:
      'Phren Thought Studio: white papers, liderazgo de opinión y narrativa de marca para organizaciones que quieren generar confianza en sectores complejos. Bilingüe inglés/español, con base en Madrid.',
    letsTalk: 'Hablemos →',
    seeWork: 'Ver proyectos',
    principleEyebrow: 'Mi principio rector',
    principleQuote:
      '«Phren» viene del griego y significa «mente». Sin embargo, en la tradición griega antigua, la mente no residía en la cabeza, sino en el diafragma: un recordatorio de que comprender exige tanto razón como emoción.',
    principleBody:
      'En Phren Thought Studio te ayudo a encontrar la sabiduría propia de tu negocio y a traducirla en liderazgo de opinión que conecte, emocional y racionalmente, con tus clientes y partners. A través de white papers, investigación en profundidad, la voz de tu equipo directivo y la narrativa de marca, podemos preparar el terreno para la corazonada adecuada.',
    offerEyebrow: 'Lo que ofrezco',
    seeAllServices: 'Ver todos los servicios →',
    selectedWork: 'Proyectos destacados',
    seePortfolio: 'Ver portafolio →',
    conversationEyebrow: 'Empecemos a conversar',
    conversationQ: '¿Quieres generar confianza a través del liderazgo de opinión?',
    servicesTitle: 'Servicios',
    servicesHeadline: 'Siete maneras de llevar tu experiencia al papel.',
    servicesDescription:
      'White papers, liderazgo de opinión ejecutivo, narrativa de marca, estrategia de contenidos, colaboraciones mensuales, talleres y contenido para congresos.',
    uses: 'Usos',
    notSure: '¿No sabes cuál necesitas?',
    notSureBody: 'Todo proyecto empieza con una breve conversación.',
    aboutTitle: 'Sobre mí',
    aboutEyebrow: 'Sobre mí',
    aboutDescription:
      'Gabrielle van Welie, estratega de contenidos y redactora bilingüe en Madrid, y la voz detrás de Phren Thought Studio.',
    aboutButton: 'Empecemos a conversar →',
    contactTitle: 'Contacto',
    contactHeadline: 'Empecemos a conversar',
    contactBody: '¿Quieres generar confianza a través del liderazgo de opinión? Envíame un breve mensaje.',
    contactButton: 'Escríbeme →',
    contactSubject: 'Hola desde phrenstudio.com',
    contactDescription: 'Empieza la conversación con Phren Thought Studio.',
    portfolioTitle: 'Portafolio',
    portfolioHeadline: 'Proyectos destacados',
    portfolioDescription:
      'White papers, documentales, series editoriales y casos de éxito de Gabrielle van Welie.',
    allWork: '← Todos los proyectos',
    previous: '← Anterior',
    next: 'Siguiente →',
    client: 'Cliente',
    format: 'Formato',
    top: 'Arriba ↑',
    notFound: 'Página no encontrada',
    notFoundBody: 'Esta página no existe o se ha movido.',
    backHome: '← Volver al inicio',
  },
} as const;
