// app/projects/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl py-16">
        <h2 className="text-2xl font-semibold">Projetos em destaque</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
