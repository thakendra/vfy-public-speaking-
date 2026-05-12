import { motion } from 'framer-motion'
import { ArrowRight, Mic2 } from 'lucide-react'
import { Button } from './ui/button'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 md:p-16"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />
            <div className="absolute -right-32 top-1/4 h-[260px] w-[260px] rounded-full bg-blue-500/25 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/40 blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 shadow-2xl">
                <Mic2 className="h-7 w-7 text-slate-950" strokeWidth={2.5} />
              </div>
            </div>

            <h2 className="mt-8 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
              Your Voice Can{' '}
              <span className="gradient-text">Change Your Future</span>
            </h2>
            <p className="mt-5 max-w-xl text-balance text-lg text-white/65">
              Join the next cohort at VFY Public Speaking Academy and step into the
              version of you that speaks, leads, and inspires.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <Button size="lg">
                Start Learning Today
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary">
                Explore Curriculum
              </Button>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/40">
              Limited seats · Next batch starting soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
