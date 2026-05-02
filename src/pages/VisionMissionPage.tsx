import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { buttonClasses } from '../components/ui/buttonStyles'

export function VisionMissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Direction"
        title="Vision and Mission"
        description="A clear statement of why we exist, where we are going, and how we serve every client relationship with fiduciary discipline."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className={buttonClasses({ size: 'lg' })}>
            Speak with an advisor
          </Link>
          <Link
            to="/services"
            className={buttonClasses({ variant: 'secondary', size: 'lg' })}
          >
            Explore services
          </Link>
        </div>
      </PageHeader>

      <section aria-labelledby="vision-mission-heading" className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-5xl">
            <h2
              id="vision-mission-heading"
              className="text-center text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
            >
              Built on trust. Focused on outcomes.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="flex h-full flex-col rounded-2xl bg-white p-8 ring-1 ring-outline-soft shadow-card sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  Vision
                </p>
                <div className="mt-4 grid aspect-[16/10] place-items-center overflow-hidden rounded-xl bg-surface-muted/60 p-4 ring-1 ring-outline-soft/70">
                  <img
                    src="/images/vision.jpg"
                    alt="Vision"
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={360}
                  />
                </div>
                <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
                  To become the most trusted investment adviser for clients by
                  helping them achieve their investment and retirement goals,
                  while guiding them toward a happy life. We aim to educate
                  clients toward financial awareness for their family and their
                  future life.
                </p>
              </article>

              <article className="flex h-full flex-col rounded-2xl bg-white p-8 ring-1 ring-outline-soft shadow-card sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  Mission
                </p>
                <div className="mt-4 grid aspect-[16/10] place-items-center overflow-hidden rounded-xl bg-surface-muted/60 p-4 ring-1 ring-outline-soft/70">
                  <img
                    src="/images/mission.png"
                    alt="Mission"
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    width={512}
                    height={512}
                  />
                </div>
                <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
                  To safeguard and grow clients&apos; wealth by giving fiduciary
                  advice and implementing proven investment strategies, while
                  maintaining complete transparency and ethical standards. We
                  provide personalized solutions, earn trust, and add lasting
                  value to every client&apos;s financial journey.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}