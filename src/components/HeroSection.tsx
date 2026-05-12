import { motion } from 'framer-motion'
import { ChevronRight, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { ContainerTextFlip } from './ContainerTextFlip'
import { EnrollModal } from './EnrollModal'
import { FloatingPaths } from './FloatingPaths'

const HEADING_WORDS = ['Master', 'the', 'Art', 'of']
const FLIP_WORDS = ['Public Speaking', 'Presentation', 'Story', 'Leadership']

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <section className="relative flex w-full items-start justify-center overflow-hidden bg-white pt-6 md:min-h-screen md:items-center md:pt-6">
      <div className="pointer-events-none absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#00B4D8]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[#C1121F]/05 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-4 text-center md:px-6 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="mx-auto max-w-5xl space-y-4 md:space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="/logo.png"
              alt="VFY Public Speaking Academy Logo"
              className="h-36 w-auto object-contain drop-shadow-[0_4px_40px_rgba(0,180,216,0.35)] md:h-48"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#00B4D8]/30 bg-gradient-to-r from-[#00B4D8]/10 to-[#C1121F]/10 px-4 py-1.5 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#00B4D8]" />
            <span className="bg-gradient-to-r from-[#00B4D8] to-[#C1121F] bg-clip-text text-sm font-medium text-transparent">
              Transform Your Voice, Transform Your Future
            </span>
          </motion.div>

          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {HEADING_WORDS.map((word, wIdx) => (
              <span key={word} className="mr-3 inline-block last:mr-0 md:mr-4">
                {word.split('').map((letter, lIdx) => (
                  <motion.span
                    key={`${word}-${lIdx}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wIdx * 0.1 + lIdx * 0.03,
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block pb-1 text-neutral-900"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div className="flex justify-center pt-0">
            <ContainerTextFlip
              words={FLIP_WORDS}
              interval={3000}
              animationDuration={700}
              variant="gradient"
              className="scale-75 md:scale-100"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mx-auto max-w-2xl text-balance text-base text-neutral-600 md:text-xl"
          >
            Join the world's most advanced public speaking academy. Build the
            confidence, clarity, and command that turn ordinary voices into{' '}
            <span className="text-neutral-900 font-semibold">extraordinary leaders</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-[#00B4D8]/30 to-[#C1121F]/30 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#00B4D8]/30">
              <Button
                size="lg"
                variant="ghost"
                onClick={() => setModalOpen(true)}
                className="rounded-[1.15rem] border border-white/10 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] px-9 py-6 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:from-[#00B4D8] hover:to-[#C1121F] hover:text-white group-hover:-translate-y-0.5"
              >
                <span className="opacity-95 transition-opacity group-hover:opacity-100">
                  Enroll Now
                </span>
                <ChevronRight className="h-5 w-5 opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Button>
            </div>

            <EnrollModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
