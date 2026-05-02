import { CtaBanner } from '../components/CtaBanner'
import { PageHeader } from '../components/PageHeader'
import { ArrowRight, Mail, Phone, ShieldCheck } from '../components/ui/Icon'

const REGISTRATION = [
  { label: 'SEBI Registration No.', value: 'INA000000000' },
  { label: 'Type of Registration', value: 'Individual Investment Adviser' },
  { label: 'Validity', value: 'Perpetual' },
  { label: 'Principal Officer', value: 'Sameer Sakurikar' },
  { label: 'Phone', value: '+91 90350 83452' },
  { label: 'Email', value: 'sameersakurikar@yahoo.com' },
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

const COMPLAINT_DISCLOSURE_ROWS = [
  {
    srNo: '1',
    receivedFrom: 'Directly from Investors',
    pendingLastMonth: 'NA',
    received: 'NA',
    resolved: 'NA',
    totalPending: 'NA',
    pendingGt3Months: 'NA',
    avgResolutionDays: 'NA',
  },
  {
    srNo: '2',
    receivedFrom: 'SEBI (SCORES)',
    pendingLastMonth: 'NA',
    received: 'NA',
    resolved: 'NA',
    totalPending: 'NA',
    pendingGt3Months: 'NA',
    avgResolutionDays: 'NA',
  },
  {
    srNo: '3',
    receivedFrom: 'Other Sources (if any)',
    pendingLastMonth: 'NA',
    received: 'NA',
    resolved: 'NA',
    totalPending: 'NA',
    pendingGt3Months: 'NA',
    avgResolutionDays: 'NA',
  },
  {
    srNo: '',
    receivedFrom: 'Grand Total',
    pendingLastMonth: 'NA',
    received: 'NA',
    resolved: 'NA',
    totalPending: 'NA',
    pendingGt3Months: 'NA',
    avgResolutionDays: 'NA',
  },
]

export function DisclosuresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investor Charter"
        title="Investor Charter and regulatory information."
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
                SRG Happy Living Financial Services is an individual
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
                    href="mailto:sameersakurikar@yahoo.com"
                    className="focus-ring-gold inline-block break-all font-headline text-sm font-semibold text-navy-dark hover:text-navy"
                  >
                    sameersakurikar@yahoo.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-navy/5 text-navy">
                    <Phone className="size-4" />
                  </span>
                  <a
                    href="tel:+919035083452"
                    className="focus-ring-gold inline-block font-headline text-sm font-semibold text-navy-dark hover:text-navy"
                  >
                    +91 90350 83452
                  </a>
                </li>
              </ul>

              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                You may also lodge a complaint at SEBI SCORES portal:{' '}
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="SEBI SCORES portal, opens in new window"
                  className="focus-ring-gold inline-block font-semibold text-navy underline-offset-4 hover:underline"
                >
                  scores.sebi.gov.in
                </a>
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
                <div className="border-b border-outline-soft p-5 sm:p-6">
                  <h3 className="font-headline text-base font-semibold text-navy-dark">
                    Formats for investors complaints data to be disclosed monthly by IAs on their website and mobile applications
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted">
                    Data for the month ending - NA
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-surface-muted/60 text-navy-dark">
                        <th className="border-b border-outline-soft px-3 py-3 font-semibold">Sr. No.</th>
                        <th className="border-b border-outline-soft px-3 py-3 font-semibold">Received from</th>
                        <th className="border-b border-outline-soft px-3 py-3 font-semibold">Pending at the end of last month</th>
                        <th className="border-b border-outline-soft px-3 py-3 font-semibold">Received</th>
                        <th className="border-b border-outline-soft px-3 py-3 font-semibold">Resolved</th>
                        <th className="border-b border-outline-soft px-3 py-3 font-semibold">Total Pending</th>
                        <th className="border-b border-outline-soft px-3 py-3 font-semibold">Pending complaints {'>'} 3 months</th>
                        <th className="border-b border-outline-soft px-3 py-3 font-semibold">Average Resolution time (in days)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPLAINT_DISCLOSURE_ROWS.map((row) => (
                        <tr key={`${row.receivedFrom}-${row.srNo}`} className="odd:bg-white even:bg-surface/40">
                          <td className="border-b border-outline-soft px-3 py-2.5 text-ink-muted">{row.srNo || 'NA'}</td>
                          <td className="border-b border-outline-soft px-3 py-2.5 font-medium text-navy-dark">{row.receivedFrom}</td>
                          <td className="border-b border-outline-soft px-3 py-2.5 text-ink-muted">{row.pendingLastMonth}</td>
                          <td className="border-b border-outline-soft px-3 py-2.5 text-ink-muted">{row.received}</td>
                          <td className="border-b border-outline-soft px-3 py-2.5 text-ink-muted">{row.resolved}</td>
                          <td className="border-b border-outline-soft px-3 py-2.5 text-ink-muted">{row.totalPending}</td>
                          <td className="border-b border-outline-soft px-3 py-2.5 text-ink-muted">{row.pendingGt3Months}</td>
                          <td className="border-b border-outline-soft px-3 py-2.5 text-ink-muted">{row.avgResolutionDays}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-4 text-xs text-ink-muted">
                Number of complaints received during month against the IA due to impersonation by some other entity: NA
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="charter-heading"
        className="bg-surface py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              Investor charter
            </p>
            <h2
              id="charter-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
            >
              Do's and Don'ts for investors.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-ink-muted">
              As per SEBI requirements, the following guidance helps you
              engage safely with any registered investment adviser.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* Do's */}
              <div className="rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
                <div className="border-b border-outline-soft px-6 py-4">
                  <h3 className="font-headline text-base font-semibold text-navy-dark">
                    Do's for investors
                  </h3>
                </div>
                <ol className="flex flex-col divide-y divide-outline-soft">
                  {[
                    'Always deal with SEBI registered Investment Advisers. Check for SEBI registration number at sebi.gov.in.',
                    'Ensure that the Investment Adviser has a valid registration certificate.',
                    'Pay only advisory fees through banking channels and maintain duly signed receipts.',
                    'Always ask for your risk profiling before accepting investment advice.',
                    'Ask all relevant questions and clear your doubts before acting on advice.',
                    'Assess the risk–return profile, liquidity and safety aspects before investing.',
                    'Insist on getting terms and conditions in writing, duly signed and stamped.',
                    'Be vigilant in your transactions.',
                    'Approach appropriate authorities for redressal of doubts or grievances.',
                    'Inform SEBI about Investment Advisers offering assured or guaranteed returns.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 px-6 py-4">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/15 font-headline text-[11px] font-bold text-success">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-6 text-ink-muted">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Don'ts */}
              <div className="rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
                <div className="border-b border-outline-soft px-6 py-4">
                  <h3 className="font-headline text-base font-semibold text-navy-dark">
                    Don'ts for investors
                  </h3>
                </div>
                <ol className="flex flex-col divide-y divide-outline-soft">
                  {[
                    'Do not deal with unregistered entities — do not go by social media follower count.',
                    "Don't fall for stock tips offered under the pretext of investment advice.",
                    'Do not give your money for investment to the Investment Adviser.',
                    "Don't fall for promises of indicative, exorbitant, or assured returns.",
                    "Don't get carried away by luring advertisements or market rumours.",
                    'Avoid doing transactions only on the basis of phone calls or messages from any Investment Adviser.',
                    "Don't take decisions just because of repeated messages and calls.",
                    'Do not fall prey to limited-period discounts or other incentives offered by Investment Advisers.',
                    "Don't rush into investments that do not match your risk appetite and goals.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 px-6 py-4">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-error/10 font-headline text-[11px] font-bold text-error">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-6 text-ink-muted">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="rights-heading"
        className="bg-surface-muted/60 py-20 sm:py-24"
      >
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              Investor rights
            </p>
            <h2
              id="rights-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl"
            >
              Your rights as an investor.
            </h2>
            <ul role="list" className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Right to Privacy and Confidentiality',
                'Right to Transparent Practices',
                'Right to Fair and Equitable Treatment',
                'Right to Adequate Information',
                'Right to Initial and Continuing Disclosure',
                'Right to receive information about all statutory and regulatory disclosures',
                'Right to Awareness about Service Parameters and Turnaround Times',
                'Right to be Heard and Satisfactory Grievance Redressal',
                'Right to Suitability of Financial Products',
                'Right to Exit from a financial product in accordance with the advisory agreement',
                'Right to receive clear guidance and caution notice when dealing in complex or high-risk products',
                'Right to access services in a suitable manner even if differently abled',
                'Right to provide feedback on financial products and services used',
                'Right against coercive, unfair, and one-sided clauses in financial agreements',
              ].map((right) => (
                <li key={right} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-outline-soft shadow-card">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-navy/8 text-navy">
                    <ShieldCheck className="size-3" />
                  </span>
                  <span className="text-sm leading-6 text-ink-muted">{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="risk-heading"
        className="bg-surface py-20 sm:py-24"
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
            <div className="mt-6 space-y-4 text-base leading-8 text-ink-muted">
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
                Registration granted by SEBI in no way guarantees the
                performance of the intermediary or provides any assurance of
                returns to investors.
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
