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
      className="bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-navy">
            Trusted Voices
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-balance text-5xl font-bold tracking-tight text-navy-dark sm:text-6xl lg:text-7xl"
          >
            The Investor's Voice
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-ink-muted sm:text-2xl">
            Real stories from clients who entrusted their financial journey to
            our advisory.
          </p>
        </div>

        <ul
          role="list"
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col gap-7 rounded-2xl bg-white p-8 ring-1 ring-outline-soft shadow-card sm:p-10">
                <div
                  className="flex items-center gap-1 text-gold"
                  aria-label={`Rated ${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={[
                        'size-6',
                        i < t.rating ? 'text-gold' : 'text-outline-soft',
                      ].join(' ')}
                    />
                  ))}
                </div>
                <blockquote className="flex-1">
                  <p className="text-xl leading-relaxed text-ink">
                    {t.quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-4 border-t border-outline-soft pt-6">
                  <span
                    className="grid size-14 place-items-center rounded-full bg-navy/10 font-headline text-lg font-bold text-navy-dark"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-headline text-lg font-semibold text-navy-dark">
                      {t.name}
                    </p>
                    <p className="text-base text-ink-muted">{t.role}</p>
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
