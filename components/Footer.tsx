
// components/Footer.tsx
export default function Footer() {
  return (
    <footer
      className="mt-16 py-8 text-center text-sm text-text-muted"
      style={{ background: 'var(--footer-gradient)' }}
    >
      <p>© {new Date().getFullYear()} João — Feito com Next.js &amp; Tailwind.</p>
    </footer>
  )
}
