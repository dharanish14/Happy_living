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
      className="bg-surface-muted/70 py-12 sm:py-14"
    >
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2
              id="trust-heading"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-navy"
            >
              Institutional Trust
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              We operate under SEBI compliance to protect your interests at
              every stage.
            </p>
            <span
              aria-hidden="true"
              className="mt-4 block h-px w-12 bg-gold"
            />
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-9 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-outline-soft pl-5"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <p className="font-headline text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
                    {stat.value}
                    {stat.suffix ? (
                      <span className="ml-0.5 text-gold">{stat.suffix}</span>
                    ) : null}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-ink-muted">
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
