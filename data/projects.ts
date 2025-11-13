import type { Locale } from '@/lib/i18n/config'
import type { Project } from '@/lib/i18n/content-types'
import { getDictionary } from '@/locales'

export type { Project }

export function getProjects(locale: Locale): Project[] {
  return getDictionary(locale).projects
}

export function getProjectControls(locale: Locale) {
  return getDictionary(locale).projectControls
}
