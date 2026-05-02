import { Brain, Check, Compass } from './ui/Icon'

const PHOTO_BASE =
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80'

type Principle = {
  icon: React.ReactNode
  title: string
  description: string
}

const PRINCIPLES: Principle[] = [
  {
    icon: <Compass className="size-4.5" />,
    title: 'Unbiased Fiduciary Duty',
    description:
      'As a SEBI-registered advisory, our only loyalty is to your portfolio performance. Zero commissions, zero hidden agendas.',
  },
  {
    icon: <Brain className="size-4.5" />,
    title: 'Behavioural Coaching',
    description:
      'We guide you through market volatility, preventing emotional decisions that compromise long-term compounding.',
  },
  {
    icon: <Check className="size-4.5" />,
    title: 'Scientific Asset Allocation',
    description:
      'Utilising Modern Portfolio Theory and quantitative analysis, we optimise risk-adjusted returns across every market cycle.',
  },
]

export function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="bg-surface-muted/60 py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-last lg:order-first">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 -z-10 hidden h-32 w-32 rounded-2xl bg-gold/30 blur-2xl sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 -z-10 hidden h-40 w-40 rounded-2xl bg-navy/15 blur-3xl sm:block"
            />
            <div className="overflow-hidden rounded-2xl shadow-elevated ring-1 ring-navy/5">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={`${PHOTO_BASE}&w=900 1x, ${PHOTO_BASE}&w=1600 2x`}
                />
                <img
                  src={`${PHOTO_BASE}&w=720`}
                  alt="A senior financial advisor in a calm office, reviewing portfolio strategy with a client at a wood-finished desk."
                  className="block aspect-[5/4] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={720}
                />
              </picture>
            </div>

            <div className="absolute -bottom-6 right-4 hidden flex-col items-end rounded-xl bg-white px-4 py-3 shadow-elevated ring-1 ring-outline-soft sm:flex">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                Avg. portfolio CAGR
              </span>
              <span className="font-headline text-xl font-bold text-navy-dark">
                12.4%{' '}
                <span className="text-success" aria-label="upward trend">
                  ▲
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Our Approach
              </p>
              <h2
                id="philosophy-heading"
                className="text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
              >
                The Philosophy of Precise Growth
              </h2>
              <p className="text-base leading-8 text-ink-muted sm:text-lg">
                Three principles guide every recommendation we make — anchoring
                long-term wealth creation in evidence, discipline and your
                personal context.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.title}
                  className="flex gap-4 rounded-xl bg-white/60 p-4 ring-1 ring-outline-soft/60 backdrop-blur-sm sm:p-5"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-gold/15 text-navy-dark">
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-navy-dark">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-base leading-8 text-ink-muted">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
