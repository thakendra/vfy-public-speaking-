import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, MessageSquare, Mic2, Users, Wind } from 'lucide-react'

const days = [
  {
    day: 'Day 01',
    title: 'Speech Delivery',
    desc: 'Build the foundation — how you stand, how you sound, what you say.',
    icon: Mic2,
    color: 'from-[#00B4D8] via-[#0096C7] to-[#C1121F]',
    topics: ['Body Language', 'Voice Improvement', 'Speech Content Structure'],
  },
  {
    day: 'Day 02',
    title: 'Formal Program Practice',
    desc: 'Run the room — host, welcome, honor, and close any formal stage.',
    icon: Users,
    color: 'from-[#0096C7] to-[#C1121F]',
    topics: ['Program Hosting', 'Welcome Speech', 'Guest Speech', 'Experience Sharing', 'Vote of Thanks'],
  },
  {
    day: 'Day 03',
    title: 'Storytelling Skills',
    desc: 'Move people — craft stories that land, connect, and convert.',
    icon: BookOpen,
    color: 'from-[#00B4D8] to-[#C1121F]',
    topics: ['Storytelling Techniques', 'Audience Engagement', 'Emotional Communication'],
  },
  {
    day: 'Day 04',
    title: 'Meetings & Presentation',
    desc: 'Lead the conversation — present, debate, and decide with authority.',
    icon: MessageSquare,
    color: 'from-[#C1121F] to-[#0096C7]',
    topics: ['Public Idea Presentation', 'Team Communication', 'Group Discussion', 'Conflict Management', 'Leadership Speaking'],
  },
  {
    day: 'Day 05',
    title: 'Vocal Therapy & Meditation',
    desc: 'Protect your instrument — clarity, breath, calm, and inner confidence.',
    icon: Wind,
    color: 'from-[#00B4D8] via-[#0096C7] to-[#C1121F]',
    topics: ['Voice Clarity', 'Breathing Exercises', 'Meditation', 'Confidence Training'],
  },
]

const CARD_WIDTH = 280
const CARD_GAP = 20

function CarouselTrack() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const dragStartX = useRef(0)
  const dragStartPos = useRef(0)
  const isDragging = useRef(false)
  const isPaused = useRef(false)
  const rafRef = useRef<number>()


  const totalWidth = days.length * (CARD_WIDTH + CARD_GAP)
  const tripled = [...days, ...days, ...days]

  useEffect(() => {
    // start in the middle set so we can scroll both directions
    posRef.current = totalWidth

    function tick() {
      if (!isPaused.current) {
        posRef.current += 0.5
        if (posRef.current >= totalWidth * 2) posRef.current -= totalWidth
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${-(posRef.current)}px)`
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [totalWidth])

  function onPointerDown(e: React.PointerEvent) {
    isDragging.current = true
    isPaused.current = true
    dragStartX.current = e.clientX
    dragStartPos.current = posRef.current
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return
    const delta = dragStartX.current - e.clientX
    let next = dragStartPos.current + delta
    // wrap
    while (next < totalWidth) next += totalWidth
    while (next >= totalWidth * 2) next -= totalWidth
    posRef.current = next
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-next}px)`
    }
  }

  function onPointerUp() {
    isDragging.current = false
    isPaused.current = false
  }

  return (
    <div
      className="relative cursor-grab overflow-hidden active:cursor-grabbing select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ gap: CARD_GAP, willChange: 'transform' }}
      >
        {tripled.map((day, idx) => {
          const Icon = day.icon
          return (
            <div
              key={idx}
              style={{ minWidth: CARD_WIDTH, maxWidth: CARD_WIDTH }}
              className="group relative flex-shrink-0"
            >
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${day.color} opacity-0 blur-md transition duration-500 group-hover:opacity-30`} />
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-500 group-hover:border-[#00B4D8]/40 group-hover:shadow-[0_8px_30px_rgba(0,180,216,0.15)]">
                <div className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${day.color} opacity-10 blur-2xl`} />

                <div className="flex items-center justify-between">
                  <div className={`relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${day.color} shadow-md`}>
                    <Icon className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    {day.day}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-neutral-900">
                  {day.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                  {day.desc}
                </p>

                <ul className="mt-5 space-y-2 border-t border-neutral-100 pt-4">
                  {day.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-neutral-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#C1121F]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent" />
    </div>
  )
}

export function CurriculumSection() {
  return (
    <section id="curriculum" className="relative overflow-hidden bg-slate-50 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#00B4D8]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#C1121F]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#00B4D8]/08 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-2xl px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00B4D8]/15 to-[#C1121F]/15 px-4 py-1.5 text-xs font-medium">
            <span className="bg-gradient-to-r from-[#00B4D8] to-[#C1121F] bg-clip-text text-transparent">
              5-Day Curriculum
            </span>
          </div>
          <h2 className="mt-6 brand-gradient-text font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Your Journey to Powerful Speaking
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            A structured program engineered to turn nervousness into command — day after day, voice after voice.
          </p>
        </motion.div>

        <div className="px-4 md:px-6">
          <CarouselTrack />
        </div>
      </div>
    </section>
  )
}
