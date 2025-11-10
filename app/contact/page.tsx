// app/contact/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-xl py-16">
        <h2 className="text-2xl font-semibold">Contato</h2>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
