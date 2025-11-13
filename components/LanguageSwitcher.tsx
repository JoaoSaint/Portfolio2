'use client'

import { useCallback, type ChangeEvent } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { Locale } from '@/lib/i18n/config'
import { useLocaleContext } from '@/components/locale-provider'

interface LanguageOption {
  value: Locale
  label: string
}

export default function LanguageSwitcher({
  label,
  options,
}: {
  label: string
  options: LanguageOption[]
}) {
  const { locale } = useLocaleContext()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const onChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = event.target.value as Locale
      if (nextLocale === locale) return

      const segments = (pathname ?? '').split('/')
      if (segments.length > 1) {
        segments[1] = nextLocale
      } else {
        segments.push(nextLocale)
      }
      if (segments[0] !== '') {
        segments.unshift('')
      }
      const nextPath = segments.join('/') || `/${nextLocale}`
      const search = searchParams?.toString()
      const url = search ? `${nextPath}?${search}` : nextPath

      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
      router.push(url)
    },
    [locale, pathname, router, searchParams],
  )

  return (
    <div className="inline-flex items-center gap-2">
      <label htmlFor="language-switcher" className="sr-only">
        {label}
      </label>
      <select
        id="language-switcher"
        aria-label={label}
        value={locale}
        onChange={onChange}
        className="rounded-full border border-[var(--border-soft)] bg-[var(--control-bg)] px-3 py-1.5 text-xs font-medium text-text-muted transition hover:bg-[var(--control-bg-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
