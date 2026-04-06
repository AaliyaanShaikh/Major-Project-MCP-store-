'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="shrink-0 border-t border-white/[0.06] bg-claude-bg py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-neutral-600">© {new Date().getFullYear()} MCP Store, Designed by FinalCode</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-neutral-500">
          <Link href="/" className="transition hover:text-neutral-300">
            Home
          </Link>
          <Link href="/info" className="transition hover:text-neutral-300">
            Info
          </Link>
          <Link href="/resources" className="transition hover:text-neutral-300">
            Resources
          </Link>
          <Link href="/contact" className="transition hover:text-neutral-300">
            Contact
          </Link>
          <span className="text-neutral-700">·</span>
          <Link href="/privacy" className="transition hover:text-neutral-300">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-neutral-300">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
