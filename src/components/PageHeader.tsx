import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="relative isolate overflow-hidden border-b border-outline-soft bg-surface-muted/60"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-20 -z-10 size-[460px] rounded-full bg-gold/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 -z-10 size-[460px] rounded-full bg-navy/10 blur-3xl"
      />

      <div className="container-page py-16 sm:py-20 lg:py-24 xl:py-28">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              {eyebrow}
            </p>
          ) : null}
          <h1
            id="page-title"
            className="mt-3 max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-navy-dark sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-3xl text-base leading-8 text-ink-muted sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
