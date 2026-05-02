type Stat = {
  value: string
  label: string
  suffix?: string
}

const STATS: Stat[] = [
  { value: '₹500', suffix: 'Cr+', label: 'Assets under advisement' },
  { value: '50', suffix: '+', label: 'Years of combined expertise' },
  { value: '5.0', suffix: '★', label: 'Average client rating' },
  { value: '98', suffix: '%', label: 'Client retention rate' },
]

export function TrustStrip() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="bg-surface-muted/70 py-16 sm:py-20"
    >
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <h2
              id="trust-heading"
              className="text-base font-semibold uppercase tracking-[0.2em] text-navy"
            >
              Institutional Trust
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-muted">
              We operate under SEBI compliance to protect your interests at
              every stage.
            </p>
            <span
              aria-hidden="true"
              className="mt-5 block h-px w-14 bg-gold"
            />
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:col-span-9 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-outline-soft pl-6"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <p className="font-headline text-5xl font-bold tracking-tight text-navy-dark sm:text-6xl lg:text-[64px]">
                    {stat.value}
                    {stat.suffix ? (
                      <span className="ml-0.5 text-gold">{stat.suffix}</span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-lg leading-snug text-ink-muted">
                    {stat.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
