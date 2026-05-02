import { Link } from 'react-router-dom'
import { ArrowRight, Brain, ChartBars, Compass, ShieldCheck } from './ui/Icon'

export function AdvisorySuites() {
  return (
    <section
      id="advisory"
      aria-labelledby="advisory-heading"
      className="bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
            Our Services
          </p>
          <h2
            id="advisory-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
          >
            Holistic financial advisory, end to end.
          </h2>
          <p className="mt-4 text-base leading-8 text-ink-muted sm:text-lg">
            From a comprehensive financial health check to multi-generational
            estate planning — we cover every stage of your wealth journey.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <FeatureCard
            highlighted
            className="lg:row-span-2"
            eyebrow="Start Here"
            icon={<Compass className="size-5" />}
            title="Financial Health Assessment"
            description="We take a comprehensive snapshot of your current financial standing and project it into the future using Monte Carlo simulations — giving you a clear success-rate for each of your goals before a single rupee is moved."
            ctaLabel="Get your health check"
          />

          <FeatureCard
            icon={<ChartBars className="size-5" />}
            title="Wealth Planning & Management"
            description="A custom roadmap from today's portfolio to your target milestones. We select the right instruments, optimise asset allocation, and conduct yearly reviews to keep you precisely on track."
            ctaLabel="Build your roadmap"
          />

          <FeatureCard
            icon={<Brain className="size-5" />}
            title="Asset Management"
            description="Disciplined execution: capital is allocated to the right asset classes from day one, with regular rebalancing and active management to capture market opportunities."
            ctaLabel="Learn more"
          />

          <FeatureCard
            icon={<ShieldCheck className="size-5" />}
            title="Retirement Planning"
            description="Define your retirement vision, optimise the accumulation phase, and transition with sophisticated withdrawal models tailored to your risk appetite — so capital keeps growing while income stays steady."
            ctaLabel="Plan your retirement"
          />

          <FeatureCard
            icon={<TransferIcon />}
            title="Estate Planning"
            description="Succession, will preparation, and legacy structuring handled with respect and precision — ensuring a seamless transfer of wealth and total peace of mind for you and your loved ones."
            ctaLabel="Secure your legacy"
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

          <p className="text-base leading-8 text-white/85">
            {description}
          </p>
        </div>

        <div className="relative mt-auto pt-7">
          <Link
            to="/contact"
            className="focus-ring-gold inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-button)] bg-gold px-5 py-3 text-sm font-semibold text-navy-dark transition-transform motion-reduce:transition-none hover:-translate-y-0.5"
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
        <p className="text-base leading-8 text-ink-muted">
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
