import { Mic, Instagram, Youtube, Linkedin, Mail } from 'lucide-react'

const groups = [
  {
    title: 'Academy',
    links: ['Curriculum', 'Schedule', 'Mentors', 'Testimonials'],
  },
  {
    title: 'Programs',
    links: ['Public Speaking', 'Leadership', 'Storytelling', 'Vocal Therapy'],
  },
  {
    title: 'Support',
    links: ['Contact', 'FAQ', 'Privacy', 'Terms'],
  },
]

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/5 bg-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#" className="flex items-center gap-2.5">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-cyan-400/40 blur-md" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 shadow-lg">
                <Mic className="h-4 w-4 text-slate-950" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-[0.18em] text-white">
                VFY
              </span>
              <span className="mt-0.5 text-[10px] font-medium tracking-[0.22em] text-red-400/90">
                PUBLIC SPEAKING
              </span>
            </div>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Building confident voices, powerful presenters, and inspiring leaders —
            one cohort at a time.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Youtube, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              {g.title}
            </h4>
            <ul className="mt-5 space-y-3">
              {g.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-white/70 transition hover:text-cyan-200"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} VFY Public Speaking Academy. All rights reserved.</p>
          <p>Speak. Lead. Inspire.</p>
        </div>
      </div>
    </footer>
  )
}
