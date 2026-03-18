import { FormEvent, useState } from 'react'
import { Mail, MessageCircle, UserRound } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

type FormState = {
  fullName: string
  email: string
  whatsapp: string
  message: string
}

const initialState: FormState = {
  fullName: '',
  email: '',
  whatsapp: '',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const cleanMessage =
      form.message.trim() || 'Olá, Igor. Gostaria de entrar em contato.'

    const subject = `Contato pelo portfolio - Igor Lima`

    const body = [
      cleanMessage,
      '',
      '---',
      `Nome completo: ${form.fullName}`,
      `E-mail: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
    ].join('\n')

    const mailtoUrl = `mailto:igors.lima12@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-copy">
            <SectionTitle
              overline="CONTATO"
              title="Vamos conversar"
              description="Preencha seus dados e o seu aplicativo de e-mail será aberto com a mensagem pronta para envio."
            />

            <div className="contact-info-list">
              <div className="contact-info-item">
                <Mail size={18} />
                <span>igors.lima12@gmail.com</span>
              </div>
              <div className="contact-info-item">
                <MessageCircle size={18} />
                <span>+55 12 99784-8287</span>
              </div>
              <div className="contact-info-item">
                <UserRound size={18} />
                <span>Atendimento profissional via LinkedIn, WhatsApp ou e-mail</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nome completo
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                placeholder="Digite seu nome completo"
                required
              />
            </label>

            <label>
              E-mail
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
            </label>

            <label>
              WhatsApp
              <input
                type="tel"
                value={form.whatsapp}
                onChange={(e) => updateField('whatsapp', e.target.value)}
                placeholder="Digite seu WhatsApp"
                required
              />
            </label>

            <label>
              Mensagem
              <textarea
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="Escreva sua mensagem"
                rows={6}
                required
              />
            </label>

            <button type="submit" className="button button-primary contact-button">
              Abrir e-mail para envio
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}