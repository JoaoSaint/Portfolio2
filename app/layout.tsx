
// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'João — Portfólio', template: '%s · João' },
  description: 'Portfólio pessoal: projetos, experiência e formas de contato.',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: { title: 'João — Portfólio', description: 'Projetos, experiência e contato.', url: '/', siteName: 'Portfólio João', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth"><body><div className="mx-auto max-w-5xl px-4">{children}</div></body></html>
  )
}
