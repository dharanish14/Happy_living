import { Star } from './ui/Icon'

type Testimonial = {
  rating: number
  quote: string
  name: string
  role: string
  initials: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    quote:
      'SRG Happy Living transformed my perspective on wealth. It is no longer just numbers — it is a structured plan for my family\'s prosperity.',
    name: 'Anjali Sethi',
    role: 'Founder, Quill Studio',
    initials: 'AS',
  },
  {
    rating: 5,
    quote:
      'Their transparent approach and SEBI-registered status give me the confidence to trust my entire portfolio. The precision is unmatched.',
    name: 'Dr. Rajan Singh',
    role: 'Chief of Cardiology',
    initials: 'RS',
  },
  {
    rating: 5,
    quote:
      '“I finally feel in control. No more jargon or high-pressure sales. Just clear, digital advice that works for my specific goals.”',
    name: 'Meera Iyer',
    role: 'Senior Product Manager',
    initials: 'MI',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">
            Trusted Voices
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
          >
            The Investor's Voice
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Real stories from clients who entrusted their financial journey to
            our advisory.
          </p>
        </div>

        <ul role="list" className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col gap-5 rounded-2xl bg-white p-6 ring-1 ring-outline-soft shadow-card sm:p-7">
                <div
                  className="flex items-center gap-1 text-gold"
                  aria-label={`Rated ${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={[
                        'size-5',
                        i < t.rating ? 'text-gold' : 'text-outline-soft',
                      ].join(' ')}
                    />
                  ))}
                </div>
                <blockquote className="flex-1">
                  <p className="text-base leading-8 text-ink">
                    {t.quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-outline-soft pt-4">
                  <span
                    className="grid size-11 place-items-center rounded-full bg-navy/10 font-headline text-sm font-bold text-navy-dark"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-headline text-base font-semibold text-navy-dark">
                      {t.name}
                    </p>
                    <p className="text-sm text-ink-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
