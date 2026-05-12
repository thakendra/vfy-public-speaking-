import { motion } from 'framer-motion'

export function LogoSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B4D8]/08 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          <img
            src="/logo.png"
            alt="VFY Public Speaking Academy Logo"
            className="h-40 w-auto object-contain drop-shadow-[0_0_40px_rgba(0,180,216,0.25)] md:h-56"
          />
        </motion.div>
      </div>
    </section>
  )
}
