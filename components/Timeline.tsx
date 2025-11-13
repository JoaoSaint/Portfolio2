// components/Timeline.tsx
'use client'
import { useState } from 'react'
import Modal from '@/components/Modal'
import type { TimelineItem } from '@/lib/i18n/content-types'
import DraggableX from '@/components/DraggableX'

function DateChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-chip-text shadow-card-inner ring-1 ring-[var(--border-soft)]">
      {children}
    </span>
  )
}

const W_CAREER = 'w-[350px]'
const H_CAREER = 'h-[340px]'
const W_ACAD = 'w-[310px]'
const H_ACAD = 'h-[320px]'
const CLAMP = 4

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-chip-text shadow-card-inner ring-1 ring-[var(--border-soft)]">
      {children}
    </span>
  )
}

function TimelineCard({
  item,
  onClick,
  heightClass,
  clamp = CLAMP,
}: {
  item: TimelineItem
  onClick?: (it: TimelineItem) => void
  heightClass: string
  clamp?: number
}) {
  return (
    <button type="button" onClick={() => onClick?.(item)} className="group block w-full text-left">
      <div
        className={`flex ${heightClass} flex-col rounded-3xl bg-card-sheen p-5 text-text-muted shadow-card-inner ring-1 ring-[var(--border-soft)] transition group-hover:ring-brand/40`}
      >
        <h4 className="font-semibold text-text-primary transition group-hover:text-brand">{item.title}</h4>

        {item.description && (
          <p
            className="mt-2 text-sm text-text-muted"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: clamp,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {item.description}
          </p>
        )}

        {item.bullets && item.bullets.length > 0 && (
          <ul className="mt-2 list-disc pl-5 text-xs text-text-muted">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-2">
          {item.tags && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full bg-surface-3/80 px-2 py-0.5 text-xs text-text-primary">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </button>
  )
}

interface TimelineLabels {
  period: string
  tags: string
  close: string
  closeAria: string
}

export function CareerTimeline({ items, labels }: { items: TimelineItem[]; labels: TimelineLabels }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<TimelineItem | null>(null)
  const openModal = (it: TimelineItem) => {
    setSelected(it)
    setOpen(true)
  }

  return (
    <>
      <DraggableX className="no-scrollbar pr-6">
        <div className="relative inline-flex w-max gap-6 py-10">
          {items.map((it) => (
            <div key={it.id} className={`relative z-10 shrink-0 ${W_CAREER}`}>
              <TimelineCard item={it} onClick={openModal} heightClass={H_CAREER} />
              <div className="mt-0 flex justify-center">
                <DateChip>{it.period}</DateChip>
              </div>
            </div>
          ))}
        </div>
      </DraggableX>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={selected?.title}
        closeLabel={labels.close}
        closeAriaLabel={labels.closeAria}
      >
        {selected && (
          <>
            <p>
              <strong>{labels.period}:</strong> {selected.period}
            </p>
            {selected.details && <p className="mt-2">{selected.details}</p>}
            {selected.tags?.length ? (
              <p className="mt-2">
                <strong>{labels.tags}:</strong> {selected.tags.join(', ')}
              </p>
            ) : null}
          </>
        )}
      </Modal>
    </>
  )
}

export function AcademicTimeline({ items, labels }: { items: TimelineItem[]; labels: TimelineLabels }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<TimelineItem | null>(null)
  const openModal = (it: TimelineItem) => {
    setSelected(it)
    setOpen(true)
  }

  return (
    <>
      <DraggableX className="no-scrollbar pr-6">
        <div className="relative flex gap-6 py-6">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 h-px -translate-y-1/2 bg-[var(--timeline-line)]" />

          {items.map((it) => (
            <div key={it.id} className={`relative z-10 shrink-0 ${W_ACAD}`}>
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <Pill>{it.period}</Pill>
              </div>

              {it.side === 'above' ? (
                <div className="mb-96">
                  <TimelineCard item={it} onClick={openModal} heightClass={H_ACAD} />
                </div>
              ) : (
                <div className="mt-96">
                  <TimelineCard item={it} onClick={openModal} heightClass={H_ACAD} />
                </div>
              )}
            </div>
          ))}
        </div>
      </DraggableX>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={selected?.title}
        closeLabel={labels.close}
        closeAriaLabel={labels.closeAria}
      >
        {selected && (
          <>
            <p>
              <strong>{labels.period}:</strong> {selected.period}
            </p>
            {selected.details && <p className="mt-2">{selected.details}</p>}
            {selected.tags?.length ? (
              <p className="mt-2">
                <strong>{labels.tags}:</strong> {selected.tags.join(', ')}
              </p>
            ) : null}
          </>
        )}
      </Modal>
    </>
  )
}
