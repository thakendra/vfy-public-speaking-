import { motion } from 'framer-motion'

export function PartnerFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-100 bg-white py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[200px] w-[500px] -translate-x-1/2 rounded-full bg-[#00B4D8]/06 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col items-center gap-4"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
          In Partnership With
        </p>
        <img
          src="/ktmmids-logo.PNG"
          alt="KTM Minds"
          className="h-24 w-auto max-w-[240px] object-contain transition-opacity duration-300 md:h-28"
        />
        <p className="mt-2 text-xs text-neutral-400">
          © {new Date().getFullYear()} VFY Public Speaking Academy. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}
