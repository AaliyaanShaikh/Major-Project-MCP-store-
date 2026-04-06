'use client'

import { useState, useEffect } from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div
        className={`mb-16 text-center transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <h1 className="text-4xl font-bold text-neutral-100 sm:text-5xl md:text-6xl">Get in touch</h1>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
          Ready to transform your workflow? Start the conversation—we&apos;re here to help.
        </p>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div
          className={`space-y-8 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">Let&apos;s connect</h2>
            <p className="mt-3 text-neutral-500">
              Questions about MCP services or technical support? Reach out using any channel below.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/[0.06] bg-claude-surface/40 p-6 transition hover:border-white/[0.1]">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-neutral-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-200">Email</h3>
                  <p className="mt-1 text-sm text-neutral-500">support@mcpstore.com</p>
                  <p className="mt-0.5 text-xs text-neutral-600">We reply within one business day</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-claude-surface/40 p-6 transition hover:border-white/[0.1]">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-neutral-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-200">Phone</h3>
                  <p className="mt-1 text-sm text-neutral-500">+1 (555) 123-4567</p>
                  <p className="mt-0.5 text-xs text-neutral-600">Mon–Fri, 9am–6pm PST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all delay-100 duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
