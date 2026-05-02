import { Link } from 'react-router-dom'
import { buttonClasses } from './ui/buttonStyles'
import { ArrowRight, ShieldCheck } from './ui/Icon'

const HERO_IMAGE_BASE =
  'https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&q=80'

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-surface"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-white to-transparent"
      />
      <div className="container-page py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-8">
            <span
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy ring-1 ring-outline-soft shadow-card sm:text-[13px]"
            >
              <ShieldCheck className="size-4 text-gold" />
              SEBI Registered Investment Advisory
            </span>

            <h1
              id="hero-heading"
              className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-navy-dark sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="block">Architecture for</span>
              <span className="block">
                Your{' '}
                <span className="relative inline-block text-navy">
                  <span className="relative z-10 italic">Financial&nbsp;Serenity</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-gold/35 sm:h-4 lg:h-5"
                  />
                </span>
                .
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Expert real-wealth management strategies designed to simplify
              complex financial landscapes into clear, actionable paths for
              long-term prosperity.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/contact" className={buttonClasses({ size: 'lg' })}>
                Start Investing
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/about"
                className={buttonClasses({ variant: 'secondary', size: 'lg' })}
              >
                Our Methodology
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[24px] bg-gradient-to-br from-gold/30 via-transparent to-navy/20 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-3xl shadow-elevated ring-1 ring-navy/10">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={`${HERO_IMAGE_BASE}&w=1100 1x, ${HERO_IMAGE_BASE}&w=2000 2x`}
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet={`${HERO_IMAGE_BASE}&w=900 1x, ${HERO_IMAGE_BASE}&w=1600 2x`}
                  />
                  <img
                    src={`${HERO_IMAGE_BASE}&w=720`}
                    alt="A serene navy-blue study with gold accents and a contemporary sofa, evoking a private wealth management suite."
                    className="block aspect-[4/5] w-full object-cover sm:aspect-[16/11] lg:aspect-[4/5]"
                    loading="eager"
                    decoding="async"
                    width={1100}
                    height={1375}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
