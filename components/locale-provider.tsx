'use client'

import { createContext, useContext, useMemo } from 'react'
import type { Locale } from '@/lib/i18n/config'
import type { ClientTranslation } from '@/locales/types'

interface LocaleContextValue {
  locale: Locale
  dictionary: ClientTranslation
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale
  dictionary: ClientTranslation
  children: React.ReactNode
}) {
  const value = useMemo(() => ({ locale, dictionary }), [locale, dictionary])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocaleContext must be used within a LocaleProvider')
  }
  return ctx
}
