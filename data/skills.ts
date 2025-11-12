
// data/skills.ts
export type SkillItem = { name: string; level: 1|2|3|4|5 }
export type SkillCategory = { title: string; items: SkillItem[] }
export const skills: SkillCategory[] = [
  { title: 'Desenvolvimento Front-End', items: [ { name: 'Next.js', level: 4 }, { name: 'React', level: 4 }, { name: 'Tailwind', level: 4 } ] },
  { title: 'Desenvolvimento Back-End', items: [ { name: 'Python', level: 5 }, { name: 'FastAPI', level: 4 }, { name: 'Node.js', level: 3 } ] },
  { title: 'Dados & BI', items: [ { name: 'Pandas', level: 4 }, { name: 'Power BI', level: 4 }, { name: 'DAX', level: 3 } ] },
]
