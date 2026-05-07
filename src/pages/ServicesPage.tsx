import { Link } from 'react-router-dom'
import { AdvisorySuites } from '../components/AdvisorySuites'
import { FaqAccordion } from '../components/FaqAccordion'
import { PageHeader } from '../components/PageHeader'
import { buttonClasses } from '../components/ui/buttonStyles'
import { ArrowRight } from '../components/ui/Icon'

const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'A confidential conversation to understand your goals, income, expenses, and existing portfolio. No paperwork, no pressure.',
  },
  {
    step: '02',
    title: 'Health Assessment',
    description:
      'We project your current financial standing into the future and run Monte Carlo simulations across thousands of scenarios to establish a clear success-rate for each of your goals.',
  },
  {
    step: '03',
    title: 'Custom Roadmap',
    description:
      'A written financial plan with target allocations, the right instruments, consolidation strategy, and tax-aware withdrawal modelling for retirement.',
  },
  {
    step: '04',
    title: 'Yearly Review',
    description:
      'Annual deep-dives to rebalance, realign, and course-correct as markets and your life circumstances evolve.',
  },
]

const FEES = [
  {
    name: 'Portfolio Scan',
    price: 'Contact for fees',
    cadence: '',
    description: 'A quick scan of your existing investments with instrument-level suggestions.',
    features: [
      'Review of existing investment instruments',
      'Suitability check against your goals',
      'Instrument change suggestions',
      'Consolidation recommendations',
    ],
  },
  {
    name: 'Financial Health Check',
    price: 'Contact for fees',
    cadence: '',
    description: 'Deep-dive into your portfolio with Monte Carlo success-rate modelling.',
    features: [
      'Analysis of investments & horizon',
      'Income & expense mapping',
      'Goal-wise success-rate assessment',
      'Monte Carlo simulation report',
    ],
  },
  {
    name: 'Complete Financial Plan',
    price: 'Contact for fees',
    cadence: '',
    description: 'End-to-end financial planning with yearly follow-up.',
    features: [
      'Goal setting with timelines',
      'Instrument selection & allocation',
      'Accumulation & withdrawal plan',
      'Tax planning',
      'Yearly review & course correction',
    ],
    featured: true,
  },
  {
    name: 'Plan + Estate',
    price: 'Contact for fees',
    cadence: '',
    description: 'Complete financial planning plus estate & succession planning.',
    features: [
      'Everything in Complete Plan',
      'Succession & will preparation',
      'Legacy transfer structuring',
      'Multi-generational wealth guidance',
      'Yearly review & course correction',
    ],
  },
]

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Holistic financial advisory, end to end."
        description="From a comprehensive financial health check to multi-generational estate planning — every engagement follows the same disciplined process. Only the inputs change."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className={buttonClasses({ size: 'lg' })}>
            Book discovery call
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/about"
            className={buttonClasses({ variant: 'secondary', size: 'lg' })}
          >
            How we think
          </Link>
        </div>
      </PageHeader>

      <AdvisorySuites />

      <section
        aria-labelledby="process-heading"
        className="bg-surface-muted/60 py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              How we work
            </p>
            <h2
              id="process-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
            >
              A four-step engagement.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              The same rigour every client gets, regardless of portfolio size.
            </p>
          </div>

          <ol
            role="list"
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {PROCESS.map((p) => (
              <li
                key={p.step}
                className="relative rounded-2xl bg-white p-6 ring-1 ring-outline-soft shadow-card"
              >
                <span className="font-headline text-3xl font-bold text-gold">
                  {p.step}
                </span>
                <h3 className="mt-3 font-headline text-lg font-semibold text-navy-dark">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {p.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="fees-heading"
        className="bg-surface py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              Fees
            </p>
            <h2
              id="fees-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
            >
              Transparent, fee-only pricing.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              No commissions. No revenue shares. You always know what you pay
              and why.
            </p>
          </div>

          <ul role="list" className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {FEES.map((tier) => (
              <li
                key={tier.name}
                className={[
                  'relative flex flex-col gap-5 rounded-2xl p-7 ring-1 shadow-card',
                  tier.featured
                    ? 'bg-navy-dark text-white ring-white/10 shadow-elevated'
                    : 'bg-white ring-outline-soft',
                ].join(' ')}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-dark shadow-card">
                    Most chosen
                  </span>
                ) : null}
                <div>
                  <h3
                    className={[
                      'font-headline text-xl font-semibold',
                      tier.featured ? 'text-white' : 'text-navy-dark',
                    ].join(' ')}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={[
                      'mt-1 text-sm',
                      tier.featured ? 'text-white/70' : 'text-ink-muted',
                    ].join(' ')}
                  >
                    {tier.description}
                  </p>
                </div>
                <div>
                  <p
                    className={[
                      'font-headline text-4xl font-bold',
                      tier.featured ? 'text-white' : 'text-navy-dark',
                    ].join(' ')}
                  >
                    {tier.price}
                  </p>
                  {tier.cadence ? (
                    <p
                      className={[
                        'mt-1 text-xs font-semibold uppercase tracking-wide',
                        tier.featured ? 'text-gold' : 'text-ink-muted',
                      ].join(' ')}
                    >
                      {tier.cadence}
                    </p>
                  ) : null}
                </div>
                <ul
                  role="list"
                  className={[
                    'flex flex-col gap-2.5 border-t pt-5 text-[15px]',
                    tier.featured
                      ? 'border-white/10 text-white/85'
                      : 'border-outline-soft text-ink-muted',
                  ].join(' ')}
                >
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className={[
                          'mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-bold',
                          tier.featured
                            ? 'bg-gold text-navy-dark'
                            : 'bg-success/15 text-success',
                        ].join(' ')}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={buttonClasses({
                    variant: tier.featured ? 'success' : 'secondary',
                    size: 'md',
                    fullWidth: true,
                    className: 'mt-2',
                  })}
                >
                  Get started
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion />
    </>
  )
}
