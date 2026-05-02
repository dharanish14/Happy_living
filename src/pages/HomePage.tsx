import { Link } from 'react-router-dom'
import { HeroSection } from '../components/HeroSection'
import { buttonClasses } from '../components/ui/buttonStyles'
import { ArrowRight } from '../components/ui/Icon'

const CORE_EXPERTISE = [
  'Financial Health Checks and financial planning',
  'Wealth Creation and Strategic Asset Management',
  'Estate and Retirement Planning (from Strategy to Execution)',
  'Mortgage Consultancy and Structured Loan Reduction',
]

export function HomePage() {
  return (
    <>
      <HeroSection />

      <section
        aria-labelledby="home-overview-heading"
        className="bg-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-gold/10 p-8 shadow-card ring-1 ring-outline-soft sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6 border-b border-outline-soft pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/80">
                  SRG Happy Living Financial Services
                </p>
                <p className="mt-2 text-sm font-medium text-ink-muted">
                  SEBI Registered Investment Adviser | Sameer Sakurikar - INA000022118
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-navy px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Holistic wealth advisory
              </span>
            </div>

            <h2
              id="home-overview-heading"
              className="mt-7 max-w-3xl text-balance text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
            >
              Strategic wealth management and financial advisory
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
              SRG Happy Living Financial Services is established to provide a
              holistic approach to your financial life. From retirement and
              investment planning to specialized insurance and loan
              consultancy, we offer the expertise needed to navigate complex
              markets with ease.
            </p>

            <h3 className="mt-8 font-headline text-xl font-semibold text-navy-dark sm:text-2xl">
              Our Core Expertise Includes
            </h3>
            <ul role="list" className="mt-4 grid gap-3 sm:grid-cols-2">
              {CORE_EXPERTISE.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl bg-white/80 p-4 text-[15px] leading-relaxed text-ink-muted ring-1 ring-outline-soft sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-relaxed text-ink-muted sm:text-lg">
              We are committed to building lasting partnerships founded on
              transparency and ethics. Our mission is simple: to simplify your
              portfolio and elevate your financial well-being.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/contact"
                className={buttonClasses({ size: 'lg', className: 'w-full sm:w-auto' })}
              >
                Book a consultation
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className={buttonClasses({
                  variant: 'secondary',
                  size: 'lg',
                  className: 'w-full sm:w-auto',
                })}
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
