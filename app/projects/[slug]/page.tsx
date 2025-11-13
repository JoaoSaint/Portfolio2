
// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import Link from 'next/link'

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const proj = projects.find((p) => p.slug === slug)
  if (!proj) return { title: 'Projeto não encontrado' }
  return { title: `${proj.title}`, description: proj.description, openGraph: { title: proj.title, description: proj.description, url: `/projects/${proj.slug}` } }
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const proj = projects.find((p) => p.slug === slug)
  if (!proj) return notFound()
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl py-16">
        <Link href="/#projetos" className="text-sm text-text-muted transition hover:text-text-primary">
          ← Voltar
        </Link>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary">{proj.title}</h1>
        <p className="mt-2 text-text-muted">{proj.description}</p>
        {proj.cover && (
          <div className="relative mt-6 h-56 w-full overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-surface-1/70">
            <Image src={proj.cover} alt={proj.title} fill className="object-contain" />
          </div>
        )}
        {proj.tools && proj.tools.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-muted">
            {proj.tools.map((t) => (
              <li key={t} className="rounded-full border border-[var(--border-soft)] px-2 py-1">
                {t}
              </li>
            ))}
          </ul>
        )}
        {proj.content && (
          <article className="prose mt-6 max-w-none text-text-muted dark:prose-invert">
            <p>{proj.content}</p>
          </article>
        )}
      </main>
      <Footer />
    </>
  )
}
