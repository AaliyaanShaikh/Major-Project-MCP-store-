'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FULL_TEXT = 'Welcome to MCP store'

function IntroOverlay({ onComplete }) {
  const [phase, setPhase] = useState('dots')

  const finish = useCallback(() => {
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    if (phase !== 'dots') return
    const id = setTimeout(() => setPhase('typing'), 2600)
    return () => clearTimeout(id)
  }, [phase])

  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (phase === 'typing') setTyped('')
  }, [phase])

  useEffect(() => {
    if (phase !== 'typing') return

    if (typed.length < FULL_TEXT.length) {
      const id = setTimeout(() => {
        setTyped(FULL_TEXT.slice(0, typed.length + 1))
      }, 42)
      return () => clearTimeout(id)
    }

    const id = setTimeout(() => setPhase('exit'), 1100)
    return () => clearTimeout(id)
  }, [phase, typed])

  useEffect(() => {
    if (phase !== 'exit') return
    const id = setTimeout(finish, 620)
    return () => clearTimeout(id)
  }, [phase, finish])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-claude-bg px-6"
      role="presentation"
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence mode="wait">
        {phase === 'dots' && (
          <motion.div
            key="dots"
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.28 } }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="mcp-intro-dot"
                style={{ animationDelay: `${i * 0.18}s` }}
              />
            ))}
          </motion.div>
        )}

        {(phase === 'typing' || phase === 'exit') && (
          <motion.div
            key="welcome"
            className="max-w-2xl text-center font-medium"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className="text-2xl leading-snug tracking-tight text-neutral-100 sm:text-3xl md:text-4xl">
              {typed}
              {phase === 'typing' && typed.length < FULL_TEXT.length && (
                <span
                  className="ml-0.5 inline-block h-[1.05em] w-0.5 animate-pulse bg-neutral-300 align-middle"
                  aria-hidden
                />
              )}
              {phase === 'typing' && typed.length === FULL_TEXT.length && (
                <span
                  className="ml-2 inline-block h-2.5 w-2.5 rounded-full bg-neutral-300 align-middle opacity-95"
                  aria-hidden
                />
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default IntroOverlay
