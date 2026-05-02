import { CtaBanner } from '../components/CtaBanner'
import { PageHeader } from '../components/PageHeader'
import { ArrowRight, Mail, Phone, ShieldCheck } from '../components/ui/Icon'

const REGISTRATION = [
  { label: 'SEBI Registration No.', value: 'INA000000000' },
  { label: 'Type of Registration', value: 'Non-Individual Investment Adviser' },
  { label: 'Validity', value: 'Perpetual (renewed Mar 2024)' },
  { label: 'BASL Membership No.', value: 'BASL-1234' },
  { label: 'Principal Officer', value: 'Sanjay R. Gupta, CFA' },
  { label: 'Compliance Officer', value: 'Aanya Kapoor' },
]

const DOCUMENTS = [
  {
    title: 'Disclosure Document',
    description:
      'Material disclosures about our services, fees, and conflict-of-interest policies.',
    size: 'PDF · 320 KB',
  },
  {
    title: 'Investment Adviser Agreement',
    description:
      'The standard advisory agreement template signed by every client before engagement.',
    size: 'PDF · 410 KB',
  },
  {
    title: 'Risk Profile Form',
    description:
      'The questionnaire we use to quantify your risk tolerance and capacity.',
    size: 'PDF · 180 KB',
  },
  {
    title: 'Investor Charter',
    description:
      'SEBI-mandated charter outlining your rights and our responsibilities.',
    size: 'PDF · 220 KB',
  },
  {
    title: 'Code of Conduct',
    description:
      'Our internal code governing conflicts of interest, suitability, and confidentiality.',
    size: 'PDF · 290 KB',
  },
  {
    title: 'Complaint Handling Policy',
    description:
      'How we receive, escalate, and resolve client grievances.',
    size: 'PDF · 150 KB',
  },
]

const COMPLAINT_STATS = [
  { label: 'Complaints pending (start of month)', value: '0' },
  { label: 'Received during month', value: '0' },
  { label: 'Resolved during month', value: '0' },
  { label: 'Pending (end of month)', value: '0' },
]

export function DisclosuresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Regulatory"
        title="SEBI disclosures & investor information."
        description="Full transparency on our registration, fees, complaint mechanism, and the documents that govern every advisory relationship we hold."
      >
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-navy ring-1 ring-outline-soft shadow-card">
          <ShieldCheck className="size-3.5 text-gold" />
          Last updated: 01 May 2026
        </p>
      </PageHeader>

      <section
        aria-labelledby="reg-heading"
        className="bg-surface py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Registration
              </p>
              <h2
                id="reg-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
              >
                Our SEBI registration details.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                SRG Happy Living Advisory Pvt. Ltd. is a non-individual
                Investment Adviser registered with SEBI under the Investment
                Advisers Regulations, 2013.
              </p>
            </div>
            <div className="lg:col-span-8">
              <dl className="grid gap-px overflow-hidden rounded-2xl bg-outline-soft ring-1 ring-outline-soft sm:grid-cols-2">
                {REGISTRATION.map((row) => (
                  <div key={row.label} className="bg-white p-5">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 font-headline text-base font-semibold text-navy-dark">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="docs-heading"
        className="bg-surface-muted/60 py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              Documents
            </p>
            <h2
              id="docs-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
            >
              Policies & client documents.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Every document below is provided to clients before engagement.
            </p>
          </div>

          <ul role="list" className="mt-12 grid gap-4 md:grid-cols-2">
            {DOCUMENTS.map((doc) => (
              <li key={doc.title}>
                <a
                  href="#"
                  className="focus-ring-gold group flex h-full items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-outline-soft shadow-card transition-shadow motion-reduce:transition-none hover:shadow-card-hover sm:p-6"
                  aria-label={`Download ${doc.title}, ${doc.size}`}
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy text-gold">
                    <DocumentIcon />
                  </span>
                  <span className="flex-1">
                    <span className="block font-headline text-base font-semibold text-navy-dark">
                      {doc.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-muted">
                      {doc.description}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
                      <span className="size-1.5 rounded-full bg-gold" />
                      {doc.size}
                    </span>
                  </span>
                  <span
                    className="mt-1 text-ink-muted transition-transform motion-reduce:transition-none group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <ArrowRight className="size-5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="complaints-heading"
        className="bg-surface py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Grievance redressal
              </p>
              <h2
                id="complaints-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
              >
                Complaint mechanism.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                If you have a concern, please contact our compliance officer
                first. Unresolved matters can be escalated to SEBI via SCORES
                or to BASL.
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-navy/5 text-navy">
                    <Mail className="size-4" />
                  </span>
                  <a
                    href="mailto:compliance@srghappyliving.com"
                    className="focus-ring-gold inline-block break-all font-headline text-sm font-semibold text-navy-dark hover:text-navy"
                  >
                    compliance@srghappyliving.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-navy/5 text-navy">
                    <Phone className="size-4" />
                  </span>
                  <a
                    href="tel:+919800000001"
                    className="focus-ring-gold inline-block font-headline text-sm font-semibold text-navy-dark hover:text-navy"
                  >
                    +91 98000 00001
                  </a>
                </li>
              </ul>

              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                You may also lodge a complaint at SEBI SCORES portal:{' '}
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring-gold inline-block font-semibold text-navy underline-offset-4 hover:underline"
                >
                  scores.sebi.gov.in
                </a>
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
                <div className="flex items-center justify-between border-b border-outline-soft p-5 sm:p-6">
                  <h3 className="font-headline text-base font-semibold text-navy-dark">
                    Complaint status — April 2026
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-success">
                    <span className="size-1.5 rounded-full bg-success" />
                    Up to date
                  </span>
                </div>
                <dl className="grid grid-cols-2 gap-px bg-outline-soft sm:grid-cols-4">
                  {COMPLAINT_STATS.map((s) => (
                    <div key={s.label} className="bg-white p-5">
                      <dt className="text-xs font-medium leading-snug text-ink-muted">
                        {s.label}
                      </dt>
                      <dd className="mt-2 font-headline text-3xl font-bold text-navy-dark">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="mt-4 text-xs text-ink-muted">
                Updated monthly per SEBI Circular SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2023/154.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="risk-heading"
        className="bg-surface-muted/60 py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              Risk disclosure
            </p>
            <h2
              id="risk-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
            >
              Important investor notice.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
              <p>
                Investments in securities markets are subject to market risk.
                Read all scheme-related documents carefully before investing.
                Past performance is not indicative of future returns.
              </p>
              <p>
                Investment in equity, debt, mutual funds, derivatives, or any
                other financial instrument involves the risk of loss. SRG Happy
                Living provides advisory services only — execution and
                custody remain with you and your chosen broker / depository.
              </p>
              <p>
                Registration granted by SEBI, membership of BASL, and
                certification from NISM in no way guarantee the performance of
                the intermediary or provide any assurance of returns to
                investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Need clarity?"
        title="Have a question about our regulatory standing?"
        description="Email our compliance officer or schedule a call to walk through any document."
        primary={{ label: 'Contact compliance', to: '/contact' }}
      />
    </>
  )
}

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  )
}
