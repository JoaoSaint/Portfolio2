
// components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-5xl py-16">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_260px]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">João — Ciência de Dados</h1>
          <p className="mt-3 text-neutral-300">Soluções de dados e automações com foco em impacto e clareza.</p>
          <div className="mt-6 flex gap-3">
            <Link href="#projetos" className="rounded-xl bg-white px-4 py-2 text-neutral-900">Ver projetos</Link>
          </div>
        </div>
        <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-neutral-800 md:h-64">
          <Image src="/avatar.bmp" alt="João" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
