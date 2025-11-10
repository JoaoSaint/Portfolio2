// components/Navbar.tsx
import Link from 'next/link'

const links = [
  { href: '/', label: 'Início' },
  { href: '/projects', label: 'Projetos' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contato' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">João</Link>
        <ul className="flex items-center gap-5 text-sm text-neutral-300">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white">{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
