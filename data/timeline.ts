import type { Locale } from '@/lib/i18n/config'
import type { TimelineItem } from '@/lib/i18n/content-types'
import { getDictionary } from '@/locales'

export type { TimelineItem }

export function getCareerTimeline(locale: Locale): TimelineItem[] {
  return getDictionary(locale).timeline.career
}

export function getAcademicTimeline(locale: Locale): TimelineItem[] {
  return getDictionary(locale).timeline.academic
}

export function getTimelineLabels(locale: Locale) {
  return getDictionary(locale).timeline.labels
}
