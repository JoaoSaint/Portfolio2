// components/ContactGrid.tsx
import Image from 'next/image'

export default function ContactGrid() {
  const items = [
    { title: 'Email',     desc: 'hiimhiru@hotmail.com',      href: 'mailto:hiimhiru@hotmail.com',    external: true, icon: '/logos/email.avif' },
    { title: 'WhatsApp',  desc: '+55 (16) 99367-8079',       href: 'https://wa.me/16993678079',         external: true, icon: '/logos/whatsapp.png' },
    { title: 'GitHub',    desc: 'github.com/JoaoSaint',        href: 'https://github.com/JoaoSaint',     external: true, icon: '/logos/github.png' },
    { title: 'LinkedIn',  desc: 'linkedin.com/in/joao-santos-906b512b0',   href: 'https://linkedin.com/in/joao-santos-906b512b0',external: true, icon: '/logos/linkedin.png' },
  ]

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((it) => {
        const Wrapper: any = 'a'
        const wrapperProps = it.external
          ? { href: it.href, target: '_blank', rel: 'noopener noreferrer' }
          : { href: it.href }

        return (
          <Wrapper
            key={it.title}
            {...wrapperProps}
            className={`group flex items-center gap-3 rounded-2xl border border-neutral-800 p-5 ${it.title === 'Email' ? '' : 'hover:bg-neutral-900/40'}`}
          >
            {/* Ícone à esquerda (troque os .png em /public/icons/) */}
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-neutral-800">
              <Image src={it.icon} alt={`${it.title} icon`} fill className="object-contain p-1.5" />
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-lg font-semibold text-white">{it.title}</h3>
              <p className="truncate text-sm text-neutral-300">{it.desc}</p>
            </div>
          </Wrapper>
        )
      })}
    </div>
  )
}
