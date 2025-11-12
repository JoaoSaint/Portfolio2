
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800 py-6 text-center text-sm text-neutral-400">
      <p>© {new Date().getFullYear()} João — Feito com Next.js & Tailwind.</p>
    </footer>
  )
}
