import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 text-slate-950 shadow-[0_8px_30px_-8px_rgba(20,184,255,0.6)] hover:shadow-[0_10px_50px_-5px_rgba(20,184,255,0.9)] hover:-translate-y-0.5',
        secondary:
          'border border-cyan-400/30 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-cyan-400/60',
        ghost: 'text-white/80 hover:bg-white/5 hover:text-white',
        outline: 'border border-white/15 bg-transparent text-white hover:bg-white/5',
      },
      size: {
        default: 'h-12 px-7 text-sm',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-14 px-9 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
