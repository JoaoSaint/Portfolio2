// components/ProjectsCarousel.tsx
'use client'
import { useRef } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  function scrollDir(dx: number) {
    ref.current?.scrollBy({ left: dx, behavior: 'smooth' })
  }
  return (
    <div className="relative">
      <div className="flex items-center justify-end gap-2 pb-2">
        <button onClick={() => scrollDir(-320)} className="rounded-lg border border-neutral-700 px-3 py-1">◀</button>
        <button onClick={() => scrollDir(320)} className="rounded-lg border border-neutral-700 px-3 py-1">▶</button>
      </div>

      <div ref={ref} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="h-[240px] w-[300px] shrink-0 snap-start"
          >
            <ProjectCard {...p} slug={p.slug} />
          </div>
        ))}
      </div>
    </div>
  )
}
