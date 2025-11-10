// app/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl py-16">
        <section className="grid items-center gap-8 md:grid-cols-[160px_1fr]">
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-neutral-800">
            <Image src="/avatar.bmp" alt="João" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">João — Ciência de Dados</h1>
            <p className="mt-3 text-neutral-300">
              Construo soluções de dados e automações que reduzem atrito e ampliam impacto.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/projects" className="rounded-xl bg-white px-4 py-2 text-neutral-900">Ver projetos</Link>
              <Link href="/contact" className="rounded-xl border border-neutral-700 px-4 py-2">Contato</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
