// components/Modal.tsx
'use client'
import { useEffect } from 'react'

export default function Modal({
  open,
  onClose,
  title,
  children,
  closeLabel,
  closeAriaLabel,
}: {
  open: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
  closeLabel: string
  closeAriaLabel: string
}) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center">
      <button
        aria-label={closeAriaLabel}
        onClick={onClose}
        className="absolute inset-0"
        style={{ background: 'var(--modal-backdrop)' }}
      />
      <div className="relative z-[101] w-[min(720px,92vw)] rounded-2xl border border-[var(--modal-border)] bg-[var(--modal-bg)] p-6 shadow-xl">
        {title && <h3 className="text-xl font-semibold text-text-primary">{title}</h3>}
        <div className="prose mt-4 max-w-none text-sm dark:prose-invert">
          {children}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl border border-[var(--border-soft)] px-3 py-1.5 text-sm text-text-muted transition hover:bg-[var(--control-bg)]"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
