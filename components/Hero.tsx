// components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  content: {
    badge: string
    title: string
    description: string
    ctaProjects: string
    ctaContact: string
    imageAlt: string
  }
}

export default function Hero({ content }: HeroProps) {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-4 py-16 lg:px-8 xl:max-w-7xl">
      <div className="overflow-hidden rounded-3xl bg-hero-glow p-10 shadow-card-inner ring-1 ring-[var(--border-soft)] md:p-12">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px] lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <span className="inline-flex items-center rounded-full bg-surface-2/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-brand shadow-card-inner ring-1 ring-[var(--border-soft)]">
              {content.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary md:text-5xl">{content.title}</h1>
            <p className="mt-4 max-w-xl text-base text-text-muted md:text-lg">{content.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projetos"
                className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand transition hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
              >
                {content.ctaProjects}
              </Link>
              <Link
                href="#contatos"
                className="rounded-full px-6 py-2.5 text-sm font-semibold text-text-muted transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
              >
                {content.ctaContact}
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl bg-surface-2/70 shadow-card-inner ring-1 ring-[var(--border-soft)] lg:h-72 lg:w-72">
            <Image src="/avatar.bmp" alt={content.imageAlt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
