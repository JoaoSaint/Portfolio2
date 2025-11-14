import type { Translation } from './types'

const pt: Translation = {
  metadata: {
    title: { default: 'João — Portfólio', template: '%s · João' },
    description: 'Portfólio pessoal: projetos, experiência e formas de contato.',
    metadataBase: new URL('http://localhost:3000'),
    openGraph: {
      title: 'João — Portfólio',
      description: 'Projetos, experiência e contato.',
      url: '/',
      siteName: 'Portfólio João',
      type: 'website',
    },
  },
  navbar: {
    brand: 'João',
    links: [
      { href: '#inicio', label: 'Início' },
      { href: '#sobre', label: 'Sobre' },
      { href: '#skills', label: 'Repertório' },
      { href: '#projetos', label: 'Projetos' },
      { href: '#timeline-prof', label: 'Carreira' },
      { href: '#timeline-edu', label: 'Acadêmico' },
      { href: '#contatos', label: 'Contatos' },
    ],
    themeToggle: {
      ariaLabel: 'Alternar tema',
      light: 'Modo claro',
      dark: 'Modo escuro',
    },
    language: {
      label: 'Idioma',
      options: {
        pt: 'PT-BR',
        en: 'EN-US',
      },
    },
  },
  hero: {
    badge: 'Ciência de Dados & Automação',
    title: 'João — Ciência de Dados',
    description:
      'Soluções de dados e automações com foco em impacto mensurável e narrativas claras que aproximam pessoas e tecnologia.',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Fale comigo',
    imageAlt: 'João',
  },
  about: {
    title: 'Sobre mim',
    intro: {
      title: 'Intro pessoal',
      description: 'Breve apresentação: interesses, intenções, valores e como trabalho.',
    },
    studies: {
      title: 'Experiências de estudo',
      description: 'Cursos, formações, certificações…',
    },
    work: {
      title: 'Experiências profissionais',
      description: 'Atuações, responsabilidades, conquistas…',
    },
  },
  sections: {
    skills: 'Repertório',
    projects: 'Projetos',
    career: 'Trajetória Profissional',
    academic: 'Trajetória Acadêmica',
    contacts: 'Contatos',
  },
  projects: [
    {
      slug: 'sentinela',
      title: 'NeoSales — Sentinela',
      description: 'Orquestrador de bots com agendamento, telemetria e comandos remotos.',
      tools: ['Python', 'Selenium', 'Telegram API'],
      logo: '/logos/sentinela.png',
      cover: '/logos/sentinela.png',
      content: 'Orquestrador com monitoramento e controle remoto.',
    },
    {
      slug: 'receita-diaria',
      title: 'Painel BI — Receita Diária',
      description: 'Dashboard com Power BI e ingestão automatizada de CSVs.',
      tools: ['Power BI', 'Power Query', 'DAX'],
      content: 'Consolida fontes de receita e compara com metas.',
    },
    {
      slug: 'simulador-proposta',
      title: 'Simulador de Proposta',
      description: 'Motor de simulação em Python para cenários de renovação.',
      tools: ['Python', 'Pandas'],
      content: 'Regras de negócio + saídas para BI.',
    },
  ],
  projectControls: {
    previousLabel: 'Anterior',
    nextLabel: 'Próximo',
    previousAria: 'Ver projetos anteriores',
    nextAria: 'Ver próximos projetos',
  },
  skills: [
    {
      title: 'Desenvolvimento Front-End',
      items: [
        { name: 'Next.js', level: 4 },
        { name: 'React', level: 4 },
        { name: 'Tailwind', level: 4 },
      ],
    },
    {
      title: 'Desenvolvimento Back-End',
      items: [
        { name: 'Python', level: 5 },
        { name: 'FastAPI', level: 4 },
        { name: 'Node.js', level: 3 },
      ],
    },
    {
      title: 'Dados & BI',
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
        title: 'Programador Assistente (Python) em Omni Assessoria, Ribeirão Preto - SP',
        period: 'set 2025 — atual',
        description: 'Pipelines de dados, monitoração e painéis executivos.',
        tags: ['Python', 'Power BI'],
        details: 'Responsável por orquestrar ETLs, padronizar métricas e criar visões para diretoria.',
        bullets: [
          'Padronizei KPIs e reduzi 25% no tempo de atualização.',
          'Implantei monitoração com alertas automáticos (SQL + Python).',
        ],
      },
      {
        id: 'car-3',
        title: 'Estagiário de Desenvolvimento Python para Automações - Omni Assessoria, Ribeirão Preto - SP',
        period: 'jun 2025 — set 2025',
        description: 'Bots, integrações e automações operacionais.',
        tags: ['Selenium', 'APIs'],
        details: 'Responsável por:',
        bullets: [
          'Automatizei fluxo diário com Selenium (ganho ~40% de produtividade).',
          'Integrações REST com tratamento de erros e reprocesso.',
        ],
      },
      {
        id: 'car-2',
        title: 'Estagiário de TI na Vigilância Sanitária de Cajuru - SP',
        period: 'abr 2025 — jun 2025',
        description: 'Demandas locais de TI e auxílio em sistemas.',
        tags: ['e-SUS', 'APIs'],
        details:
          'Responsável pelo suporte técnico direcionado, manutenção de equipamentos, informações sobre sistemas e digitalização de processos.',
        bullets: [
          'Atendimento a usuários com dificuldades em sistemas.',
          'Manutenção de equipamentos de informática.',
        ],
      },
      {
        id: 'car-1',
        title: 'Montador de Máquinas, Motores e Acessórios - Suporte Rei',
        period: 'set 2023 — jul 2024',
        description: 'Confecção de peças automotivas.',
        tags: ['Processos', 'Máquinas'],
        details: 'Processos de rotina com máquinas.',
        bullets: [
          'Destaquei-me aprendendo o funcionamento de todas as máquinas e processos.',
        ],
      },
      {
        id: 'car-0',
        title: 'Estagiário de Robótica na EMEB André Ruggeri, Cajuru - SP',
        period: 'mar 2023 — ago 2024',
        description: 'Lecionava robótica educacional para o fundamental.',
        tags: ['Liderança', 'Robótica', 'Rápido Aprendizado'],
        details: 'Produção de material didático e condução de turmas.',
        bullets: [
          'Assumi responsabilidade sobre toda uma leva de alunos.',
          'Lecionei aulas por meses de forma autônoma e responsável.',
          'Treinei alunos para campeonato de robótica com classificação nacional.',
        ],
      },
    ],
    academic: [
      {
        id: 'edu-9',
        title: 'Pós em Data Science',
        period: '2025 — atual',
        side: 'above',
        tags: ['ML', 'Estatística'],
        details: 'Ênfase em modelagem, ML aplicado e MLOps.',
        bullets: [
          'Projeto de séries temporais com validação robusta.',
          'Pipeline de ML versionado (experimentos).',
        ],
      },
      {
        id: 'edu-8',
        title: 'Cursos Intensivos',
        period: 'fev 2025',
        side: 'below',
        tags: ['FastAPI', 'Next.js'],
        details: 'Workshops práticos com APIs REST e SPAs.',
        bullets: [
          'API FastAPI com autenticação e cache.',
          'Front Next.js com roteamento e otimizações.',
        ],
      },
      {
        id: 'edu-7',
        title: 'Bacharelado',
        period: '2020 — 2023',
        side: 'above',
        tags: ['Pesquisa'],
        details: 'Base sólida em matemática, algoritmos e métodos de pesquisa.',
        bullets: [
          'Monitoria de estatística aplicada.',
          'TCC em análise de dados com Python.',
        ],
      },
      {
        id: 'edu-6',
        title: 'Ensino Médio',
        period: '2020 — 2023',
        side: 'below',
        tags: ['Pesquisa'],
        details: 'Base sólida em matemática, algoritmos e métodos de pesquisa.',
        bullets: [
          'Participação na OBA.',
          'Participações em feiras de ciências.',
        ],
      },
    ],
    labels: {
      period: 'Período',
      tags: 'Tags',
      close: 'Fechar',
      closeAria: 'Fechar modal',
    },
  },
  footer: {
    textTemplate: '© {year} João — Feito com Next.js & Tailwind.',
  },
  projectPage: {
    backLabel: '← Voltar',
    notFoundTitle: 'Projeto não encontrado',
  },
}

export default pt
