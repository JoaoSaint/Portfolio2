// components/DraggableX.tsx
'use client'
import { useRef, useState, useCallback } from 'react'

export default function DraggableX({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const state = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false })
  const [grabbing, setGrabbing] = useState(false)

  const down = useCallback((x: number) => {
    const el = ref.current
    if (!el) return
    state.current = { active: true, startX: x, scrollLeft: el.scrollLeft, moved: false }
    setGrabbing(true)
  }, [])

  const move = useCallback((x: number) => {
    const el = ref.current
    if (!el || !state.current.active) return
    const dx = x - state.current.startX
    if (Math.abs(dx) > 3) state.current.moved = true
    el.scrollLeft = state.current.scrollLeft - dx
  }, [])

  const up = useCallback(() => {
    state.current.active = false
    setGrabbing(false)
  }, [])

  return (
    <div
      ref={ref}
      className={`no-scrollbar overflow-x-auto overflow-y-visible select-none ${grabbing ? 'cursor-grabbing' : 'cursor-grab'} ${className}`}
      onMouseDown={(e) => down(e.pageX)}
      onMouseMove={(e) => state.current.active && move(e.pageX)}
      onMouseUp={up}
      onMouseLeave={up}
      onTouchStart={(e) => down(e.touches[0].pageX)}
      onTouchMove={(e) => { move(e.touches[0].pageX); e.preventDefault() }}
      onTouchEnd={up}
      // se arrastou, evita que um "click" nos filhos dispare por engano
      onClickCapture={(e) => { if (state.current.moved) { e.preventDefault(); e.stopPropagation() } }}
    >
      {children}
    </div>
  )
}
