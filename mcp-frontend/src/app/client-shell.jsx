'use client'

import { useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import IntroOverlay from '@/components/IntroOverlay'
import AppSidebar, { MobileHeader } from '@/components/AppSidebar'
import Footer from '@/components/Footer'

export default function ClientShell({ children }) {
  const pathname = usePathname()
  const [showIntro, setShowIntro] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])

  return (
    <>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      <div className="flex min-h-screen bg-claude-bg">
        <AppSidebar mobileOpen={mobileMenuOpen} onCloseMobile={closeMobileMenu} />
        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <MobileHeader onOpenMenu={() => setMobileMenuOpen(true)} />
          <main className="flex flex-1 flex-col overflow-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                className="flex flex-1 flex-col"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
