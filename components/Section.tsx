
// components/Section.tsx
export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 lg:px-8 xl:max-w-7xl">
      <h2 className="text-2xl font-semibold text-text-primary md:text-3xl">{title}</h2>
      <div className="mt-6 space-y-6 text-text-muted">{children}</div>
    </section>
  )
}
