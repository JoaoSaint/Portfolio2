import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getProjects } from '@/data/projects'
import { getDictionary } from '@/locales'
import { isLocale, locales, type Locale } from '@/lib/i18n/config'

export function generateStaticParams() {
  return locales.flatMap((locale) => getProjects(locale).map((project) => ({ locale, slug: project.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const typedLocale = locale as Locale
  const project = getProjects(typedLocale).find((p) => p.slug === slug)
  if (!project) {
    const dictionary = getDictionary(typedLocale)
    return { title: dictionary.projectPage.notFoundTitle }
  }
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/${locale}/projects/${project.slug}`,
    },
  }
}

export default async function ProjectDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  const typedLocale = locale as Locale
  const projects = getProjects(typedLocale)
  const project = projects.find((p) => p.slug === slug)
  const dictionary = getDictionary(typedLocale)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl py-16">
        <Link href={`/${locale}#projetos`} className="text-sm text-text-muted transition hover:text-text-primary">
          {dictionary.projectPage.backLabel}
        </Link>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary">{project.title}</h1>
        <p className="mt-2 text-text-muted">{project.description}</p>
        {project.cover && (
          <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-surface-1/70">
            <Image src={project.cover} alt={project.title} fill className="object-contain" />
          </div>
        )}
        {project.tools && project.tools.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-muted">
            {project.tools.map((t) => (
              <li key={t} className="rounded-full border border-[var(--border-soft)] px-2 py-1">
                {t}
              </li>
            ))}
          </ul>
        )}
        {project.content && (
          <article className="prose mt-6 max-w-none text-text-muted dark:prose-invert">
            <p>{project.content}</p>
          </article>
        )}
      </main>
      <Footer textTemplate={dictionary.footer.textTemplate} />
    </>
  )
}
