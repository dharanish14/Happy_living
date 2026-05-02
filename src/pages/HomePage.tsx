import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/CtaBanner'
import { HeroSection } from '../components/HeroSection'
import { Testimonials } from '../components/Testimonials'
import { TrustStrip } from '../components/TrustStrip'
import { buttonClasses } from '../components/ui/buttonStyles'
import {
  ArrowRight,
  Brain,
  ChartBars,
  Compass,
  ShieldCheck,
} from '../components/ui/Icon'

const SUITES = [
  {
    icon: <Compass className="size-6" />,
    title: 'Portfolio Management',
    description:
      'Dynamic asset allocation calibrated to your risk profile and life goals.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Retirement Planning',
    description:
      'Tax-efficient income strategies that preserve your lifestyle for decades.',
  },
  {
    icon: <ChartBars className="size-6" />,
    title: 'Equity Advisory',
    description:
      'Research-backed thematic investing for high-growth potential cycles.',
  },
]

const PRINCIPLES = [
  {
    icon: <ShieldCheck className="size-5" />,
    title: 'Unbiased fiduciary duty',
    description:
      'Fee-only model. Zero commissions. Our only loyalty is to your portfolio.',
  },
  {
    icon: <Brain className="size-5" />,
    title: 'Behavioural coaching',
    description:
      'We protect you from emotional decisions that compromise compounding.',
  },
  {
    icon: <Compass className="size-5" />,
    title: 'Scientific allocation',
    description:
      'Modern Portfolio Theory and quantitative analysis, applied with discipline.',
  },
]

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />

      <section
        aria-labelledby="suites-preview-heading"
        className="bg-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                What we do
              </p>
              <h2
                id="suites-preview-heading"
                className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
              >
                Strategic advisory, end to end.
              </h2>
            </div>
            <Link
              to="/services"
              className="focus-ring-gold inline-flex items-center gap-2 self-start rounded-md text-sm font-semibold text-navy hover:text-navy-dark md:self-end"
            >
              Explore all services
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul role="list" className="mt-10 grid gap-5 md:grid-cols-3">
            {SUITES.map((s) => (
              <li
                key={s.title}
                className="group flex h-full flex-col gap-4 rounded-2xl bg-white p-6 ring-1 ring-outline-soft shadow-card transition-shadow motion-reduce:transition-none hover:shadow-card-hover sm:p-7"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-navy/5 text-navy">
                  {s.icon}
                </span>
                <div>
                  <h3 className="font-headline text-xl font-semibold leading-snug text-navy-dark">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                    {s.description}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="focus-ring-gold mt-auto inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-navy hover:text-navy-dark"
                >
                  Learn more
                  <ArrowRight className="size-4 transition-transform motion-reduce:transition-none group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="philosophy-preview-heading"
        className="bg-surface-muted/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                How we think
              </p>
              <h2
                id="philosophy-preview-heading"
                className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
              >
                Three principles. Every recommendation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
                Wealth that compounds quietly across decades is a discipline,
                not a hunch. These are the rules we live by.
              </p>
              <Link
                to="/about"
                className={buttonClasses({
                  variant: 'secondary',
                  size: 'lg',
                  className: 'mt-7',
                })}
              >
                Read our methodology
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul role="list" className="flex flex-col gap-4 lg:col-span-7">
              {PRINCIPLES.map((p, i) => (
                <li
                  key={p.title}
                  className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-outline-soft shadow-card sm:p-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-navy-dark">
                    {p.icon}
                  </span>
                  <div className="flex-1">
                    <p className="font-headline text-xs font-bold tracking-wide text-gold">
                      0{i + 1}
                    </p>
                    <h3 className="mt-1 font-headline text-lg font-semibold text-navy-dark">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaBanner
        eyebrow="Begin your journey"
        title="Ready for advice you can finally trust?"
        description="Book a confidential 30-minute discovery call with a senior advisor. No paperwork, no pressure — just clarity."
        primary={{ label: 'Schedule a call', to: '/contact' }}
        secondary={{ label: 'See disclosures', to: '/disclosures' }}
      />
    </>
  )
}
