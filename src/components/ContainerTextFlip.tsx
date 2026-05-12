import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Props {
  words: string[]
  interval?: number
  animationDuration?: number
  className?: string
  textClassName?: string
  variant?: 'gradient' | 'glass' | 'neon' | 'primary'
}

export function ContainerTextFlip({
  words,
  interval = 3000,
  animationDuration = 700,
  className,
  textClassName,
  variant = 'gradient',
}: Props) {
  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setIsAnimating(false)
      }, animationDuration / 2)
    }, interval)
    return () => clearInterval(id)
  }, [words.length, interval, animationDuration])

  const variants = {
    gradient: {
      container:
        'bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#C1121F] text-white border border-white/25 shadow-2xl shadow-[#00B4D8]/40',
      glow: 'before:bg-gradient-to-r before:from-[#00B4D8]/40 before:via-[#0096C7]/40 before:to-[#C1121F]/40',
    },
    primary: {
      container: 'bg-[#00B4D8] text-white border border-[#00B4D8]/60 shadow-2xl shadow-[#00B4D8]/30',
      glow: 'before:bg-[#00B4D8]/30',
    },
    neon: {
      container: 'bg-slate-950 text-cyan-300 border border-cyan-400/60 shadow-2xl shadow-cyan-400/40',
      glow: 'before:bg-cyan-400/30',
    },
    glass: {
      container: 'bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-2xl shadow-black/20',
      glow: 'before:bg-white/10',
    },
  } as const

  const v = variants[variant]
  const currentWord = words[index]

  return (
    <div className="relative inline-flex items-center justify-center">
      <motion.div
        animate={{
          scale: isAnimating ? [1, 1.05, 1] : 1,
          opacity: isAnimating ? [0.7, 1, 0.7] : 0.85,
        }}
        transition={{ duration: animationDuration / 1000, ease: 'easeInOut' }}
        className={cn(
          'absolute inset-0 rounded-2xl blur-xl before:absolute before:inset-0 before:animate-pulse before:rounded-2xl',
          v.glow,
        )}
        style={
          variant === 'gradient'
            ? {
                background:
                  'linear-gradient(45deg, rgba(0,180,216,0.35), rgba(0,150,199,0.35), rgba(193,18,31,0.35))',
              }
            : undefined
        }
      />

      <motion.div
        layout
        animate={{ scale: isAnimating ? [1, 0.98, 1] : 1 }}
        transition={{
          duration: animationDuration / 1000,
          ease: 'easeInOut',
          layout: { duration: 0.3 },
        }}
        className={cn(
          'relative overflow-hidden rounded-2xl px-8 py-4 backdrop-blur-sm transform-gpu transition-all duration-300',
          v.container,
          className,
        )}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-y-0 left-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
        </div>

        <motion.div
          key={currentWord}
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)', scale: 0.92 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, y: -18, filter: 'blur(8px)', scale: 1.08 }}
          transition={{ duration: animationDuration / 1000, ease: [0.25, 0.25, 0, 1] }}
          className={cn(
            'relative z-10 text-center font-display text-3xl font-black tracking-tight md:text-5xl lg:text-6xl',
            textClassName,
          )}
        >
          {currentWord.split('').map((letter, i) =>
            letter === ' ' ? (
              <span key={`space-${i}`} className="inline-block w-[0.25em]" />
            ) : (
              <motion.span
                key={`${currentWord}-${i}`}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: i * 0.03, duration: 0.4, ease: 'easeOut' }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            )
          )}
        </motion.div>

        <div className="pointer-events-none absolute left-2 top-2 h-3 w-3 rounded-tl-lg border-l-2 border-t-2 border-white/35" />
        <div className="pointer-events-none absolute right-2 top-2 h-3 w-3 rounded-tr-lg border-r-2 border-t-2 border-white/35" />
        <div className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 rounded-bl-lg border-b-2 border-l-2 border-white/35" />
        <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 rounded-br-lg border-b-2 border-r-2 border-white/35" />
      </motion.div>
    </div>
  )
}
