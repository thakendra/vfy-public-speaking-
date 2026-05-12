import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children?: ReactNode
  showRadialGradient?: boolean
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
}: Props) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-slate-950 text-white',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={cn(
            'absolute -inset-[10px] opacity-60 will-change-transform',
            showRadialGradient &&
              '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]',
          )}
          style={{
            backgroundImage:
              'repeating-linear-gradient(100deg,rgba(0,180,216,0.55) 10%,rgba(0,150,199,0.55) 15%,rgba(56,189,248,0.55) 20%,rgba(125,211,252,0.55) 25%,rgba(2,132,199,0.55) 30%), repeating-linear-gradient(100deg,rgba(15,23,42,0.95) 0%,rgba(15,23,42,0.95) 7%,transparent 10%,transparent 12%,rgba(15,23,42,0.95) 16%)',
            backgroundSize: '300% 200%, 200% 100%',
            backgroundPosition: '50% 50%, 50% 50%',
            filter: 'blur(10px)',
          }}
        />
        <div
          className="absolute -inset-[10px] mix-blend-screen animate-aurora"
          style={{
            backgroundImage:
              'repeating-linear-gradient(100deg,rgba(0,180,216,0.45) 10%,rgba(0,150,199,0.45) 15%,rgba(56,189,248,0.45) 20%,rgba(125,211,252,0.45) 25%,rgba(2,132,199,0.45) 30%), repeating-linear-gradient(100deg,rgba(15,23,42,0.9) 0%,rgba(15,23,42,0.9) 7%,transparent 10%,transparent 12%,rgba(15,23,42,0.9) 16%)',
            backgroundSize: '200% 100%, 200% 100%',
            filter: 'blur(10px)',
            backgroundAttachment: 'fixed',
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(193,18,31,0.20), transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
