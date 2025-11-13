
// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useTheme } from '@/components/theme-provider'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Repertório' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#timeline-prof', label: 'Carreira' },
  { href: '#timeline-edu', label: 'Acadêmico' },
  { href: '#contatos', label: 'Contatos' },
]

const icons = {
  sun: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 10 3.5ZM5.47 5.47a.75.75 0 0 1 1.06 0l.35.35a.75.75 0 0 1-1.06 1.06l-.35-.35a.75.75 0 0 1 0-1.06ZM3.5 9.25A.75.75 0 0 1 4.25 8.5h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3.5 9.25Zm11.75-.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM6.88 10A3.13 3.13 0 1 1 10 13.13 3.14 3.14 0 0 1 6.88 10Zm8.65-4.53a.75.75 0 0 0-1.06 0l-.35.35a.75.75 0 1 0 1.06 1.06l.35-.35a.75.75 0 0 0 0-1.06ZM10 16.5a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 10 16.5Zm-4.53-2.35a.75.75 0 0 0-1.06 1.06l.35.35a.75.75 0 1 0 1.06-1.06l-.35-.35Zm9.56 0-.35.35a.75.75 0 1 0 1.06 1.06l.35-.35a.75.75 0 1 0-1.06-1.06Z"
        fill="currentColor"
      />
    </svg>
  ),
  moon: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
      <path
        d="M10.56 2.25a.75.75 0 0 0-.72.45A6.5 6.5 0 0 0 17.3 10.1a.75.75 0 0 0 1.06.82 8 8 0 1 1-8.7-8.52.75.75 0 0 0-.1-1.15.8.8 0 0 0-.5-.15Z"
        fill="currentColor"
      />
    </svg>
  ),
}

export default function Navbar() {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border-soft)] backdrop-blur supports-[backdrop-filter]:bg-transparent"
      style={{ background: 'var(--nav-gradient)' }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          href="#inicio"
          className="text-lg font-semibold tracking-tight text-text-primary transition hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
        >
          João
        </Link>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded px-2 py-1 transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Alternar tema"
          aria-pressed={isDark}
          className="ml-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--control-bg)] px-3 py-1.5 text-xs font-medium text-text-muted transition hover:bg-[var(--control-bg-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
        >
          {isDark ? icons.moon : icons.sun}
          <span aria-hidden className="hidden sm:inline text-xs">
            {isDark ? 'Modo escuro' : 'Modo claro'}
          </span>
        </button>
      </nav>
    </header>
  )
}
