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

      <div className="container-page py-20 sm:py-24 lg:py-32 xl:py-40">
        <div className="max-w-5xl">
          {eyebrow ? (
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-navy">
              {eyebrow}
            </p>
          ) : null}
          <h1
            id="page-title"
            className="mt-5 text-balance text-6xl font-bold leading-[1.04] tracking-tight text-navy-dark sm:text-7xl lg:text-[88px] xl:text-[112px]"
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-ink-muted sm:text-2xl lg:text-[28px]">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
