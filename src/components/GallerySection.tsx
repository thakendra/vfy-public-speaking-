import { motion } from 'framer-motion'

const IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/vfy-speaking (${i + 1}).jpg`,
  alt: `VFY Public Speaking moment ${i + 1}`,
}))

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#00B4D8]/08 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[400px] rounded-full bg-[#C1121F]/08 blur-[100px]" />
      </div>

      {/* Heading */}
      <div className="relative mx-auto mb-16 max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00B4D8]/15 to-[#C1121F]/15 px-4 py-1.5 text-xs font-medium">
            <span className="bg-gradient-to-r from-[#00B4D8] to-[#C1121F] bg-clip-text text-transparent">
              Our Academy in Pictures
            </span>
          </div>
          <h2 className="brand-gradient-text font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Moments That Inspire
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            Real students. Real transformation. Real confidence built on the VFY stage.
          </p>
        </motion.div>
      </div>

      {/* Masonry grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="relative mx-auto max-w-7xl px-4 md:px-6"
        style={{ columns: '1', columnGap: '1rem' }}
      >
        <style>{`
          @media (min-width: 640px)  { .gallery-grid { columns: 2 !important; } }
          @media (min-width: 1024px) { .gallery-grid { columns: 3 !important; } }
          @media (min-width: 1280px) { .gallery-grid { columns: 4 !important; } }
        `}</style>

        <div
          className="gallery-grid"
          style={{ columns: 1, columnGap: '1rem' }}
        >
          {IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,180,216,0.22)] hover:border-[#00B4D8]/40"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00B4D8]/30 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                {/* red shimmer line on hover */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#00B4D8] to-[#C1121F] transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
