import { useState } from 'react'
import { ChevronDown } from './ui/Icon'

type Faq = {
  id: string
  question: string
  answer: string
}

const FAQS: Faq[] = [
  {
    id: 'faq-bank',
    question: 'How are you different from a regular bank?',
    answer:
      'Unlike banks, which often promote their own products, SRG Happy Living is a SEBI-registered advisor. This means we have a fiduciary duty to recommend only what is best for you, with zero hidden commissions and no transactional incentives.',
  },
  {
    id: 'faq-min',
    question: 'What is the minimum investment required?',
    answer:
      'Our personalised advisory begins at ₹25 Lakhs of investable assets. For broader planning, our digital plans start at ₹50,000 per year, designed to give every serious investor access to fiduciary advice.',
  },
  {
    id: 'faq-safety',
    question: 'Are my investments safe with you?',
    answer:
      'Your funds always remain in your own demat and bank accounts — we never take custody. We only provide recommendations and execute strategies under your explicit consent, with full audit trails maintained per SEBI regulations.',
  },
]

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-surface-muted/60 py-20 sm:py-24"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
            Common questions
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
          >
            Clarity &amp; Confidence
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Honest answers to the questions every investor should ask before
            entrusting their wealth.
          </p>
        </div>

        <ul className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id
            const buttonId = `${faq.id}-button`
            const panelId = `${faq.id}-panel`
            return (
              <li
                key={faq.id}
                className={[
                  'overflow-hidden rounded-xl bg-white ring-1 transition-shadow motion-reduce:transition-none',
                  isOpen
                    ? 'ring-navy/20 shadow-card-hover'
                    : 'ring-outline-soft shadow-card',
                ].join(' ')}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="focus-ring-gold flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-headline text-base font-semibold text-navy-dark sm:px-6 sm:text-lg"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={[
                        'grid size-9 shrink-0 place-items-center rounded-full bg-navy/5 text-navy transition-transform motion-reduce:transition-none',
                        isOpen ? 'rotate-180' : '',
                      ].join(' ')}
                      aria-hidden="true"
                    >
                      <ChevronDown className="size-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-6 sm:px-6"
                >
                  <p className="max-w-prose text-[15px] leading-relaxed text-ink-muted sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
