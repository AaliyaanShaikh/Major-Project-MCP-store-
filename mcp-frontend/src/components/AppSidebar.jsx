'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', path: '/', icon: 'home' },
  { name: 'Info', path: '/info', icon: 'info' },
  { name: 'Resources', path: '/resources', icon: 'grid' },
  { name: 'Contact', path: '/contact', icon: 'mail' },
]

const recents = [
  { label: 'MCP directory', path: '/' },
  { label: 'Official servers', path: '/resources' },
  { label: 'About the platform', path: '/info' },
]

function Icon({ name, className = 'h-4 w-4' }) {
  if (name === 'home')
    return (
      <svg className={className} width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    )
  if (name === 'info')
    return (
      <svg className={className} width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  if (name === 'grid')
    return (
      <svg className={className} width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  return (
    <svg className={className} width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

export function MobileHeader({ onOpenMenu }) {
  return (
    <header className="flex items-center justify-between border-b border-white/[0.06] bg-claude-bg px-4 py-3 lg:hidden">
      <Link href="/" className="text-lg font-semibold tracking-tight text-neutral-100">
        MCP Store
      </Link>
      <button
        type="button"
        onClick={onOpenMenu}
        className="rounded-xl p-2 text-neutral-400 transition hover:bg-white/[0.06] hover:text-neutral-200"
        aria-label="Open menu"
      >
        <svg className="h-6 w-6" width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  )
}

export default function AppSidebar({ mobileOpen, onCloseMobile }) {
  const pathname = usePathname()

  useEffect(() => {
    onCloseMobile?.()
  }, [pathname, onCloseMobile])

  const linkBase =
    'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors'
  const inactive = 'text-neutral-500 hover:bg-white/[0.04] hover:text-neutral-200'
  const active = 'bg-white/[0.06] text-neutral-100'

  const sidebarInner = (
    <div className="flex h-full flex-col px-3 py-5">
      <Link href="/" className="mb-8 px-2 text-xl font-semibold tracking-tight text-neutral-100">
        MCP Store
      </Link>

      <div className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`${linkBase} ${pathname === item.path ? active : inactive}`}
          >
            <Icon name={item.icon} />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      <p className="mb-2 mt-8 px-2 text-xs font-medium uppercase tracking-wider text-neutral-600">
        Recents
      </p>
      <div className="space-y-0.5">
        {recents.map((r) => (
          <Link
            key={r.path + r.label}
            href={r.path}
            className="block truncate rounded-lg px-2 py-2 text-sm text-neutral-500 transition hover:bg-white/[0.03] hover:text-neutral-300"
          >
            {r.label}
          </Link>
        ))}
      </div>

      <div className="mt-auto space-y-2 border-t border-white/[0.06] pt-5">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-claude-surface text-sm font-medium text-neutral-300">
            M
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-neutral-200">Member</p>
            <p className="truncate text-xs text-neutral-600">Free plan</p>
          </div>
        </div>
        <div className="flex gap-2 px-1">
          <Link
            href="/login"
            className="flex-1 rounded-xl border border-white/[0.08] py-2 text-center text-xs font-medium text-neutral-400 transition hover:border-white/[0.14] hover:text-neutral-200"
          >
            Log in
          </Link>
          <Link
            href="/sign"
            className="flex-1 rounded-xl bg-neutral-200 py-2 text-center text-xs font-semibold text-neutral-900 transition hover:bg-white"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-60 shrink-0 border-r border-white/[0.06] bg-claude-sidebar lg:flex lg:flex-col">
        {sidebarInner}
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!mobileOpen}
        onClick={onCloseMobile}
      />
      <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-[min(18rem,85vw)] flex-col border-r border-white/[0.06] bg-claude-sidebar transition-transform duration-200 ease-out lg:hidden ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      >
        {sidebarInner}
      </aside>
    </>
  )
}
