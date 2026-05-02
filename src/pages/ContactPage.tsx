import { ContactSection } from '../components/ContactSection'
import { FaqAccordion } from '../components/FaqAccordion'
import { PageHeader } from '../components/PageHeader'
import { Mail, MapPin, Phone } from '../components/ui/Icon'

const OFFICE_HOURS = [
  { day: 'Monday – Friday', hours: '9:30 AM – 6:30 PM IST' },
  { day: 'Saturday', hours: '10:00 AM – 2:00 PM IST (by appointment)' },
  { day: 'Sunday & holidays', hours: 'Closed' },
]

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Talk to a senior advisor."
        description="Every conversation begins with a confidential 30-minute discovery call. We will listen first, ask the right questions, and only then talk about what we can do."
      />

      <section
        aria-labelledby="reach-heading"
        className="bg-surface py-16 sm:py-20"
      >
        <div className="container-page">
          <h2 id="reach-heading" className="sr-only">
            Ways to reach us
          </h2>
          <ul role="list" className="grid gap-5 md:grid-cols-3">
            <li className="rounded-2xl bg-white p-6 ring-1 ring-outline-soft shadow-card sm:p-7">
              <span className="grid size-11 place-items-center rounded-lg bg-navy/5 text-navy">
                <Phone className="size-5" />
              </span>
              <h3 className="mt-4 font-headline text-lg font-semibold text-navy-dark">
                Call us
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                Mon–Fri, 9:30 AM – 6:30 PM IST
              </p>
              <a
                href="tel:+919800000000"
                className="focus-ring-gold mt-3 inline-block rounded-sm py-1 font-headline text-base font-semibold text-navy hover:text-navy-dark"
              >
                +91 98000 00000
              </a>
            </li>
            <li className="rounded-2xl bg-white p-6 ring-1 ring-outline-soft shadow-card sm:p-7">
              <span className="grid size-11 place-items-center rounded-lg bg-navy/5 text-navy">
                <Mail className="size-5" />
              </span>
              <h3 className="mt-4 font-headline text-lg font-semibold text-navy-dark">
                Email us
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                Replies within one business day
              </p>
              <a
                href="mailto:advisor@srghappyliving.com"
                className="focus-ring-gold mt-3 inline-block break-all rounded-sm py-1 font-headline text-base font-semibold text-navy hover:text-navy-dark"
              >
                advisor@srghappyliving.com
              </a>
            </li>
            <li className="rounded-2xl bg-white p-6 ring-1 ring-outline-soft shadow-card sm:p-7">
              <span className="grid size-11 place-items-center rounded-lg bg-navy/5 text-navy">
                <MapPin className="size-5" />
              </span>
              <h3 className="mt-4 font-headline text-lg font-semibold text-navy-dark">
                Visit us
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                By prior appointment only
              </p>
              <p className="mt-3 font-headline text-base font-semibold text-navy">
                14 Brigade Square, MG Road
                <br />
                Bengaluru 560001
              </p>
            </li>
          </ul>
        </div>
      </section>

      <ContactSection />

      <section
        aria-labelledby="hours-heading"
        className="bg-surface-muted/60 py-20 sm:py-24 lg:py-28"
      >
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Office hours
              </p>
              <h2
                id="hours-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
              >
                When you can reach us.
              </h2>
              <p className="mt-4 text-base leading-8 text-ink-muted">
                For urgent client matters outside these hours, your principal
                advisor is reachable on their direct WhatsApp line.
              </p>
              <dl className="mt-6 divide-y divide-outline-soft border-y border-outline-soft">
                {OFFICE_HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="flex flex-wrap items-baseline justify-between gap-2 py-4"
                  >
                    <dt className="font-headline text-sm font-semibold text-navy-dark">
                      {row.day}
                    </dt>
                    <dd className="text-sm text-ink-muted">{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl ring-1 ring-outline-soft shadow-card">
                <iframe
                  title="Map showing the SRG Happy Living office at 14 Brigade Square, MG Road, Bengaluru"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.6075%2C12.9700%2C77.6175%2C12.9800&layer=mapnik&marker=12.9750%2C77.6125"
                  className="block aspect-[16/10] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-xs text-ink-muted">
                Map data:{' '}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring-gold inline-block font-medium underline-offset-4 hover:underline"
                >
                  © OpenStreetMap contributors
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion />
    </>
  )
}
