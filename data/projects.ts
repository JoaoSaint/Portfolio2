
// data/projects.ts
export type Project = { slug: string; title: string; description: string; tools?: string[]; href?: string; logo?: string; cover?: string; content?: string }
export const projects: Project[] = [
  { slug: 'sentinela', title: 'NeoSales — Sentinela', description: 'Orquestrador de bots com agendamento, telemetria e comandos remotos.', tools: ['Python','Selenium','Telegram API'], logo: '/logos/sentinela.png', cover: '/logos/sentinela.png', content: 'Orquestrador com monitoramento e controle remoto.' },
  { slug: 'receita-diaria', title: 'Painel BI — Receita Diária', description: 'Dashboard com Power BI e ingestão automatizada de CSVs.', tools: ['Power BI','Power Query','DAX'], content: 'Consolida fontes de receita e compara com metas.' },
  { slug: 'simulador-proposta', title: 'Simulador de Proposta', description: 'Motor de simulação em Python para cenários de renovação.', tools: ['Python','Pandas'], content: 'Regras de negócio + saídas para BI.' },
]
