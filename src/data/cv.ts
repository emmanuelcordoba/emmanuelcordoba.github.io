/**
 * Fuente única de verdad del sitio. Actualizar el CV es editar este archivo:
 * las páginas se arman solas a partir de acá.
 */

export const profile = {
  name: "Emmanuel Córdoba",
  role: "Full-Stack Developer",
  stack: "PHP · Laravel · MySQL",
  location: "Tucumán, Argentina",
  availability: "Disponible para trabajo remoto",
  email: "contacto@emmanuelcordoba.com",
  summary:
    "Desarrollador Full-Stack con 10 años de experiencia entregando aplicaciones web y móviles de punta a punta. Backend en PHP y Laravel, con foco en diseño de APIs REST, modelado y optimización de MySQL y mantenimiento de sistemas heredados en producción; frontend en Angular, Vue.js y JavaScript, y aplicaciones móviles híbridas con Ionic.",
  summarySecondary:
    "Autonomía completa sobre el ciclo del proyecto, desde el relevamiento con el cliente hasta el despliegue en AWS y DigitalOcean. Siete años como docente universitario, lo que se traduce en documentación clara y mentoría técnica dentro del equipo.",
} as const;

export const links = {
  linkedin: "https://www.linkedin.com/in/emmacordoba",
  github: "https://github.com/emmanuelcordoba",
  clixear: "https://clixear.com",
} as const;

/** Cifras verificables de los sistemas en los que trabajó. */
export const metrics = [
  { value: "10", unit: "años", label: "construyendo software en producción" },
  { value: "+1M", unit: "", label: "de usuarios en el e-commerce del Mall ICBC" },
  { value: "+28.000", unit: "", label: "locales operando sobre APIs que desarrollé" },
  { value: "+2M", unit: "", label: "de autorizaciones tramitadas en bymovi" },
] as const;

export const venture = {
  name: "Clixear",
  role: "Fundador",
  period: "2026 — Actualidad",
  url: links.clixear,
  description:
    "Estudio de desarrollo de software a medida. Sistemas web, aplicaciones móviles y modernización de sistemas heredados, del relevamiento al despliegue.",
} as const;

export type Job = {
  company: string;
  url?: string;
  role: string;
  period: string;
  note?: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Maxirest",
    url: "https://maxirest.com.ar/",
    role: "Backend Developer",
    period: "Octubre 2024 — Actualidad",
    bullets: [
      "Desarrollo de APIs REST en Laravel y PHP para el sistema de gestión gastronómica de la empresa, utilizado por más de 28.000 usuarios y locales.",
      "Implementación de pruebas automatizadas con PHPUnit.",
      "Contenerización del entorno de desarrollo con Docker, reduciendo el tiempo de onboarding de nuevos desarrolladores.",
    ],
  },
  {
    company: "IT Patagonia",
    url: "https://itpatagonia.com/",
    role: "Full-Stack Developer",
    period: "Octubre 2023 — Septiembre 2024",
    bullets: [
      "Integrante del equipo de desarrollo del Mall ICBC, plataforma de e-commerce con un millón de usuarios.",
      "Desarrollo y personalización de módulos sobre PrestaShop 1.6 y PHP, con frontend en Vue.js y jQuery.",
      "Mantenimiento de la infraestructura en AWS EC2 y resolución de incidentes en producción.",
    ],
  },
  {
    company: "Abanico",
    url: "https://abanicosa.com/",
    role: "Full-Stack Developer",
    period: "Julio 2022 — Septiembre 2023 · Marzo 2018 — Septiembre 2019",
    note: "Reincorporado por desempeño",
    bullets: [
      "Desarrollo y mantenimiento de sistemas para una compañía de seguros.",
      "Migración progresiva de sistemas heredados en PHP hacia Laravel.",
      "Despliegue y administración de entornos en AWS EC2, AWS S3 y Laravel Forge.",
    ],
  },
  {
    company: "Media Moob",
    url: "https://moob.club/",
    role: "PHP Developer",
    period: "Septiembre 2021 — Junio 2022",
    bullets: [
      "Desarrollo backend en Laravel y MySQL con integración de APIs de terceros para plataformas de consumo bajo suscripción mediante líneas telefónicas.",
    ],
  },
  {
    company: "bymovi",
    url: "https://bymovi.com/",
    role: "Full-Stack Developer",
    period: "Diciembre 2020 — Septiembre 2021",
    bullets: [
      "Desarrollo de sistema web en Laravel y aplicaciones móviles en Ionic + Angular.",
      "El sistema es usado por más de 55.000 afiliados, con más de 2 millones de autorizaciones tramitadas mediante su validador y reglas automatizadas.",
    ],
  },
  {
    company: "NuggoSoft",
    url: "https://www.nuggosoft.com/",
    role: "Full-Stack Developer",
    period: "Febrero 2016 — Marzo 2023",
    note: "Freelance, en paralelo a otros roles",
    bullets: [
      "Desarrollo de sistemas web a medida en Laravel y aplicaciones móviles en Ionic + Angular.",
      "Gestión integral de los proyectos: relevamiento con el cliente, desarrollo, despliegue en DigitalOcean y Laravel Forge, y soporte posterior.",
    ],
  },
];

export const teaching: Job[] = [
  {
    company: "FACET — Universidad Nacional de Tucumán",
    url: "https://www.facet.unt.edu.ar/dpto-cs-comp/",
    role: "Docente Universitario",
    period: "Septiembre 2014 — Julio 2021",
    bullets: [
      "Profesor en las cátedras de Laboratorio I y II: HTML, CSS, JavaScript, PHP y WordPress, con 150 alumnos por cursada.",
    ],
  },
  {
    company: "RollingCode School",
    url: "https://web.rollingcodeschool.com/",
    role: "Mentor FullStack MERN",
    period: "Octubre 2019 — Noviembre 2020",
    bullets: [
      "Dictado del curso de Programación Web FullStack con stack MERN: MongoDB, Express, React y Node.js.",
    ],
  },
];

export const education = [
  {
    title: "Licenciatura en Informática",
    school: "FACET — Universidad Nacional de Tucumán",
    detail: "97 % de avance de la carrera",
  },
  {
    title: "Programador Universitario",
    school: "FACET — Universidad Nacional de Tucumán",
    detail: "Título obtenido · 2017",
  },
] as const;

export const skills = [
  { group: "Lenguajes", items: ["PHP", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"] },
  { group: "Frameworks", items: ["Laravel", "PrestaShop 1.6"] },
  { group: "Frontend", items: ["Vue.js", "Angular", "Tailwind CSS", "Bootstrap", "jQuery"] },
  { group: "Mobile", items: ["Ionic + Angular", "iOS", "Android"] },
  { group: "Bases de datos", items: ["MySQL", "MongoDB"] },
  { group: "APIs e integraciones", items: ["REST", "JSON", "Servicios de terceros"] },
  { group: "Testing", items: ["PHPUnit"] },
  {
    group: "Infraestructura y DevOps",
    items: ["Docker", "AWS EC2 · S3", "DigitalOcean", "Laravel Forge", "Laravel Cloud", "Linux"],
  },
  { group: "Control de versiones", items: ["Git", "GitHub", "GitLab", "Bitbucket"] },
  { group: "Herramientas", items: ["Composer", "Claude Code"] },
] as const;

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "A2 — en formación activa" },
] as const;

export const nav = [
  { href: "#perfil", label: "Perfil" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#docencia", label: "Docencia" },
  { href: "#educacion", label: "Educación" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
] as const;
