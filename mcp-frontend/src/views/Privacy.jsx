export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold text-neutral-100 sm:text-4xl">Privacy policy</h1>
      <p className="mb-10 text-sm text-neutral-600">Last updated: April 6, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-neutral-500 sm:text-base">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">Introduction</h2>
          <p>
            MCP Store (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This policy describes how we
            collect, use, and protect information when you use our website and related services.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">Information we collect</h2>
          <p className="mb-2">We may collect:</p>
          <ul className="list-inside list-disc space-y-1 text-neutral-500">
            <li>Account details you provide (e.g. name, email) when you register or contact us</li>
            <li>Usage data such as pages viewed, approximate location from IP, and device/browser type</li>
            <li>Cookies and similar technologies as described below</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">How we use information</h2>
          <p>
            We use collected information to operate and improve MCP Store, respond to inquiries,
            secure our services, comply with law, and communicate with you about updates or support
            where permitted.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">Cookies</h2>
          <p>
            We may use cookies and local storage for essential functionality, preferences, and
            analytics. You can control cookies through your browser settings; disabling some cookies
            may limit features.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">Third parties</h2>
          <p>
            We may use third-party services (e.g. hosting, analytics) that process data on our
            behalf. Their use is governed by their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">Data retention & security</h2>
          <p>
            We retain information only as long as needed for the purposes above or as required by law.
            We apply reasonable technical and organizational measures to protect data; no method of
            transmission over the internet is completely secure.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or object to
            certain processing of your personal data. Contact us to make a request.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">Children</h2>
          <p>MCP Store is not directed at children under 13. We do not knowingly collect their data.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">Changes</h2>
          <p>
            We may update this policy from time to time. We will post the revised version on this page
            and adjust the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-neutral-200">Contact</h2>
          <p>
            Questions about this policy: <span className="text-neutral-400">privacy@mcpstore.com</span>{' '}
            (placeholder — replace with your real contact).
          </p>
        </section>
      </div>
    </div>
  )
}
