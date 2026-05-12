import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
}

export function EnrollModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleClose() {
    onClose()
    setTimeout(() => setSubmitted(false), 400)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl shadow-[#00B4D8]/20">
              {/* Gradient top bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#C1121F]" />

              {/* Glow */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-[#00B4D8]/10 blur-3xl" />

              <div className="relative px-8 pb-8 pt-7">
                <button
                  onClick={handleClose}
                  className="absolute right-5 top-5 rounded-xl p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
                >
                  <X className="h-5 w-5" />
                </button>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-8 text-center"
                  >
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00B4D8] to-[#C1121F]">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-neutral-900">You're Enrolled!</h3>
                    <p className="mt-2 text-neutral-600">We'll contact you shortly. Get ready to transform your voice.</p>
                    <button
                      onClick={handleClose}
                      className="mt-6 rounded-2xl bg-gradient-to-r from-[#00B4D8] to-[#C1121F] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-display text-3xl font-bold text-neutral-900">Enroll Now</h2>
                    <p className="mt-1.5 text-sm text-neutral-500">Fill in your details and we'll get back to you.</p>

                    <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+977 98XXXXXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 placeholder:text-neutral-400"
                        />
                      </div>

                      <button
                        type="submit"
                        className="mt-2 w-full rounded-2xl bg-gradient-to-r from-[#00B4D8] to-[#C1121F] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00B4D8]/30 transition hover:opacity-90 hover:shadow-[#00B4D8]/50 active:scale-[0.98]"
                      >
                        Submit Enrollment
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
