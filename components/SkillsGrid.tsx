// components/SkillsGrid.tsx
import type { SkillCategory } from '@/lib/i18n/content-types'

function LevelBar({ level }: { level: 1 | 2 | 3 | 4 | 5 }) {
  const pct = level * 20

  return (
    <div className="h-2 w-full rounded-full bg-surface-3/80">
      <div className="h-2 rounded-full bg-brand" style={{ width: `${pct}%` }} />
    </div>
  )
}

export default function SkillsGrid({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {categories.map((cat) => (
        <div key={cat.title} className="rounded-3xl bg-card-sheen p-6 shadow-card-inner ring-1 ring-[var(--border-soft)]">
          <h3 className="text-lg font-semibold text-text-primary">{cat.title}</h3>
          <ul className="mt-4 space-y-4">
            {cat.items.map((s) => (
              <li key={s.name} className="grid grid-cols-[140px_1fr] items-center gap-4 text-sm text-text-muted">
                <span className="truncate text-text-muted">{s.name}</span>
                <LevelBar level={s.level} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
