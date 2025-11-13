import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ThemeProvider } from '@/components/theme-provider'
import { LocaleProvider } from '@/components/locale-provider'
import { getDictionary } from '@/locales'
import { isLocale, locales, type Locale } from '@/lib/i18n/config'
import '../globals.css'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  const dictionary = getDictionary(locale as Locale)
  return dictionary.metadata
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  const typedLocale = locale as Locale
  const dictionary = getDictionary(typedLocale)
  const lang = typedLocale === 'pt' ? 'pt-BR' : 'en'

  return (
    <html lang={lang} suppressHydrationWarning className="scroll-smooth">
      <body className="bg-[var(--page-bg)] text-text-primary transition-colors duration-300">
        <ThemeProvider>
          <LocaleProvider locale={typedLocale} dictionary={dictionary}>
            <div className="mx-auto max-w-5xl px-4">{children}</div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
