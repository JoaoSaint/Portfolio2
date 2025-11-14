'use client'

import { useCallback, useMemo } from 'react'
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

  const { currentOption, nextLocale, nextLabel } = useMemo(() => {
    if (options.length === 0) {
      return { currentOption: null, nextLocale: null, nextLabel: null }
    }

    const currentIndex = options.findIndex((option) => option.value === locale)
    const safeIndex = currentIndex >= 0 ? currentIndex : 0
    const current = options[safeIndex] ?? null

    if (options.length === 1) {
      return { currentOption: current, nextLocale: null, nextLabel: null }
    }

    const nextIndex = (safeIndex + 1) % options.length
    const next = options[nextIndex]

    if (!next || next.value === current?.value) {
      return { currentOption: current, nextLocale: null, nextLabel: null }
    }

    return {
      currentOption: current,
      nextLocale: next.value,
      nextLabel: next.label,
    }
  }, [locale, options])

  const handleClick = useCallback(() => {
    if (!nextLocale || nextLocale === locale) return

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
  }, [locale, nextLocale, pathname, router, searchParams])

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={currentOption ? currentOption.value === options[0]?.value : false}
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--control-bg)] px-3 py-1.5 text-xs font-semibold text-text-primary transition hover:bg-[var(--control-bg-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
    >
      <span className="sr-only">{label}</span>
      <span aria-hidden className="flex items-center gap-1">
        {options.map((option) => {
          const isActive = option.value === currentOption?.value
          return (
            <span
              key={option.value}
              className={`rounded-full px-2 py-1 text-[0.65rem] uppercase tracking-wide transition ${
                isActive ? 'bg-brand/15 text-text-primary' : 'text-text-muted opacity-75'
              }`}
            >
              {option.label}
            </span>
          )
        })}
      </span>
      {nextLocale && nextLabel ? (
        <span className="sr-only">
          {label}: {currentOption?.label ?? locale} → {nextLabel}
        </span>
      ) : null}
    </button>
  )
}
