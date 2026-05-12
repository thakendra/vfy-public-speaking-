import { motion } from 'framer-motion'
import { Mic } from 'lucide-react'
import { Button } from './ui/button'

const links = [
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#features', label: 'Features' },
  { href: '#academy', label: 'Academy' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-4 py-2.5 backdrop-blur-xl md:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-cyan-400/40 blur-md" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 shadow-lg">
              <Mic className="h-4 w-4 text-slate-950" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-[0.2em] text-white">
              VFY
            </span>
            <span className="mt-0.5 text-[9px] font-medium tracking-[0.22em] text-red-400/90">
              PUBLIC SPEAKING
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm">Join Academy</Button>
        </div>
      </div>
    </motion.header>
  )
}
