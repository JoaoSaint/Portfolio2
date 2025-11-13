import type { Translation } from './types'

const en: Translation = {
  metadata: {
    title: { default: 'João — Portfolio', template: '%s · João' },
    description: 'Personal portfolio featuring projects, experience, and ways to get in touch.',
    metadataBase: new URL('http://localhost:3000'),
    openGraph: {
      title: 'João — Portfolio',
      description: 'Projects, experience, and contact details.',
      url: '/',
      siteName: 'João Portfolio',
      type: 'website',
    },
  },
  navbar: {
    brand: 'João',
    links: [
      { href: '#inicio', label: 'Home' },
      { href: '#sobre', label: 'About' },
      { href: '#skills', label: 'Toolkit' },
      { href: '#projetos', label: 'Projects' },
      { href: '#timeline-prof', label: 'Career' },
      { href: '#timeline-edu', label: 'Education' },
      { href: '#contatos', label: 'Contact' },
    ],
    themeToggle: {
      ariaLabel: 'Toggle theme',
      light: 'Light mode',
      dark: 'Dark mode',
    },
    language: {
      label: 'Language',
      options: {
        pt: 'Português',
        en: 'English',
      },
    },
  },
  hero: {
    badge: 'Data Science & Automation',
    title: 'João — Data Science',
    description:
      'Data solutions and automations focused on measurable impact and clear storytelling that connects people and technology.',
    ctaProjects: 'View projects',
    ctaContact: 'Let’s talk',
    imageAlt: 'João portrait',
  },
  about: {
    title: 'About me',
    intro: {
      title: 'Personal intro',
      description: 'Quick overview: interests, values, how I work, and what I’m aiming for.',
    },
    studies: {
      title: 'Learning experiences',
      description: 'Courses, certifications, and structured study paths.',
    },
    work: {
      title: 'Professional experience',
      description: 'Roles, responsibilities, achievements, and impact.',
    },
  },
  sections: {
    skills: 'Toolkit',
    projects: 'Projects',
    career: 'Career journey',
    academic: 'Academic journey',
    contacts: 'Contact',
  },
  projects: [
    {
      slug: 'sentinela',
      title: 'NeoSales — Sentinel',
      description: 'Bot orchestrator with scheduling, telemetry, and remote commands.',
      tools: ['Python', 'Selenium', 'Telegram API'],
      logo: '/logos/sentinela.png',
      cover: '/logos/sentinela.png',
      content: 'Monitoring hub with remote control and detailed reporting.',
    },
    {
      slug: 'receita-diaria',
      title: 'BI Dashboard — Daily Revenue',
      description: 'Power BI dashboard fed by automated CSV ingestion.',
      tools: ['Power BI', 'Power Query', 'DAX'],
      content: 'Consolidates revenue sources and benchmarks performance against goals.',
    },
    {
      slug: 'simulador-proposta',
      title: 'Proposal Simulator',
      description: 'Python simulation engine covering renewal scenarios.',
      tools: ['Python', 'Pandas'],
      content: 'Business rules automated with ready-to-use outputs for BI.',
    },
  ],
  projectControls: {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    previousAria: 'Show previous projects',
    nextAria: 'Show next projects',
  },
  skills: [
    {
      title: 'Front-end Development',
      items: [
        { name: 'Next.js', level: 4 },
        { name: 'React', level: 4 },
        { name: 'Tailwind', level: 4 },
      ],
    },
    {
      title: 'Back-end Development',
      items: [
        { name: 'Python', level: 5 },
        { name: 'FastAPI', level: 4 },
        { name: 'Node.js', level: 3 },
      ],
    },
    {
      title: 'Data & BI',
      items: [
        { name: 'Pandas', level: 4 },
        { name: 'Power BI', level: 4 },
        { name: 'DAX', level: 3 },
      ],
    },
  ],
  timeline: {
    career: [
      {
        id: 'car-4',
        title: 'Python Associate Developer at Omni Assessoria, Ribeirão Preto - SP',
        period: 'Sep 2025 — present',
        description: 'Data pipelines, monitoring, and executive dashboards.',
        tags: ['Python', 'Power BI'],
        details: 'Leading ETL orchestration, metric standardization, and executive-facing insights.',
        bullets: [
          'Standardized KPIs and cut update time by 25%.',
          'Deployed monitoring with automated SQL + Python alerts.',
        ],
      },
      {
        id: 'car-3',
        title: 'Python Automation Intern — Omni Assessoria, Ribeirão Preto - SP',
        period: 'Jun 2025 — Sep 2025',
        description: 'Bots, integrations, and operational automations.',
        tags: ['Selenium', 'APIs'],
        details: 'Key contributions include:',
        bullets: [
          'Automated a daily Selenium workflow (+40% productivity).',
          'REST integrations with error handling and reprocessing.',
        ],
      },
      {
        id: 'car-2',
        title: 'IT Intern at Cajuru Health Surveillance - SP',
        period: 'Apr 2025 — Jun 2025',
        description: 'Local IT demands and system support.',
        tags: ['e-SUS', 'APIs'],
        details:
          'Provided targeted support, hardware maintenance, system guidance, and digitization for health surveillance processes.',
        bullets: [
          'Front-line support for users struggling with systems.',
          'Maintenance and repair of IT equipment.',
        ],
      },
      {
        id: 'car-1',
        title: 'Machine and Engine Assembler — Suporte Rei',
        period: 'Sep 2023 — Jul 2024',
        description: 'Manufacturing and assembly of automotive components.',
        tags: ['Processes', 'Machinery'],
        details: 'Hands-on work with shop-floor routines and machinery.',
        bullets: [
          'Stood out by mastering every machine and process on the line.',
        ],
      },
      {
        id: 'car-0',
        title: 'Robotics Teaching Intern at EMEB André Ruggeri, Cajuru - SP',
        period: 'Mar 2023 — Aug 2024',
        description: 'Taught educational robotics to elementary students.',
        tags: ['Leadership', 'Robotics', 'Fast Learner'],
        details: 'Created class material and led student groups independently.',
        bullets: [
          'Led entire classes with autonomy and accountability.',
          'Delivered months of lessons independently.',
          'Coached students to reach the national stage of a robotics championship.',
        ],
      },
    ],
    academic: [
      {
        id: 'edu-9',
        title: 'Postgraduate Studies in Data Science',
        period: '2025 — present',
        side: 'above',
        tags: ['ML', 'Statistics'],
        details: 'Focus on modeling, applied ML, and MLOps practices.',
        bullets: [
          'Time-series project with robust validation.',
          'Versioned ML pipeline with experiment tracking.',
        ],
      },
      {
        id: 'edu-8',
        title: 'Intensive Bootcamps',
        period: 'Feb 2025',
        side: 'below',
        tags: ['FastAPI', 'Next.js'],
        details: 'Hands-on workshops covering REST APIs and SPAs.',
        bullets: [
          'FastAPI service with authentication and caching.',
          'Next.js front-end with routing and optimizations.',
        ],
      },
      {
        id: 'edu-7',
        title: 'Bachelor’s Degree',
        period: '2020 — 2023',
        side: 'above',
        tags: ['Research'],
        details: 'Built a strong foundation in math, algorithms, and research methods.',
        bullets: [
          'Teaching assistant for applied statistics.',
          'Capstone project analyzing data with Python.',
        ],
      },
      {
        id: 'edu-6',
        title: 'High School',
        period: '2020 — 2023',
        side: 'below',
        tags: ['Research'],
        details: 'Strengthened analytical thinking through science fairs and olympiads.',
        bullets: [
          'Participated in the Brazilian Astronomy Olympiad (OBA).',
          'Active presence in regional science fairs.',
        ],
      },
    ],
    labels: {
      period: 'Period',
      tags: 'Tags',
      close: 'Close',
      closeAria: 'Close modal',
    },
  },
  footer: {
    textTemplate: '© {year} João — Built with Next.js & Tailwind.',
  },
  projectPage: {
    backLabel: '← Back',
    notFoundTitle: 'Project not found',
  },
}

export default en
