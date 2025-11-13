// components/ProjectsCarousel.tsx
'use client'

import { useRef } from 'react'
import ProjectCard from '@/components/ProjectCard'
import type { Project } from '@/lib/i18n/content-types'
import { useLocaleContext } from '@/components/locale-provider'

interface CarouselControls {
  previousLabel: string
  nextLabel: string
  previousAria: string
  nextAria: string
}

export default function ProjectsCarousel({
  projects,
  controls,
}: {
  projects: Project[]
  controls: CarouselControls
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { locale } = useLocaleContext()

  function scrollDir(dx: number) {
    ref.current?.scrollBy({ left: dx, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-end gap-2 pb-2">
        <button
          type="button"
          onClick={() => scrollDir(-320)}
          aria-label={controls.previousAria}
          title={controls.previousLabel}
          className="rounded-lg border border-[var(--border-soft)] bg-[var(--control-bg)] px-3 py-1 text-text-muted transition hover:bg-[var(--control-bg-hover)]"
        >
          ◀
        </button>
        <button
          type="button"
          onClick={() => scrollDir(320)}
          aria-label={controls.nextAria}
          title={controls.nextLabel}
          className="rounded-lg border border-[var(--border-soft)] bg-[var(--control-bg)] px-3 py-1 text-text-muted transition hover:bg-[var(--control-bg-hover)]"
        >
          ▶
        </button>
      </div>

      <div ref={ref} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {projects.map((p) => (
          <div key={`${p.slug}-${locale}`} className="h-[240px] w-[300px] shrink-0 snap-start">
            <ProjectCard {...p} locale={locale} slug={p.slug} />
          </div>
        ))}
      </div>
    </div>
  )
}
