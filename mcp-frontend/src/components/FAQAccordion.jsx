'use client'

import { useState } from 'react'

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is MCP Store?',
      answer:
        'MCP Store is a comprehensive platform for server management, monitoring, and deployment. We provide enterprise-grade solutions for businesses of all sizes to manage their infrastructure efficiently.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Getting started is easy! Simply create an account, choose a plan that fits your needs, and follow our step-by-step setup guide. Our support team is always available to help you get started.',
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We offer 24/7 customer support through multiple channels including email, live chat, and phone. We also provide comprehensive documentation, video tutorials, and a community forum.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, security is our top priority. We use enterprise-grade encryption, follow industry best practices, and are compliant with major security standards. Your data is protected with multiple layers of security.',
    },
    {
      question: 'Can I scale my infrastructure?',
      answer:
        'Absolutely! Our platform is designed for scalability. You can easily add or remove servers, upgrade your plan, and scale your infrastructure based on your changing needs.',
    },
    {
      question: 'What are your pricing options?',
      answer:
        'We offer flexible pricing plans to suit different needs, from individual developers to large enterprises. Contact our sales team for a customized quote based on your specific requirements.',
    },
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-white/[0.06] bg-claude-surface/40"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/[0.03]"
            onClick={() => toggleAccordion(index)}
          >
            <span className="pr-4 text-sm font-medium text-neutral-200">{faq.question}</span>
            <svg
              className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openIndex === index && (
            <div className="border-t border-white/[0.06] px-5 pb-4 pt-0">
              <p className="pt-3 text-sm leading-relaxed text-neutral-500">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
