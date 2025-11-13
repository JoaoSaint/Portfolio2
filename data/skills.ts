import type { Locale } from '@/lib/i18n/config'
import type { SkillCategory } from '@/lib/i18n/content-types'
import { getDictionary } from '@/locales'

export type { SkillCategory }

export function getSkills(locale: Locale): SkillCategory[] {
  return getDictionary(locale).skills
}
