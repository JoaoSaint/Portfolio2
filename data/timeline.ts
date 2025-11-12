// data/timeline.ts
export type TimelineItem = {
  id: string
  title: string
  period: string
  description?: string
  tags?: string[]
  side?: 'above' | 'below'   // usado só na timeline acadêmica
  details?: string
  bullets?: string[]
}

export const career: TimelineItem[] = [
  {
    id: 'car-4',
    title: 'Programador Assistente (Python) em Omni Assessoria, Ribeirão Preto - SP',
    period: 'set 2025 — atual',
    description: 'Pipelines de dados, monitoração e painéis executivos.',
    tags: ['Python', 'Power BI'],
    details:
      'Responsável por orquestrar ETLs, padronizar métricas e criar visões para diretoria.',
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
    details:
      'Responsável por:',
    bullets: [
      'Automatizei fluxo diário com Selenium (ganho ~40% de produtividade).',
      'Integrações REST com tratamento de erros e reprocesso.',
    ],
  },
    {
    id: 'car-2',
    title: 'Estagiário de TI na Vigilância Sanitária de Cajuru - SP',
    period: 'abril 2025 — jun 2025',
    description: 'Demandas locais de TI e Auxílio em Sistemas.',
    tags: ['e-SUS', 'APIs'],
    details:
      'Responsável pelo Suporte Técnico direcionado, Manutenção de Equipamentos, Informações sobre sistemas, e digitalização de processos, documentos e auditoria para os sistemas digitais de saúde e vigilância.',
    bullets: [
      'Atendimento a usuários com dificuldades em sistemas.',
      'Manutenção de equipamentos de informática.',
    ],
  },
    {
    id: 'car-1',
    title: 'Montador de Máquinas, Motores e Acessórios - Suporte Rei',
    period: 'set 2023 — jul 2024',
    description: 'Confecção de Peças Automotivas.',
    tags: ['Processos', 'Máquinas'],
    details:
      'Processos de Rotina com Máquinas.',
    bullets: [
      'Me destaquei em meu setor, aprendendo o funcionamento de todas as máquinas e processos.',
      
    ],
  },
    {
    id: 'car-0',
    title: 'Estagiário de Robótica na EMEB André Ruggeri, Cajuru - SP',
    period: 'mar 2023 — ago 2024',
    description: 'Lecionava Robótica Educacional para o Fundamental.',
    tags: ['Liderança', 'Robótica', 'Rápido Aprendizado'],
    details:
      'Material Didático.',
    bullets: [
      'Assumi responsabilidade sobre toda uma leva de alunos.',
      'Lecionei aulas por meses de forma autônoma e responsável.',
      'Treinei os alunos para um Campeonato de Robótica, onde se classificaram até nível Nacional.'
      
    ],
  },
]

export const academic: TimelineItem[] = [
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
    details:
      'Base sólida em matemática, algoritmos e métodos de pesquisa.',
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
    details:
      'Base sólida em matemática, algoritmos e métodos de pesquisa.',
    bullets: [
      'Participação na OBA.',
      'Grandes Participações em Feiras de Ciências.',
    ],
  },
]
