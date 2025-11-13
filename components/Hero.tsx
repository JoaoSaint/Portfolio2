
// components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-5xl px-4 py-16">
      <div className="overflow-hidden rounded-3xl bg-hero-glow p-10 shadow-card-inner ring-1 ring-[var(--border-soft)] md:p-12">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_260px]">
          <div>
            <span className="inline-flex items-center rounded-full bg-surface-2/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-brand shadow-card-inner ring-1 ring-[var(--border-soft)]">
              Ciência de Dados &amp; Automação
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary md:text-5xl">João — Ciência de Dados</h1>
            <p className="mt-4 max-w-xl text-base text-text-muted md:text-lg">
              Soluções de dados e automações com foco em impacto mensurável e narrativas claras que aproximam pessoas e tecnologia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projetos"
                className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand transition hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
              >
                Ver projetos
              </Link>
              <Link
                href="#contatos"
                className="rounded-full px-6 py-2.5 text-sm font-semibold text-text-muted transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
              >
                Fale comigo
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl bg-surface-2/70 shadow-card-inner ring-1 ring-[var(--border-soft)]">
            <Image src="/avatar.bmp" alt="João" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
