import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { Philosophy } from '../components/Philosophy'
import { buttonClasses } from '../components/ui/buttonStyles'
import { ArrowRight } from '../components/ui/Icon'

const TEAM = [
  {
    name: 'Sameer Sakurikar',
    role: 'Founder | SEBI Registered Investment Adviser (INA000022118)',
    bio:
      'As the founder of SRG Happy Living Financial Services, I bring over a decade of investment experience and the rigorous standards of a SEBI Registered Investment Adviser. I have investment experience in mutual funds, stocks, REITs, real estate, insurance, and government investment instruments. I have strong analytical skills to understand financial problems and find practical solutions. My journey began in the automotive industry purchase department, where I specialized in deep-dive financial analysis and supplier financial health audits. I soon realized that the high-level strategies used in manufacturing, such as LEAN principles, Value Engineering, and Consolidation, are the exact tools needed to optimize personal finances. Today, I apply that same analytical precision to help my clients achieve financial dignity. I am a solution-oriented adviser dedicated to finding the most efficient path to your financial goals.',
    initials: 'SS',
  },
]

const VALUES = [
  {
    title: 'Transparency & Ethics',
    description:
      'We maintain complete transparency and ethical standards in every interaction. Every fee is disclosed, every conflict surfaced, and every recommendation is in your interest alone.',
  },
  {
    title: 'Simplify & Consolidate',
    description:
      'Our mission is to simplify your portfolio. We consolidate assets, eliminate unnecessary complexity, and make wealth management as stress-free as possible.',
  },
  {
    title: 'Personalised Precision',
    description:
      'Every plan is built specifically around your income, goals, and timeline — and reviewed each year as life evolves. No two clients receive the same advice.',
  },
]

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A holistic approach to your financial life."
        description="SRG Happy Living Financial Services is established to provide a holistic approach to your financial life — from retirement and investment planning to loan consultancy. We are committed to building lasting partnerships founded on transparency and ethics."
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
                Built to give every investor access to real fiduciary advice.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted lg:col-span-7 sm:text-lg">
              <p>
                SRG Happy Living Financial Services was founded with a simple
                belief: high-quality, unbiased financial advice should be
                available to every serious investor — not just institutions.
              </p>
              <p>
                Our founder Sameer Sakurikar brings over a decade of investment
                experience and a background in the automotive industry, where
                he specialised in deep-dive financial analysis and supplier
                health audits. He recognised that the same rigorous tools used
                in world-class manufacturing — LEAN principles, Value
                Engineering, Consolidation — are precisely what personal
                finances need.
              </p>
              <p>
                Today, every client receives a written, personalised plan
                covering investment, retirement, and estate strategy — reviewed
                every year as goals and markets evolve. Our only loyalty is to
                your financial well-being.
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
              Meet the founder.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              You speak directly with Sameer — the principal adviser — on
              every engagement. No hand-offs, no juniors.
            </p>
          </div>

          <ul role="list" className="mt-12 grid gap-6 md:max-w-2xl md:mx-auto">
            {TEAM.map((m) => (
              <li
                key={m.name}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-outline-soft shadow-card"
              >
                <div className="bg-gradient-to-r from-navy-dark to-navy px-7 py-6 sm:px-8">
                  <div className="flex items-center gap-4">
                    <span
                      className="grid size-14 place-items-center rounded-xl bg-white/10 text-gold font-headline text-base font-bold ring-1 ring-white/20"
                      aria-hidden="true"
                    >
                      {m.initials}
                    </span>
                    <div>
                      <h3 className="font-headline text-xl font-semibold text-white">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
                        {m.role}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-7 py-6 sm:px-8 sm:py-7">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                    Founder Message
                  </h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                    {m.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  )
}
