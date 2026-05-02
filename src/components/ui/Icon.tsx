import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string
}

const baseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: '1em',
  height: '1em',
}

function withTitle(title: string | undefined, children: React.ReactNode) {
  return title ? (
    <>
      <title>{title}</title>
      {children}
    </>
  ) : (
    children
  )
}

export function LogoMark({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      viewBox="0 0 32 32"
      strokeWidth={0}
      fill="currentColor"
      {...props}
    >
      {withTitle(
        title,
        <>
          <path
            d="M16 2.5 28.5 9v14L16 29.5 3.5 23V9L16 2.5Z"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M16 4 27 10v12L16 28 5 22V10L16 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M11 19v-6l5 4 5-4v6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>,
      )}
    </svg>
  )
}

export function ChevronDown({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(title, <path d="m6 9 6 6 6-6" />)}
    </svg>
  )
}

export function ArrowRight({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>,
      )}
    </svg>
  )
}

export function Check({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(title, <path d="m5 12 5 5 9-11" />)}
    </svg>
  )
}

export function CheckCircle({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="m8 12 3 3 5-6" />
        </>,
      )}
    </svg>
  )
}

export function ShieldCheck({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <path d="M12 3 4 6v6c0 4.5 3.2 8.4 8 9.5 4.8-1.1 8-5 8-9.5V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </>,
      )}
    </svg>
  )
}

export function Phone({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
      )}
    </svg>
  )
}

export function Mail({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </>,
      )}
    </svg>
  )
}

export function MapPin({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13Z" />
          <circle cx="12" cy="9" r="2.5" />
        </>,
      )}
    </svg>
  )
}

export function Star({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      fill="currentColor"
      strokeWidth={0}
      {...props}
    >
      {withTitle(
        title,
        <path d="M12 2.5 14.9 8.6l6.6.9-4.8 4.6 1.2 6.6L12 17.7l-5.9 3 1.2-6.6L2.5 9.5l6.6-.9L12 2.5Z" />,
      )}
    </svg>
  )
}

export function Sparkline({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      viewBox="0 0 120 40"
      {...props}
    >
      {withTitle(
        title,
        <path
          d="M2 32 L18 28 L32 30 L46 22 L60 24 L74 14 L88 16 L102 8 L118 4"
          fill="none"
          strokeWidth="2.5"
        />,
      )}
    </svg>
  )
}

export function Menu({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>,
      )}
    </svg>
  )
}

export function Close({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </>,
      )}
    </svg>
  )
}

export function Compass({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m15 9-2 5-5 2 2-5 5-2Z" fill="currentColor" />
        </>,
      )}
    </svg>
  )
}

export function Brain({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 1 5 3 3 0 0 0 4 3 3 3 0 0 0 3-2V4Z" />
          <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-1 5 3 3 0 0 1-4 3 3 3 0 0 1-3-2V4Z" />
        </>,
      )}
    </svg>
  )
}

export function ChartBars({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <path d="M4 20h16" />
          <path d="M7 20V12" />
          <path d="M12 20V7" />
          <path d="M17 20v-6" />
        </>,
      )}
    </svg>
  )
}

export function AlertCircle({ className, title, ...props }: IconProps) {
  return (
    <svg
      {...baseProps}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      className={className}
      {...props}
    >
      {withTitle(
        title,
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </>,
      )}
    </svg>
  )
}
