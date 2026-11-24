// The seven services, in English and Spanish. `short` is used on the homepage, the rest on /services.
import type { Lang } from '@/i18n';

const SERVICES_EN = [
  {
    id: 'white-papers',
    title: 'White Papers & Long-Form Research Reports',
    short: 'Position your organization as a credible voice in your sector.',
    what: 'A white paper is a strategically framed research publication that positions your organization as a credible voice in your sector.',
    how: 'Phren Thought Studio turns your existing data, research, or subject-matter expertise into a structured, well-written report, ready for design and distribution.',
    uses: ['brand credibility', 'lead generation', 'sales enablement', 'media outreach'],
  },
  {
    id: 'executive-thought-leadership',
    title: 'Executive Thought Leadership & Bylined Articles',
    short: "Senior-level content, under your leader's name.",
    what: "Executive thought leadership is senior-level content published under a leader's name to build individual and organizational credibility at once.",
    how: "Phren Thought Studio turns your executive's expertise and point of view into a publication-ready bylined article (800–1,500 words), optimized for your target outlet.",
    uses: ['executive brand building', 'sales support', 'conference credibility', 'LinkedIn presence'],
  },
  {
    id: 'brand-narrative',
    title: 'Brand Narrative & Messaging Framework',
    short: 'How your organization speaks, made consistent.',
    what: 'A brand narrative framework defines how an organization speaks: its pillars, value proposition, and tone of voice.',
    how: "Phren Thought Studio turns your team's knowledge of who you are and who you serve into a messaging guide the whole organization can use consistently.",
    uses: ['brand launches and rebrands', 'team onboarding', 'market consistency', 'sales enablement'],
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy & Editorial Planning',
    short: 'A roadmap for what you publish, why, and when.',
    what: 'Content strategy is a roadmap for what an organization publishes, why, and when.',
    how: 'Phren Thought Studio turns your existing content and audience data into clear editorial direction, an editorial calendar and brief templates your team can execute against.',
    uses: ['strategic direction for content teams', 'new content operations', 'AI-assisted workflow leadership'],
  },
  {
    id: 'retainer',
    title: 'Monthly Retainer — Ongoing Content Partnership',
    short: 'Senior-level writing and strategy, without a full-time hire.',
    what: 'A content retainer provides consistent, senior-level writing and strategy without a full-time hire.',
    how: "Phren Thought Studio turns your team's ongoing priorities into 2–3 pieces of thought leadership per month, plus strategic advisory.",
    uses: ['consistent brand voice', 'demand generation', 'executive brand building', 'senior thinking without a hire'],
  },
  {
    id: 'workshops',
    title: 'Corporate Workshops: Storytelling & Media Literacy',
    short: 'Brand narrative training for your in-house team.',
    what: 'A storytelling workshop teaches communications and marketing teams how to build narratives that move audiences, not just inform them.',
    how: "Phren Thought Studio turns your team's real challenges and material into a half- or full-day session built around them, with written takeaways for participants.",
    uses: ['team development', 'offsites and away days', 'onboarding', 'brand launches'],
  },
  {
    id: 'conference-content',
    title: 'Conference & Event Content',
    short: 'Speaker submissions, panel prep, and presentation writing.',
    what: 'Conference content support covers speaker submissions, panel preparation, and presentation writing for industry events.',
    how: "Phren Thought Studio turns your speaker's expertise into a submission-ready abstract and a structured, presentation-ready narrative.",
    uses: ['executive visibility', 'brand positioning through thought leadership', 'business development'],
  },
];

const SERVICES_ES = [
  {
    id: 'white-papers',
    title: 'White papers e informes de investigación',
    short: 'Posiciona a tu organización como una voz creíble en tu sector.',
    what: 'Un white paper es una publicación de investigación con un enfoque estratégico que posiciona a tu organización como una voz creíble en tu sector.',
    how: 'Phren Thought Studio convierte tus datos, tu investigación o tu conocimiento experto en un informe estructurado y bien escrito, listo para diseño y distribución.',
    uses: ['credibilidad de marca', 'generación de leads', 'apoyo a ventas', 'relaciones con medios'],
  },
  {
    id: 'executive-thought-leadership',
    title: 'Liderazgo de opinión ejecutivo y artículos firmados',
    short: 'Contenido de alto nivel, con la firma de tus líderes.',
    what: 'El liderazgo de opinión ejecutivo es contenido de alto nivel publicado con la firma de un líder para reforzar, a la vez, su credibilidad y la de la organización.',
    how: 'Phren Thought Studio convierte la experiencia y el punto de vista de tu directivo en un artículo firmado listo para publicar (de 800 a 1.500 palabras), adaptado al medio que buscas.',
    uses: ['marca personal directiva', 'apoyo a ventas', 'credibilidad en congresos', 'presencia en LinkedIn'],
  },
  {
    id: 'brand-narrative',
    title: 'Narrativa de marca y marco de mensajes',
    short: 'Cómo habla tu organización, de forma coherente.',
    what: 'Un marco de narrativa de marca define cómo habla una organización: sus pilares, su propuesta de valor y su tono de voz.',
    how: 'Phren Thought Studio convierte lo que tu equipo sabe sobre quiénes son y a quién sirven en una guía de mensajes que toda la organización puede usar de forma coherente.',
    uses: ['lanzamientos y cambios de marca', 'incorporación de equipos', 'coherencia entre mercados', 'apoyo a ventas'],
  },
  {
    id: 'content-strategy',
    title: 'Estrategia de contenidos y planificación editorial',
    short: 'Una hoja de ruta de qué publicas, por qué y cuándo.',
    what: 'La estrategia de contenidos es una hoja de ruta de lo que publica una organización, por qué y cuándo.',
    how: 'Phren Thought Studio convierte tus contenidos actuales y los datos de tu audiencia en una dirección editorial clara, un calendario editorial y plantillas de briefing con las que tu equipo puede trabajar.',
    uses: ['dirección estratégica para equipos de contenido', 'nuevas operaciones de contenido', 'liderazgo en flujos de trabajo con IA'],
  },
  {
    id: 'retainer',
    title: 'Colaboración mensual de contenidos',
    short: 'Redacción y estrategia de alto nivel, sin necesidad de una contratación a tiempo completo.',
    what: 'Una colaboración mensual ofrece redacción y estrategia constantes y de alto nivel, sin necesidad de una contratación a tiempo completo.',
    how: 'Phren Thought Studio convierte las prioridades de tu equipo en 2 o 3 piezas de liderazgo de opinión al mes, más asesoramiento estratégico.',
    uses: ['voz de marca coherente', 'generación de demanda', 'marca personal directiva', 'criterio sénior sin contratar'],
  },
  {
    id: 'workshops',
    title: 'Talleres corporativos: storytelling y alfabetización mediática',
    short: 'Formación en narrativa de marca para tu equipo interno.',
    what: 'Un taller de storytelling enseña a los equipos de comunicación y marketing a construir relatos que conmueven al público, no solo lo informan.',
    how: 'Phren Thought Studio convierte los retos y materiales reales de tu equipo en una sesión de medio día o de día completo diseñada a su medida, con conclusiones por escrito para los participantes.',
    uses: ['desarrollo de equipos', 'jornadas fuera de la oficina', 'incorporación de nuevos miembros', 'lanzamientos de marca'],
  },
  {
    id: 'conference-content',
    title: 'Contenido para congresos y eventos',
    short: 'Propuestas de ponencia, preparación de mesas redondas y redacción de presentaciones.',
    what: 'El apoyo en contenido para congresos abarca propuestas de ponencia, preparación de mesas redondas y redacción de presentaciones para eventos del sector.',
    how: 'Phren Thought Studio convierte la experiencia de tu ponente en un resumen listo para enviar y en un relato estructurado, listo para presentar.',
    uses: ['visibilidad directiva', 'posicionamiento de marca a través del liderazgo de opinión', 'desarrollo de negocio'],
  },
];

export const SERVICES: Record<Lang, typeof SERVICES_EN> = { en: SERVICES_EN, es: SERVICES_ES };
