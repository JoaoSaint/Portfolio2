
// components/Navbar.tsx
import Link from 'next/link'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Repertório' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#timeline-prof', label: 'Carreira' },
  { href: '#timeline-edu', label: 'Acadêmico' },
  { href: '#contatos', label: 'Contatos' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-surface-1/80 via-surface-2/70 to-surface-1/80 backdrop-blur supports-[backdrop-filter]:bg-surface-1/70">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          href="#inicio"
          className="text-lg font-semibold tracking-tight text-white transition hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
        >
          João
        </Link>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-neutral-200">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded px-2 py-1 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/60"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
