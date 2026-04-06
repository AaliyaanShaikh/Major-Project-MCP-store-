'use client'

import { useEffect, useState } from 'react'
import FAQAccordion from '../components/FAQAccordion'

const Info = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`mx-auto max-w-4xl px-4 py-10 transition-all duration-700 sm:px-6 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <h1 className="mb-8 text-center text-4xl font-bold text-neutral-100 sm:text-5xl">
        About MCP Store
      </h1>

      <div className="prose prose-invert mx-auto mb-12 max-w-none">
        <p className="text-lg leading-relaxed text-neutral-500">
          MCP Store is a comprehensive platform for server management, monitoring, and deployment. We
          provide enterprise-grade solutions for businesses of all sizes.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-neutral-100">Our mission</h2>
        <p className="text-neutral-500">
          To simplify server management and provide reliable, scalable infrastructure solutions that
          help businesses focus on what matters most—their core operations.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-neutral-100">Key features</h2>
        <ul className="list-inside list-disc space-y-2 text-neutral-500 marker:text-neutral-600">
          <li>Real-time server monitoring and analytics</li>
          <li>Automated deployment and scaling</li>
          <li>Advanced security and compliance features</li>
          <li>24/7 customer support</li>
          <li>Global infrastructure with multiple data centers</li>
          <li>Cost-effective pricing plans</li>
        </ul>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold text-neutral-100">Frequently asked questions</h2>
        <FAQAccordion />
      </div>
    </div>
  )
}

export default Info
