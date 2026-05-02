import { Link } from 'react-router-dom'
import { ArrowRight, ChartBars, Compass, ShieldCheck, Sparkline } from './ui/Icon'

export function AdvisorySuites() {
  return (
    <section
      id="advisory"
      aria-labelledby="advisory-heading"
      className="bg-surface py-20 sm:py-24"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
            Our Suites
          </p>
          <h2
            id="advisory-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
          >
            Strategic Advisory Suites
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Bespoke financial solutions tailored to the sophisticated needs of
            modern investors and high-net-worth individuals.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <FeatureCard
            highlighted
            className="lg:row-span-2"
            eyebrow="Flagship"
            icon={<Compass className="size-5" />}
            title="Personalized Portfolio Management"
            description="Dynamic asset-allocation strategies that evolve with market conditions, while remaining anchored to your risk profile and life goals."
            ctaLabel="Explore strategy"
          />

          <FeatureCard
            icon={<ShieldCheck className="size-5" />}
            title="Retirement Planning"
            description="Preserving your lifestyle with tax-efficient income strategies and inflation-resilient withdrawal frameworks."
            ctaLabel="Learn more"
          />

          <FeatureCard
            icon={<TransferIcon />}
            title="Wealth Transfer"
            description="Multi-generational planning, trust structures and estate guidance tailored for legacy continuity."
            ctaLabel="Learn more"
          />

          <FeatureCard
            className="md:col-span-2 lg:col-span-1"
            icon={<ChartBars className="size-5" />}
            title="Equity Advisory"
            description="Research-backed analysis and a thematic investing approach curated for high-growth potential investing cycles."
            ctaLabel="Learn more"
            visual={
              <Sparkline
                className="h-12 w-32 text-success"
                title="Sample equity advisory growth trend"
              />
            }
          />
        </div>
      </div>
    </section>
  )
}

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  ctaLabel: string
  highlighted?: boolean
  eyebrow?: string
  visual?: React.ReactNode
  className?: string
}

function FeatureCard({
  icon,
  title,
  description,
  ctaLabel,
  highlighted,
  eyebrow,
  visual,
  className = '',
}: FeatureCardProps) {
  if (highlighted) {
    return (
      <article
        className={[
          'group relative isolate flex h-full flex-col overflow-hidden rounded-2xl bg-navy-dark p-7 text-white shadow-elevated sm:p-9 lg:p-10',
          className,
        ].join(' ')}
      >
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 size-72 rounded-full bg-gold/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-10 size-64 rounded-full bg-navy-soft/50 blur-3xl"
        />

        <div className="relative flex flex-col gap-6">
          {eyebrow ? (
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold ring-1 ring-white/15">
              <span className="size-1.5 rounded-full bg-gold" aria-hidden />
              {eyebrow}
            </span>
          ) : null}

          <span className="grid size-11 place-items-center rounded-lg bg-white/10 text-gold ring-1 ring-white/15">
            {icon}
          </span>

          <h3 className="font-headline text-2xl font-bold leading-tight text-white sm:text-3xl">
            {title}
          </h3>

          <p className="text-base leading-relaxed text-white/75">
            {description}
          </p>
        </div>

        <div className="relative mt-auto pt-7">
          <Link
            to="/contact"
            className="focus-ring-gold inline-flex items-center gap-2 rounded-[var(--radius-button)] bg-gold px-5 py-2.5 text-sm font-semibold text-navy-dark transition-transform motion-reduce:transition-none hover:-translate-y-0.5"
          >
            {ctaLabel}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article
      className={[
        'group flex h-full flex-col gap-5 rounded-2xl bg-white p-7 ring-1 ring-outline-soft shadow-card transition-shadow motion-reduce:transition-none hover:shadow-card-hover',
        className,
      ].join(' ')}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-lg bg-navy/5 text-navy">
          {icon}
        </span>
        {visual ?? null}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-headline text-xl font-semibold leading-snug text-navy-dark">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-ink-muted">
          {description}
        </p>
      </div>
      <Link
        to="/contact"
        className="focus-ring-gold mt-auto inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-navy hover:text-navy-dark"
      >
        {ctaLabel}
        <ArrowRight className="size-4 transition-transform motion-reduce:transition-none group-hover:translate-x-0.5" />
      </Link>
    </article>
  )
}

function TransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M4 8h12l-3-3" />
      <path d="M20 16H8l3 3" />
    </svg>
  )
}
