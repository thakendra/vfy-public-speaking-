import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B4D8]/08 blur-[140px]" />
        <div className="absolute -right-20 top-10 h-[260px] w-[260px] rounded-full bg-[#C1121F]/05 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00B4D8]/30 bg-[#00B4D8]/10 px-4 py-1.5 text-xs font-medium text-[#00B4D8]">
            <PlayCircle className="h-3.5 w-3.5" />
            Watch Our Academy
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            See VFY Academy{' '}
            <span className="brand-gradient-text">In Action</span>
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            A glimpse into how we transform nervous voices into confident,
            commanding communicators.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mt-14"
        >
          <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-[#00B4D8]/30 via-[#0096C7]/20 to-[#C1121F]/20 opacity-60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-1.5 shadow-2xl shadow-[#00B4D8]/20 backdrop-blur">
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.4rem] bg-neutral-100">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/LQ4fgtJeoOg?si=uD08oMkaBtYwTyTT&autoplay=1&mute=1&loop=1&playlist=LQ4fgtJeoOg&controls=1&modestbranding=1&rel=0"
                title="VFY Public Speaking Academy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
