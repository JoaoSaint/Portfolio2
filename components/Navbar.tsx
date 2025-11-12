
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
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="#inicio" className="font-semibold tracking-tight">João</Link>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
          {links.map((l) => (<li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>))}
        </ul>
      </nav>
    </header>
  )
}
