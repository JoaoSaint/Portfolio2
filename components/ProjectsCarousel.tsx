// components/ProjectsCarousel.tsx
'use client'

import { useCallback, useId, useState, type UIEvent } from 'react'
import ProjectCard from '@/components/ProjectCard'
import type { Project } from '@/lib/i18n/content-types'
import { useLocaleContext } from '@/components/locale-provider'
import DraggableX from '@/components/DraggableX'

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
  const { locale, dictionary } = useLocaleContext()
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const baseId = useId()

  const clampIndex = useCallback(
    (index: number) => Math.max(0, Math.min(projects.length - 1, index)),
    [projects.length],
  )

  const scrollToIndex = useCallback(
    (index: number) => {
      const targetIndex = clampIndex(index)
      const element = document.getElementById(`${baseId}-card-${targetIndex}`)
      element?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
      setActiveIndex(targetIndex)
    },
    [baseId, clampIndex],
  )

  const handleScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const target = event.currentTarget
      const maxScroll = target.scrollWidth - target.clientWidth
      const ratio = maxScroll > 0 ? target.scrollLeft / maxScroll : 0
      setProgress(ratio)

      const midPoint = target.scrollLeft + target.clientWidth / 2
      const nodes = target.querySelectorAll<HTMLElement>('[data-project-index]')
      let nearestIndex = 0
      let smallestDistance = Number.POSITIVE_INFINITY

      nodes.forEach((node) => {
        const nodeCenter = node.offsetLeft + node.offsetWidth / 2
        const distance = Math.abs(nodeCenter - midPoint)
        if (distance < smallestDistance) {
          smallestDistance = distance
          nearestIndex = Number(node.dataset.projectIndex ?? 0)
        }
      })

      setActiveIndex((prev) => (prev === nearestIndex ? prev : nearestIndex))
    },
    [],
  )

  const progressPercent = Math.round(Math.max(0, Math.min(1, progress)) * 100)
  const canGoBack = activeIndex > 0
  const canGoForward = activeIndex < projects.length - 1

  return (
    <div className="relative pb-4">
      <div className="flex items-center justify-end gap-2 pb-3">
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          aria-label={controls.previousAria}
          title={controls.previousLabel}
          disabled={!canGoBack}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--control-bg)] text-text-muted transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60 ${
            canGoBack ? 'hover:bg-[var(--control-bg-hover)]' : 'cursor-not-allowed opacity-40'
          }`}
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 3.5 5.5 8l4 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">{controls.previousLabel}</span>
        </button>
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex + 1)}
          aria-label={controls.nextAria}
          title={controls.nextLabel}
          disabled={!canGoForward}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--control-bg)] text-text-muted transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60 ${
            canGoForward ? 'hover:bg-[var(--control-bg-hover)]' : 'cursor-not-allowed opacity-40'
          }`}
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 3.5 10.5 8l-4 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">{controls.nextLabel}</span>
        </button>
      </div>

      <div className="relative">
        <DraggableX onScroll={handleScroll} className="flex snap-x snap-mandatory gap-5 pb-3 pr-4">
          {projects.map((p, index) => {
            const statusLabel = dictionary.projectStatusLabels[p.status]

            return (
            <div
              key={`${p.slug}-${locale}`}
              id={`${baseId}-card-${index}`}
              data-project-index={index}
              className="h-[240px] w-[300px] shrink-0 snap-start"
            >
              <ProjectCard
                slug={p.slug}
                title={p.title}
                description={p.description}
                tools={p.tools}
                href={p.href}
                logo={p.logo}
                status={p.status}
                statusLabel={statusLabel}
                locale={locale}
              />
            </div>
            )
          })}
        </DraggableX>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-surface-1/95 via-surface-1/60 to-transparent dark:from-surface-2/95 dark:via-surface-2/60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-surface-1/95 via-surface-1/60 to-transparent dark:from-surface-2/95 dark:via-surface-2/60"
        />
      </div>

      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border-soft/30">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
