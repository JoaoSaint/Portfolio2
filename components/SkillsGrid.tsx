
// components/SkillsGrid.tsx
import { skills } from '@/data/skills'
function LevelBar({ level }: { level: 1|2|3|4|5 }) { const pct = level * 20; return (<div className="h-2 w-full rounded bg-neutral-800"><div className="h-2 rounded bg-white" style={{ width: `${pct}%` }} /></div>) }
export default function SkillsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {skills.map((cat) => (
        <div key={cat.title} className="rounded-2xl border border-neutral-800 p-5">
          <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
          <ul className="mt-4 space-y-3">
            {cat.items.map((s) => (
              <li key={s.name} className="grid grid-cols-[140px_1fr] items-center gap-4 text-sm">
                <span className="text-neutral-300">{s.name}</span><LevelBar level={s.level} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
