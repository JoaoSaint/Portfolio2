// app/about/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="prose prose-invert mx-auto max-w-3xl py-16">
        <h2>Sobre</h2>
        <p>
          Sou especialista em dados e automação. Gosto de construir pipelines limpos,
          bots resilientes e dashboards que contam histórias úteis.
        </p>
        <p>
          Experiência com Python, Power BI, Selenium, e integrações com APIs internas.
        </p>
      </main>
      <Footer />
    </>
  )
}
