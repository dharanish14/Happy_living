import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/CtaBanner'
import { PageHeader } from '../components/PageHeader'
import { Philosophy } from '../components/Philosophy'
import { TrustStrip } from '../components/TrustStrip'
import { buttonClasses } from '../components/ui/buttonStyles'
import { ArrowRight } from '../components/ui/Icon'

const TEAM = [
  {
    name: 'Sanjay R. Gupta',
    role: 'Founder & Chief Investment Advisor',
    bio: 'Two decades of fiduciary advisory experience. CFA charterholder. SEBI-registered since 2014.',
    initials: 'SG',
  },
  {
    name: 'Aanya Kapoor',
    role: 'Head of Portfolio Strategy',
    bio: 'Former buy-side analyst at a global asset manager. Specialises in multi-asset allocation.',
    initials: 'AK',
  },
  {
    name: 'Rohit Mehta',
    role: 'Director, Wealth Planning',
    bio: 'Tax, estate and succession planning expert. Builds inter-generational wealth frameworks.',
    initials: 'RM',
  },
]

const VALUES = [
  {
    title: 'Independence',
    description:
      'Fee-only structure. Zero commissions. We answer only to you, never to a product manufacturer.',
  },
  {
    title: 'Transparency',
    description:
      'Every fee, every assumption, every conflict surfaced upfront. Plain English over jargon.',
  },
  {
    title: 'Long horizon',
    description:
      'We measure success in decades, not quarters. Compounding rewards patience and discipline.',
  },
]

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A quieter way to grow wealth."
        description="SRG Happy Living is a SEBI-registered investment advisory built around one belief: thoughtful, evidence-based advice should be available to every serious investor — not just institutions."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className={buttonClasses({ size: 'lg' })}>
            Speak with an advisor
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/services"
            className={buttonClasses({ variant: 'secondary', size: 'lg' })}
          >
            Explore services
          </Link>
        </div>
      </PageHeader>

      <TrustStrip />

      <section
        aria-labelledby="story-heading"
        className="bg-surface py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Our story
              </p>
              <h2
                id="story-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
              >
                Built for the investor who wants signal, not noise.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted lg:col-span-7 sm:text-lg">
              <p>
                We started in 2014 with a simple frustration: most financial
                advice in India was tied to product commissions. The advisor's
                interests were rarely aligned with the investor's.
              </p>
              <p>
                SRG Happy Living was founded as a SEBI-registered fee-only
                advisory to fix that. We don't sell products. We sell time,
                rigour, and an architecture for your money that compounds
                quietly over decades.
              </p>
              <p>
                Today we manage advisory relationships for entrepreneurs,
                clinicians, and senior professionals across India — each with a
                custom plan, written down, reviewed every quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Philosophy />

      <section
        aria-labelledby="values-heading"
        className="bg-surface py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              What we believe
            </p>
            <h2
              id="values-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
            >
              Three values that govern every recommendation.
            </h2>
          </div>
          <ul role="list" className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <li
                key={v.title}
                className="rounded-2xl bg-white p-7 ring-1 ring-outline-soft shadow-card"
              >
                <span className="font-headline text-sm font-bold text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-headline text-xl font-semibold text-navy-dark">
                  {v.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {v.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="team-heading"
        className="bg-surface-muted/60 py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              The team
            </p>
            <h2
              id="team-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
            >
              Senior advisors, every conversation.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              You will never be handed off to a junior. Each client works
              directly with a charterholder or principal.
            </p>
          </div>

          <ul role="list" className="mt-12 grid gap-6 md:grid-cols-3">
            {TEAM.map((m) => (
              <li
                key={m.name}
                className="flex flex-col gap-4 rounded-2xl bg-white p-7 ring-1 ring-outline-soft shadow-card"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="grid size-14 place-items-center rounded-full bg-navy text-gold font-headline text-base font-bold"
                    aria-hidden="true"
                  >
                    {m.initials}
                  </span>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-navy-dark">
                      {m.name}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                      {m.role}
                    </p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-ink-muted">
                  {m.bio}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        eyebrow="SEBI Reg. INA000000000"
        title="Ready to talk to a fiduciary advisor?"
        description="Book a confidential 30-minute discovery session with a senior advisor. No obligations."
        primary={{ label: 'Schedule a call', to: '/contact' }}
        secondary={{ label: 'See our services', to: '/services' }}
      />
    </>
  )
}
