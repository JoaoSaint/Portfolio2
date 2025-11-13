
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-surface-2/70 via-transparent to-surface-2/70 py-8 text-center text-sm text-neutral-300">
      <p>© {new Date().getFullYear()} João — Feito com Next.js &amp; Tailwind.</p>
    </footer>
  )
}
