// components/Timeline.tsx
'use client'
import { useState } from 'react'
import Modal from '@/components/Modal'
import { career, academic, type TimelineItem } from '@/data/timeline'
import DraggableX from '@/components/DraggableX'

function DateChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-xs text-neutral-300">
      {children}
    </span>
  )
}

/** ===== Dimensões padronizadas por categoria =====
 * ajuste só aqui para mudar tudo:
 */
const W_CAREER = 'w-[350px]'   // cards mais largos na carreira
const H_CAREER = 'h-[340px]'   // e mais altos
const W_ACAD   = 'w-[310px]'
const H_ACAD   = 'h-[320px]'
const CLAMP    = 4             // nº de linhas da descrição

/* Pílula (data) – no eixo da linha */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-neutral-700 bg-neutral-950 px-2 py-0.5 text-xs text-neutral-300">
      {children}
    </span>
  )
}

/* Card: altura fixa parametrizável, clamp de descrição e tags no rodapé */
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
      <div className={`flex ${heightClass} flex-col rounded-2xl border border-neutral-800 p-4 transition hover:border-neutral-700 hover:bg-neutral-900/40`}>
        <h4 className="font-semibold text-white">{item.title}</h4>

        {item.description && (
          <p
            className="mt-1 text-sm text-neutral-300"
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
          <ul className="mt-2 list-disc pl-5 text-xs text-neutral-400">
            {item.bullets.map((b, i) => (<li key={i}>{b}</li>))}
          </ul>
        )}

        <div className="mt-auto pt-2">
          {item.tags && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-300">
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

/* ===== Trajetória Profissional =====
   - Linha central como referência
   - Datas (pílulas) na linha
   - TODOS os cards acima, com folga generosa
   - Largura/altura padronizadas (W_CAREER/H_CAREER)
*/
export function CareerTimeline() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<TimelineItem | null>(null)
  const openModal = (it: TimelineItem) => { setSelected(it); setOpen(true) }

  return (
    <>
      <DraggableX className="no-scrollbar pr-6">
        {/* inline-flex + w-max = trilho que acompanha todos os cards, sem barra de scroll */}
        <div className="relative inline-flex w-max gap-6 py-10">
          {career.map((it) => (
            <div key={it.id} className={`relative z-10 shrink-0 ${W_CAREER}`}>
              {/* Card (altura/largura padronizadas pelas suas consts) */}
              <TimelineCard item={it} onClick={openModal} heightClass={H_CAREER} />

              {/* Data FIXA logo abaixo do card */}
              <div className="mt-0 flex justify-center">
                <DateChip>{it.period}</DateChip>
              </div>
            </div>
          ))}
        </div>
      </DraggableX>

      <Modal open={open} onClose={() => setOpen(false)} title={selected?.title}>
        {selected && (
          <>
            <p><strong>Período:</strong> {selected.period}</p>
            {selected.details && <p className="mt-2">{selected.details}</p>}
            {selected.tags?.length ? <p className="mt-2"><strong>Tags:</strong> {selected.tags.join(', ')}</p> : null}
          </>
        )}
      </Modal>
    </>
  )
}


/* ===== Trajetória Acadêmica =====
   - Linha central
   - Cards acima/abaixo, bem afastados da linha
   - Largura/altura padronizadas (W_ACAD/H_ACAD)
*/
export function AcademicTimeline() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<TimelineItem | null>(null)
  const openModal = (it: TimelineItem) => { setSelected(it); setOpen(true) }

  return (
    <>
      <DraggableX className="no-scrollbar pr-6">
        <div className="relative flex gap-6 py-2">
          {/* Linha central */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 h-px -translate-y-1/2 bg-neutral-800" />

          {academic.map((it) => (
            <div key={it.id} className={`relative z-10 shrink-0 ${W_ACAD}`}>
              {/* pílula no eixo */}
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

      <Modal open={open} onClose={() => setOpen(false)} title={selected?.title}>
        {selected && (
          <>
            <p><strong>Período:</strong> {selected.period}</p>
            {selected.details && <p className="mt-2">{selected.details}</p>}
            {selected.tags?.length ? <p className="mt-2"><strong>Tags:</strong> {selected.tags.join(', ')}</p> : null}
          </>
        )}
      </Modal>
    </>
  )
}
