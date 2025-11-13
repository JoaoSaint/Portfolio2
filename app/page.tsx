
// app/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import SkillsGrid from '@/components/SkillsGrid'
import ProjectsCarousel from '@/components/ProjectsCarousel'
import { CareerTimeline, AcademicTimeline } from '@/components/Timeline'
import ContactGrid from '@/components/ContactGrid'

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section id="sobre" title="Sobre mim">
        <div className="space-y-5">
          {/* CARD GRANDE — Intro Pessoal (linha inteira) */}
          <div className="rounded-3xl bg-card-sheen p-6 shadow-card-inner ring-1 ring-[var(--border-soft)] md:p-8">
            <h3 className="text-lg font-semibold text-text-primary">Intro pessoal</h3>
            <p className="mt-3 text-sm text-text-muted md:text-base">
              Breve apresentação: interesses, intenções, valores e como trabalho.
            </p>
          </div>

          {/* LINHA DE BAIXO — dois cards lado a lado (metade cada em telas médias+) */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-card-sheen p-6 shadow-card-inner ring-1 ring-[var(--border-soft)]">
              <h4 className="font-semibold text-text-primary">Experiências de estudo</h4>
              <p className="mt-3 text-sm text-text-muted">Cursos, formações, certificações…</p>
            </div>
            <div className="rounded-3xl bg-card-sheen p-6 shadow-card-inner ring-1 ring-[var(--border-soft)]">
              <h4 className="font-semibold text-text-primary">Experiências profissionais</h4>
              <p className="mt-3 text-sm text-text-muted">Atuações, responsabilidades, conquistas…</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Repertório"><SkillsGrid /></Section>
      <Section id="projetos" title="Projetos"><ProjectsCarousel /></Section>
      <Section id="timeline-prof" title="Trajetória Profissional"><CareerTimeline /></Section>
      <Section id="timeline-edu" title="Trajetória Acadêmica"><AcademicTimeline /></Section>
      <Section id="contatos" title="Contatos"><ContactGrid /></Section>
      <Footer />
    </>
  )
}
