import { locales, type Locale } from '@/lib/i18n/config'
import type { Translation } from './types'
import pt from './pt'
import en from './en'

const dictionaries: Record<Locale, Translation> = {
  pt,
  en,
}

export { locales }

export function getDictionary(locale: Locale): Translation {
  return dictionaries[locale]
}
