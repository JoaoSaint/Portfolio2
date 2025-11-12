
// components/Section.tsx
export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl py-14">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}
