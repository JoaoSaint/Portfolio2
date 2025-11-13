// components/Footer.tsx
export default function Footer({ textTemplate }: { textTemplate: string }) {
  const year = new Date().getFullYear().toString()
  const text = textTemplate.replace('{year}', year)

  return (
    <footer
      className="mt-16 py-8 text-center text-sm text-text-muted"
      style={{ background: 'var(--footer-gradient)' }}
    >
      <p>{text}</p>
    </footer>
  )
}
