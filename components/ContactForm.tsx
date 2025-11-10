// components/ContactForm.tsx
'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<boolean | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      message: String(data.get('message') || ''),
    }
    setLoading(true)
    try {
      const res = await fetch('/api/py/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setOk(res.ok)
    } catch {
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={onSubmit}>
      <div>
        <label className="block text-sm text-neutral-300">Nome</label>
        <input name="name" className="mt-1 w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm text-neutral-300">Email</label>
        <input name="email" type="email" className="mt-1 w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm text-neutral-300">Mensagem</label>
        <textarea name="message" rows={5} className="mt-1 w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2" />
      </div>
      <button disabled={loading} type="submit" className="rounded-xl bg-white px-4 py-2 text-neutral-900">
        {loading ? 'Enviando…' : 'Enviar'}
      </button>
      {ok === true && <p className="text-sm text-emerald-400">Mensagem enviada.</p>}
      {ok === false && <p className="text-sm text-red-400">Falha ao enviar.</p>}
    </form>
  )
}
