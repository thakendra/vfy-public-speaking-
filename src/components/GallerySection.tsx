import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/vfy-speaking (${i + 1}).jpg`,
  alt: `VFY Public Speaking moment ${i + 1}`,
}))

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export function GallerySection() {
  const [showAll, setShowAll] = useState(false)
  // On mobile show 4 initially; desktop always shows all via CSS columns
  const mobileVisible = showAll ? IMAGES : IMAGES.slice(0, 4)

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#00B4D8]/08 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[400px] rounded-full bg-[#C1121F]/08 blur-[100px]" />
      </div>

      {/* Heading */}
      <div className="relative mx-auto mb-10 max-w-2xl px-6 text-center md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00B4D8]/15 to-[#C1121F]/15 px-4 py-1.5 text-xs font-medium">
            <span className="bg-gradient-to-r from-[#00B4D8] to-[#C1121F] bg-clip-text text-transparent">
              Our Academy in Pictures
            </span>
          </div>
          <h2 className="brand-gradient-text font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Moments That Inspire
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            Real students. Real transformation. Real confidence built on the VFY stage.
          </p>
        </motion.div>
      </div>

      {/* ── Mobile grid (< md): 2-col, toggleable ── */}
      <div className="relative px-4 md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <AnimatePresence>
            {mobileVisible.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#00B4D8] to-[#C1121F] transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All toggle */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => setShowAll((v) => !v)}
          className="mx-auto mt-6 flex items-center gap-2 rounded-2xl border-2 border-[#00B4D8] px-8 py-3.5 font-display text-sm font-bold tracking-wider text-[#00B4D8] transition hover:bg-[#00B4D8] hover:text-white"
        >
          {showAll ? 'SHOW LESS' : 'VIEW ALL PHOTOS'}
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>
      </div>

      {/* ── Desktop masonry (md+) ── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="relative mx-auto hidden max-w-7xl px-4 md:block md:px-6"
      >
        <div className="columns-2 gap-4 lg:columns-3 xl:columns-4">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:border-[#00B4D8]/40 hover:shadow-[0_12px_40px_rgba(0,180,216,0.22)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00B4D8]/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#00B4D8] to-[#C1121F] transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
