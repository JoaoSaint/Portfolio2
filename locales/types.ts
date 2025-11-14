import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import type { Project, ProjectStatus, SkillCategory, TimelineItem } from '@/lib/i18n/content-types'

export interface Translation {
  metadata: Metadata
  navbar: {
    brand: string
    links: { href: string; label: string }[]
    themeToggle: {
      ariaLabel: string
      light: string
      dark: string
    }
    language: {
      label: string
      options: Record<Locale, string>
    }
  }
  hero: {
    badge: string
    title: string
    description: string
    ctaProjects: string
    ctaContact: string
    imageAlt: string
  }
  about: {
    title: string
    intro: { title: string; description: string }
    studies: { title: string; description: string }
    work: { title: string; description: string }
  }
  sections: {
    skills: string
    projects: string
    career: string
    academic: string
    contacts: string
  }
  projects: Project[]
  projectStatusLabels: Record<ProjectStatus, string>
  projectControls: {
    previousLabel: string
    nextLabel: string
    previousAria: string
    nextAria: string
  }
  skills: SkillCategory[]
  timeline: {
    career: TimelineItem[]
    academic: TimelineItem[]
    labels: {
      period: string
      tags: string
      close: string
      closeAria: string
    }
  }
  footer: {
    textTemplate: string
  }
  projectPage: {
    backLabel: string
    notFoundTitle: string
  }
}

export type ClientTranslation = Omit<Translation, 'metadata'>
