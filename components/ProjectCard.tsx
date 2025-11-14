// components/ProjectCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import type { ProjectStatus } from '@/lib/i18n/content-types'

export const PROJECT_STATUS_STYLES: Record<ProjectStatus, string> = {
  planning:
    'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-400/50 dark:bg-amber-500/10 dark:text-amber-200',
  'in-progress':
    'border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-400/50 dark:bg-sky-500/10 dark:text-sky-200',
  completed:
    'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-400/50 dark:bg-emerald-500/10 dark:text-emerald-200',
}

interface ProjectProps {
  slug?: string
  title: string
  description: string
  tools?: string[]
  href?: string
  logo?: string
  status: ProjectStatus
  statusLabel: string
  locale: Locale
}

export default function ProjectCard({
  slug,
  title,
  description,
  tools = [],
  href,
  logo,
  status,
  statusLabel,
  locale,
}: ProjectProps) {
  const internal = slug ? `/${locale}/projects/${slug}` : undefined
  const url = internal || href || '#'
  const isExternal = !internal && url.startsWith('http')
  const Wrapper: any = isExternal ? 'a' : Link
  const wrapperProps = isExternal
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: url }

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative block h-full overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-surface-1/70 p-5 pt-8 transition hover:border-[var(--border-strong)] hover:bg-surface-2/60"
    >
      <span
        className={`absolute right-3 top-3 inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium pointer-events-none ${
          PROJECT_STATUS_STYLES[status]
        }`}
        aria-label={statusLabel}
      >
        {statusLabel}
      </span>
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-start gap-4">
          {logo ? (
            <Image
              src={logo}
              alt={`${title} logo`}
              width={48}
              height={48}
              className="rounded-lg border border-[var(--border-soft)]"
            />
          ) : (
            <div className="grid h-12 w-12 place-content-center rounded-lg border border-[var(--border-soft)] text-xs text-text-muted">
              LOGO
            </div>
          )}
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>
        </div>

        <p
          className="text-sm text-text-muted"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </p>

        <div className="mt-auto">
          {tools.length > 0 && (
            <ul className="flex flex-wrap gap-2 text-xs text-text-muted">
              {tools.map((t) => (
                <li key={t} className="rounded-full border border-[var(--border-soft)] px-2 py-1">
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
