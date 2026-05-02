import { Link } from 'react-router-dom'
import { buttonClasses } from './ui/buttonStyles'
import { ArrowRight } from './ui/Icon'

type Action = {
  label: string
  to: string
  variant?: 'primary' | 'secondary'
}

type CtaBannerProps = {
  eyebrow?: string
  title: string
  description?: string
  primary: Action
  secondary?: Action
}

export function CtaBanner({
  eyebrow = 'Ready when you are',
  title,
  description,
  primary,
  secondary,
}: CtaBannerProps) {
  return (
    <section
      aria-label={title}
      className="bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-white via-surface-sunk to-surface-muted/80 p-8 ring-1 ring-outline-soft shadow-elevated sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 -z-10 size-[420px] rounded-full bg-gold/12 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-20 -z-10 size-[420px] rounded-full bg-navy/10 blur-3xl"
          />

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-navy">
                <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                {eyebrow}
              </p>
              <h2 className="mt-4 text-balance font-headline text-4xl font-bold leading-[1.05] tracking-tight text-navy-dark sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              {description ? (
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                  {description}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
              <Link
                to={primary.to}
                className={buttonClasses({
                  variant: primary.variant ?? 'primary',
                  size: 'lg',
                })}
              >
                {primary.label}
                <ArrowRight className="size-4" />
              </Link>
              {secondary ? (
                <Link
                  to={secondary.to}
                  className={buttonClasses({
                    variant: secondary.variant ?? 'secondary',
                    size: 'lg',
                  })}
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
