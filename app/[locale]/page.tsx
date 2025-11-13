import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import SkillsGrid from '@/components/SkillsGrid'
import ProjectsCarousel from '@/components/ProjectsCarousel'
import { CareerTimeline, AcademicTimeline } from '@/components/Timeline'
import ContactGrid from '@/components/ContactGrid'
import { getDictionary } from '@/locales'
import { getProjects, getProjectControls } from '@/data/projects'
import { getSkills } from '@/data/skills'
import { getCareerTimeline, getAcademicTimeline, getTimelineLabels } from '@/data/timeline'
import { isLocale, type Locale } from '@/lib/i18n/config'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  const typedLocale = locale as Locale

  const dictionary = getDictionary(typedLocale)
  const projects = getProjects(typedLocale)
  const projectControls = getProjectControls(typedLocale)
  const skills = getSkills(typedLocale)
  const careerTimeline = getCareerTimeline(typedLocale)
  const academicTimeline = getAcademicTimeline(typedLocale)
  const timelineLabels = getTimelineLabels(typedLocale)

  return (
    <>
      <Navbar />
      <Hero content={dictionary.hero} />
      <Section id="sobre" title={dictionary.about.title}>
        <div className="space-y-5">
          <div className="rounded-3xl bg-card-sheen p-6 shadow-card-inner ring-1 ring-[var(--border-soft)] md:p-8">
            <h3 className="text-lg font-semibold text-text-primary">{dictionary.about.intro.title}</h3>
            <p className="mt-3 text-sm text-text-muted md:text-base">{dictionary.about.intro.description}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-card-sheen p-6 shadow-card-inner ring-1 ring-[var(--border-soft)]">
              <h4 className="font-semibold text-text-primary">{dictionary.about.studies.title}</h4>
              <p className="mt-3 text-sm text-text-muted">{dictionary.about.studies.description}</p>
            </div>
            <div className="rounded-3xl bg-card-sheen p-6 shadow-card-inner ring-1 ring-[var(--border-soft)]">
              <h4 className="font-semibold text-text-primary">{dictionary.about.work.title}</h4>
              <p className="mt-3 text-sm text-text-muted">{dictionary.about.work.description}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" title={dictionary.sections.skills}>
        <SkillsGrid categories={skills} />
      </Section>
      <Section id="projetos" title={dictionary.sections.projects}>
        <ProjectsCarousel projects={projects} controls={projectControls} />
      </Section>
      <Section id="timeline-prof" title={dictionary.sections.career}>
        <CareerTimeline items={careerTimeline} labels={timelineLabels} />
      </Section>
      <Section id="timeline-edu" title={dictionary.sections.academic}>
        <AcademicTimeline items={academicTimeline} labels={timelineLabels} />
      </Section>
      <Section id="contatos" title={dictionary.sections.contacts}>
        <ContactGrid />
      </Section>
      <Footer textTemplate={dictionary.footer.textTemplate} />
    </>
  )
}
