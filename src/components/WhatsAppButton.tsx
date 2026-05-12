import { motion } from 'framer-motion'

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/9779749704809"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        scale: { delay: 1.5, type: 'spring', stiffness: 200, damping: 20 },
        opacity: { delay: 1.5, duration: 0.4 },
        y: { delay: 2, duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-shadow hover:shadow-[0_6px_28px_rgba(37,211,102,0.7)]"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.452.633 4.754 1.742 6.757L2 30l7.47-1.715A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.89-1.607l-.422-.25-4.436 1.018 1.044-4.32-.276-.444A11.564 11.564 0 0 1 4.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.34-8.614c-.347-.174-2.054-1.013-2.373-1.129-.319-.116-.551-.174-.783.174-.232.347-.898 1.129-1.101 1.362-.202.232-.405.261-.752.087-.347-.174-1.465-.54-2.79-1.72-1.031-.919-1.727-2.054-1.93-2.401-.202-.347-.022-.535.152-.708.156-.156.347-.405.52-.608.174-.202.232-.347.347-.579.116-.232.058-.435-.029-.608-.087-.174-.783-1.888-1.072-2.585-.283-.681-.57-.588-.783-.599l-.666-.012c-.232 0-.608.087-.927.435s-1.217 1.189-1.217 2.9 1.246 3.362 1.42 3.594c.174.232 2.45 3.74 5.935 5.244.83.358 1.478.572 1.983.732.833.265 1.591.228 2.19.138.668-.1 2.054-.84 2.344-1.652.29-.812.29-1.508.203-1.652-.086-.145-.319-.232-.666-.406z" />
      </svg>
    </motion.a>
  )
}
