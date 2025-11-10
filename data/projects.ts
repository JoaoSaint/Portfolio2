// data/projects.ts
export type Project = {
  title: string
  description: string
  tools?: string[]
  href?: string
  logo?: string
}

export const projects: Project[] = [
  {
    title: 'NeoSales — Sentinela',
    description: 'Orquestrador de bots com agendamento, telemetria e comandos remotos.',
    tools: ['Tudo e + um Pouco', 'Gestão', 'Python', 'Selenium', 'Telegram API'],
    href: '#',
    logo: '/logos/sentinela.png',
  },
  {
    title: 'Painel BI — Receita Diária',
    description: 'Dashboard com Power BI e ingestão automatizada de CSVs.',
    tools: ['Power BI', 'Power Query', 'DAX'],
    href: '#',
  },
  {
    title: 'Agente de RH',
    description: 'Agente para Auxílio de RH..',
    tools: ['Agendador', 'I.A.', 'Python', 'RH'],
    href: '#',
  },
]
