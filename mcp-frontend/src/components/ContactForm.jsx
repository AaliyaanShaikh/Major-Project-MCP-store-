'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const fieldClass =
    'w-full rounded-xl border border-white/[0.08] bg-claude-surface px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition focus:ring-2 focus:ring-white/10'

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6">
        <div className="flex items-start gap-3">
          <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400/90" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h3 className="text-sm font-medium text-emerald-100">Message sent</h3>
            <p className="mt-1 text-sm text-emerald-200/70">
              Thank you — we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-claude-surface/30 p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-neutral-100 sm:text-2xl">Send us a message</h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium text-neutral-500">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium text-neutral-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-xs font-medium text-neutral-500">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={fieldClass}
            placeholder="What is this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-xs font-medium text-neutral-500">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className={`${fieldClass} resize-y`}
            placeholder="Tell us more…"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-neutral-200 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending…
              </span>
            ) : (
              'Send message'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
