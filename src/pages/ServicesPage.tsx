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
      'A confidential conversation to understand your goals, obligations, and current portfolio. No paperwork, no pressure.',
  },
  {
    step: '02',
    title: 'Risk profiling',
    description:
      'Quantitative risk-tolerance scoring and capacity analysis, calibrated against your time horizon and life stage.',
  },
  {
    step: '03',
    title: 'Architecture',
    description:
      'A written investment policy statement with target allocations, rebalancing rules, and tax-aware withdrawal plans.',
  },
  {
    step: '04',
    title: 'Stewardship',
    description:
      'Quarterly reviews, annual deep-dives, and proactive course-correction when life or markets change.',
  },
]

const FEES = [
  {
    name: 'Foundation',
    price: '₹50,000',
    cadence: 'per year',
    description: 'For investors building toward their first ₹1 Cr.',
    features: [
      'Annual investment policy statement',
      'Two formal review meetings',
      'Email & WhatsApp support',
      'Basic tax planning',
    ],
  },
  {
    name: 'Architect',
    price: '0.50%',
    cadence: 'of advisable assets',
    description: 'For HNIs with ₹1 Cr+ in investable wealth.',
    features: [
      'Quarterly portfolio reviews',
      'Goal-based scenario modelling',
      'Direct access to your principal advisor',
      'Tax & estate coordination',
    ],
    featured: true,
  },
  {
    name: 'Family Office',
    price: 'Custom',
    cadence: 'engagement',
    description: 'Multi-generational planning across ₹25 Cr+ portfolios.',
    features: [
      'Dedicated advisory pod',
      'Trust & succession structuring',
      'Alternative investments access',
      'Concierge reporting',
    ],
  },
]

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Strategic advisory, end to end."
        description="From the first discovery call to the quarterly review a decade in, every engagement follows the same disciplined architecture — only the inputs change."
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

          <ul role="list" className="mt-12 grid gap-6 md:grid-cols-3">
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
                  <p
                    className={[
                      'mt-1 text-xs font-semibold uppercase tracking-wide',
                      tier.featured ? 'text-gold' : 'text-ink-muted',
                    ].join(' ')}
                  >
                    {tier.cadence}
                  </p>
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
