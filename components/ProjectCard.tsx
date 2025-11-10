// components/ProjectCard.tsx
import Image from 'next/image'

interface ProjectProps {
  title: string
  description: string
  tools?: string[]
  href?: string
  logo?: string
}

export default function ProjectCard({ title, description, tools = [], href, logo }: ProjectProps) {
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group block rounded-2xl border border-neutral-800 p-5 transition hover:border-neutral-700 hover:bg-neutral-900/40"
    >
      <div className="flex items-start gap-4">
        {logo ? (
          <Image src={logo} alt="logo" width={48} height={48} className="rounded-lg border border-neutral-800" />
        ) : (
          <div className="grid h-12 w-12 place-content-center rounded-lg border border-neutral-800 text-xs text-neutral-400">
            LOGO
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:underline group-hover:underline-offset-4">{title}</h3>
          <p className="mt-1 text-sm text-neutral-300">{description}</p>
          {tools.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-400">
              {tools.map((t) => (
                <li key={t} className="rounded-full border border-neutral-800 px-2 py-1">{t}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </a>
  )
}
