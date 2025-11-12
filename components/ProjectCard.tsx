// components/ProjectCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  slug?: string
  title: string
  description: string
  tools?: string[]
  href?: string
  logo?: string
}

export default function ProjectCard({ slug, title, description, tools = [], href, logo }: ProjectProps) {
  const internal = slug ? `/projects/${slug}` : undefined
  const url = internal || href || '#'
  const isExternal = !internal && url.startsWith('http')
  const Wrapper: any = isExternal ? 'a' : Link
  const wrapperProps = isExternal
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: url }

  return (
    <Wrapper
      {...wrapperProps}
      className="group block h-full rounded-2xl border border-neutral-800 p-5 transition hover:border-neutral-700 hover:bg-neutral-900/40"
    >
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-start gap-4">
          {logo ? (
            <Image
              src={logo}
              alt="logo"
              width={48}
              height={48}
              className="rounded-lg border border-neutral-800"
            />
          ) : (
            <div className="grid h-12 w-12 place-content-center rounded-lg border border-neutral-800 text-xs text-neutral-400">
              LOGO
            </div>
          )}
          <h3 className="text-lg font-semibold text-white group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>
        </div>

        {/* Descrição com clamp de 2 linhas (sem plugin) */}
        <p
          className="text-sm text-neutral-300"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </p>

        {/* Empurra as tags para a base para padronizar a altura */}
        <div className="mt-auto">
          {tools.length > 0 && (
            <ul className="flex flex-wrap gap-2 text-xs text-neutral-400">
              {tools.map((t) => (
                <li key={t} className="rounded-full border border-neutral-800 px-2 py-1">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
