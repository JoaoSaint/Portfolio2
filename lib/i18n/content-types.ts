export type ProjectStatus = 'planning' | 'in-progress' | 'completed'

export type Project = {
  slug: string
  title: string
  description: string
  tools?: string[]
  href?: string
  logo?: string
  cover?: string
  content?: string
  status: ProjectStatus
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5

export type SkillItem = {
  name: string
  level: SkillLevel
}

export type SkillCategory = {
  title: string
  items: SkillItem[]
}

export type TimelineItem = {
  id: string
  title: string
  period: string
  description?: string
  tags?: string[]
  side?: 'above' | 'below'
  details?: string
  bullets?: string[]
}
