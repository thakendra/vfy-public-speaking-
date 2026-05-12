import { motion } from 'framer-motion'
import {
  Activity,
  Briefcase,
  Crown,
  HeartHandshake,
  Mic,
  Presentation,
  ShieldCheck,
  Users2,
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Public Speaking Training',
    desc: 'Daily drills, deliberate practice, and live feedback that build real stage skill.',
  },
  {
    icon: Crown,
    title: 'Leadership Communication',
    desc: 'Speak with the authority and warmth that moves teams to action.',
  },
  {
    icon: HeartHandshake,
    title: 'Confidence Building',
    desc: 'Replace nervous energy with grounded, magnetic presence — on any stage.',
  },
  {
    icon: ShieldCheck,
    title: 'Stage Fear Reduction',
    desc: 'Proven techniques to walk on stage calm, centered, and ready to perform.',
  },
  {
    icon: Presentation,
    title: 'Presentation Skills',
    desc: 'Tell stories with data. Build slides that persuade — never exhaust.',
  },
  {
    icon: Activity,
    title: 'Vocal Therapy',
    desc: 'Breath, tone, and clarity work that protects and powers your voice.',
  },
  {
    icon: Briefcase,
    title: 'Professional Communication',
    desc: 'Master meetings, pitches, interviews, and high-stakes conversations.',
  },
  {
    icon: Users2,
    title: 'Real Practice Sessions',
    desc: 'Speak every single week in front of a supportive, growing audience.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-slate-950 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-200">
            Why VFY Academy
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Everything You Need to{' '}
            <span className="gradient-text">Speak with Power</span>
          </h2>
          <p className="mt-5 text-lg text-white/60">
            A complete system for the voice, mind, and stage presence of a confident
            communicator.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 ring-1 ring-cyan-400/30">
                  <Icon className="h-5 w-5 text-cyan-300" strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {f.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
