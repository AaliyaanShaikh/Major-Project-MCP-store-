import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FULL_TEXT = 'Welcome to MCP store'

/**
 * ChatGPT-inspired intro: flipping dots → typewriter welcome → fade out.
 * Monochrome (black / white / gray).
 */
function IntroOverlay({ onComplete }) {
  const [phase, setPhase] = useState('dots')

  const finish = useCallback(() => {
    onComplete?.()
  }, [onComplete])

  // Dots phase → typing
  useEffect(() => {
    if (phase !== 'dots') return
    const id = setTimeout(() => setPhase('typing'), 2600)
    return () => clearTimeout(id)
  }, [phase])

  const [typed, setTyped] = useState('')

  // Reset typed when entering typing
  useEffect(() => {
    if (phase === 'typing') setTyped('')
  }, [phase])

  // Typewriter + hold → exit
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

  // Fade complete
  useEffect(() => {
    if (phase !== 'exit') return
    const id = setTimeout(finish, 620)
    return () => clearTimeout(id)
  }, [phase, finish])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black px-6"
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
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-snug">
              {typed}
              {phase === 'typing' && typed.length < FULL_TEXT.length && (
                <span
                  className="inline-block w-0.5 h-[1.05em] bg-white ml-0.5 align-middle animate-pulse"
                  aria-hidden
                />
              )}
              {phase === 'typing' && typed.length === FULL_TEXT.length && (
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full bg-white ml-2 align-middle opacity-95"
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
