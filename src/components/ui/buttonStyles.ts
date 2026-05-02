export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'ghost'
export type ButtonSize = 'md' | 'lg'

const base =
  'focus-ring-gold inline-flex items-center justify-center gap-2 font-headline font-semibold tracking-wide whitespace-nowrap text-center leading-snug transition-[background,color,box-shadow,transform] motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-60'

const sizes: Record<ButtonSize, string> = {
  md: 'min-h-11 px-5 py-3 text-[15px] rounded-[var(--radius-button)]',
  lg: 'min-h-12 px-7 py-3.5 text-base rounded-[var(--radius-button)]',
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-navy text-white shadow-[0_8px_24px_-12px_rgb(26_54_93/0.5)] hover:bg-navy-dark hover:shadow-[0_12px_28px_-12px_rgb(26_54_93/0.6)] active:translate-y-px',
  secondary:
    'bg-white text-navy ring-2 ring-inset ring-navy hover:bg-surface-sunk active:translate-y-px',
  success:
    'bg-success text-white shadow-[0_8px_24px_-12px_rgb(47_133_90/0.55)] hover:brightness-110 active:translate-y-px',
  ghost:
    'bg-transparent text-navy hover:bg-surface-muted active:translate-y-px',
}

export function buttonClasses(opts?: {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
}): string {
  const { variant = 'primary', size = 'md', fullWidth, className = '' } = opts ?? {}
  return [
    base,
    sizes[size],
    variants[variant],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
}
