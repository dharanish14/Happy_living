import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { buttonClasses } from '../components/ui/buttonStyles'
import { Mail, Phone, ShieldCheck } from '../components/ui/Icon'

const COMPLAINT_ROWS = [
  { srNo: '1', receivedFrom: 'Directly from Investors', pending: '0', received: '0', resolved: '0', totalPending: '0', pendingOver3: '0', avgDays: '0' },
  { srNo: '2', receivedFrom: 'SEBI (SCORES)', pending: '0', received: '0', resolved: '0', totalPending: '0', pendingOver3: '0', avgDays: '0' },
  { srNo: '3', receivedFrom: 'Others', pending: '0', received: '0', resolved: '0', totalPending: '0', pendingOver3: '0', avgDays: '0' },
  { srNo: '', receivedFrom: 'Grand Total', pending: '0', received: '0', resolved: '0', totalPending: '0', pendingOver3: '0', avgDays: '0' },
]

const RIGHTS = [
  'Right to Privacy and Confidentiality',
  'Right to Transparent Practices',
  'Right to Fair and Equitable Treatment',
  'Right to Adequate Information',
  'Right to Initial and Continuing Disclosure',
  'Right to receive information about all the statutory and regulatory disclosures',
  'Right to Awareness about Service Parameters and Turnaround Times',
  'Right to be informed of the timelines for each service',
  'Right to be Heard and Satisfactory Grievance Redressal',
  'Right to have timely redressal',
  'Right to Suitability of the Financial Products',
  'Right to Exit from Financial product or service in accordance with the terms of agreement with the investment adviser',
  'Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services',
  'Right to get access to services in a suitable manner even if differently abled',
  'Right to provide feedback on the financial products and services used',
  'Right against coercive, unfair, and one-sided clauses in financial agreements',
]

const DOS: { text: string; note?: string; link?: { href: string; label: string } }[] = [
  {
    text: 'Always deal with SEBI registered Investment Advisers.',
    note: 'This is all the more important due to the proliferation of finfluencers, who claim to be investment experts, but are not authorized by SEBI.',
  },
  {
    text: 'Check for SEBI registration number.',
    note: 'Please refer to the list of all SEBI registered Investment Advisers available on SEBI website.',
    link: { href: 'https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13', label: 'View SEBI IA list' },
  },
  { text: 'Ensure that the Investment Adviser has a valid registration certificate.' },
  {
    text: 'Pay only advisory fees to your Investment Adviser.',
    note: 'Make payments of advisory fees through banking channels only and maintain duly signed receipts mentioning the details of your payments.',
  },
  {
    text: 'Always ask for your risk profiling before accepting investment advice.',
    note: 'Insist that Investment Adviser provides advisory strictly on the basis of your risk profiling and takes into account available investment alternatives.',
  },
  { text: 'Ask all relevant questions and clear your doubts with your Investment Adviser before acting on advice.' },
  { text: 'Assess the riskâ€“return profile of the investment as well as the liquidity and safety aspects before making investments.' },
  {
    text: 'Insist on getting the terms and conditions in writing duly signed and stamped.',
    note: 'Read these terms and conditions carefully particularly regarding advisory fees, advisory plans, category of recommendations etc. before dealing with any Investment Adviser.',
  },
  { text: 'Be vigilant in your transactions.' },
  {
    text: 'Approach the appropriate authorities for redressal of your doubts / grievances.',
    note: 'Inform SEBI about Investment Advisers offering assured or guaranteed returns.',
  },
]

const DONTS: { text: string; note?: string }[] = [
  { text: 'Do not deal with unregistered entities.', note: 'Do not go by the number of followers on social media.' },
  { text: "Don't fall for stock tips offered under the pretext of investment advice." },
  { text: 'Do not give your money for investment to the Investment Adviser.' },
  { text: "Don't fall for the promise of indicative or exorbitant or assured returns by the Investment Advisers.", note: "Don't let greed overcome rational investment decisions." },
  { text: "Don't get carried away by luring advertisements or market rumours." },
  { text: 'Avoid doing transactions only on the basis of phone calls or messages from any Investment Adviser or its representatives.' },
  { text: "Don't take decisions just because of repeated messages and calls by Investment Advisers." },
  { text: 'Do not fall prey to limited period discount or other incentive, gifts, etc. offered by Investment Adviser.' },
  { text: "Don't rush into making investments that do not match your risk-taking appetite and investment goals." },
]

const BUSINESS_POINTS = [
  'To enter into an agreement with the client providing all details including fee details, aspects of Conflict of interest disclosure and maintaining confidentiality of information.',
  'To do a proper and unbiased risk profiling and suitability assessment of the client.',
  'To conduct audit annually.',
  'To disclose the status of complaints on its website.',
  'To disclose the name, proprietor name, type of registration, registration number, validity, complete address with telephone numbers and associated SEBI Office details (i.e. Head office / regional / local Office) on its website.',
  'To employ only qualified and certified employees.',
  'To deal with clients only from official number.',
  'To maintain records of interactions with all clients including prospective clients (prior to onboarding), where any conversation related to advice has taken place.',
  'To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Investment Advisers.',
  'Not to discriminate in terms of services provided, among clients opting for same/similar products/services offered by investment adviser.',
]

const SERVICES_GROUPS = [
  {
    heading: 'Onboarding of Clients',
    items: ['Sharing of agreement copy', 'Completing KYC of clients'],
  },
  {
    heading: 'Disclosure to Clients',
    items: [
      'To provide full disclosure about its business, affiliations, compensation in the agreement.',
      "To not access client's accounts or holdings for offering advice.",
      'To disclose the risk profile to the client.',
      'To disclose any conflict of interest of the investment advisory activities with any other activities of the investment adviser.',
      'To disclose the extent of use of Artificial Intelligence tools in providing investment advisory services.',
    ],
  },
  {
    heading: 'Advisory Services',
    items: [
      'To provide investment advice to the client based on the risk-profiling of the clients and suitability of the client.',
      'To treat all advisory clients with honesty and integrity.',
      'To make adequate disclosure to the investor of all material facts such as risks, obligations, costs, etc. relating to the products or securities advised by the adviser.',
      'To provide clear guidance and adequate caution notice to clients when providing investment advice for dealing in complex and high-risk financial products/services.',
      'To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information.',
      'To disclose the timelines for the various services provided by the investment adviser to clients and ensure adherence to the said timelines.',
    ],
  },
]

export function InvestmentCharterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investor Charter"
        title="Investment Charter"
        description="SEBI-mandated disclosures covering our services, grievance redressal, investor rights, and monthly complaints data."
      >
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-navy ring-1 ring-outline-soft shadow-card">
          <ShieldCheck className="size-3.5 text-gold" />
          SEBI Reg. INA000022118
        </p>
      </PageHeader>

      {/* 1 â€” Do's and Don'ts */}
      <section id="dos-donts" aria-labelledby="dos-donts-heading" className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Section 1</p>
            <h2 id="dos-donts-heading" className="mt-3 text-2xl font-bold tracking-tight text-navy-dark sm:text-3xl">
              Do's and Don'ts for Investors
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
                <div className="border-b border-outline-soft bg-success/5 px-6 py-4">
                  <h3 className="font-headline text-base font-semibold text-navy-dark">Do's for Investors</h3>
                </div>
                <ol className="flex flex-col divide-y divide-outline-soft">
                  {DOS.map((item, i) => (
                    <li key={i} className="flex gap-3 px-6 py-4">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/15 font-headline text-[11px] font-bold text-success">
                        {i + 1}
                      </span>
                      <div className="text-sm leading-6">
                        <p className="font-medium text-ink">{item.text}</p>
                        {item.note && <p className="mt-0.5 text-ink-muted">{item.note}</p>}
                        {item.link && (
                          <a
                            href={item.link.href}
                            target="_blank"
                            rel="noreferrer noopener"                            aria-label={`${item.link.label}, opens in new window`}                            className="mt-1 inline-block font-medium text-navy underline-offset-4 hover:underline"
                          >
                            {item.link.label} â†—
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
                <div className="border-b border-outline-soft bg-error/5 px-6 py-4">
                  <h3 className="font-headline text-base font-semibold text-navy-dark">Don'ts for Investors</h3>
                </div>
                <ol className="flex flex-col divide-y divide-outline-soft">
                  {DONTS.map((item, i) => (
                    <li key={i} className="flex gap-3 px-6 py-4">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-error/10 font-headline text-[11px] font-bold text-error">
                        {i + 1}
                      </span>
                      <div className="text-sm leading-6">
                        <p className="font-medium text-ink">{item.text}</p>
                        {item.note && <p className="mt-0.5 text-ink-muted">{item.note}</p>}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 â€” Business details */}
      <section id="business-details" aria-labelledby="business-heading" className="bg-surface-muted/60 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Section 2</p>
            <h2 id="business-heading" className="mt-3 text-2xl font-bold tracking-tight text-navy-dark sm:text-3xl">
              Details of business transacted by the Investment Adviser with respect to the investors
            </h2>
            <ul className="mt-8 flex flex-col gap-3">
              {BUSINESS_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 ring-1 ring-outline-soft shadow-card">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <p className="text-sm leading-6 text-ink-muted">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3 â€” Services */}
      <section id="services-details" aria-labelledby="services-heading" className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Section 3</p>
            <h2 id="services-heading" className="mt-3 text-2xl font-bold tracking-tight text-navy-dark sm:text-3xl">
              Details of services provided to investors
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              {SERVICES_GROUPS.map((group) => (
                <div key={group.heading} className="overflow-hidden rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
                  <div className="border-b border-outline-soft bg-surface-muted/60 px-6 py-4">
                    <h3 className="font-headline text-base font-semibold text-navy-dark">{group.heading}</h3>
                  </div>
                  <ul className="flex flex-col divide-y divide-outline-soft">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 px-6 py-4">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <p className="text-sm leading-6 text-ink-muted">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 â€” Grievance redressal */}
      <section id="grievance" aria-labelledby="grievance-heading" className="bg-surface-muted/60 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Section 4</p>
            <h2 id="grievance-heading" className="mt-3 text-2xl font-bold tracking-tight text-navy-dark sm:text-3xl">
              Details of grievance redressal mechanism and how to access it
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Investor can lodge complaint / grievance against Investment Adviser in the following ways:
            </p>
            <div className="mt-8 flex flex-col gap-5">
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
                <div className="border-b border-outline-soft bg-surface-muted/60 px-6 py-4">
                  <h3 className="font-semibold text-navy-dark">Mode of filing the complaint with Investment Adviser</h3>
                </div>
                <div className="space-y-3 px-6 py-5 text-sm leading-7 text-ink-muted">
                  <p>
                    In case of any grievance / complaint, an investor may approach the concerned Investment Adviser who shall strive to redress the grievance immediately, but not later than{' '}
                    <strong className="text-ink">21 days</strong> of the receipt of the grievance.
                  </p>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:sameersakurikar@yahoo.com" className="inline-flex items-center gap-2 font-medium text-navy hover:underline underline-offset-4">
                      <Mail className="size-4 shrink-0" />
                      sameersakurikar@yahoo.com
                    </a>
                    <a href="tel:+919035083452" className="inline-flex items-center gap-2 font-medium text-navy hover:underline underline-offset-4">
                      <Phone className="size-4 shrink-0" />
                      +91 90350 83452
                    </a>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
                <div className="border-b border-outline-soft bg-surface-muted/60 px-6 py-4">
                  <h3 className="font-semibold text-navy-dark">Mode of filing complaint on SCORES or with IAASB</h3>
                </div>
                <ul className="flex flex-col divide-y divide-outline-soft">
                  <li className="flex items-start gap-3 px-6 py-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm leading-6 text-ink-muted">
                      <strong className="text-ink">SCORES 2.0</strong> â€” a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner.{' '}
                      <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer noopener" aria-label="SEBI SCORES portal, opens in new window" className="font-medium text-navy hover:underline underline-offset-4">
                        scores.sebi.gov.in â†—
                      </a>
                    </p>
                  </li>
                  <li className="flex items-start gap-3 px-6 py-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm leading-6 text-ink-muted">
                      Two level review: First review done by designated body (IAASB); Second review done by SEBI.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 px-6 py-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm leading-6 text-ink-muted">Email to designated email ID of IAASB.</p>
                  </li>
                  <li className="flex items-start gap-3 px-6 py-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm leading-6 text-ink-muted">
                      If the Investor is not satisfied with the resolution provided by the Market Participants, the Investor has the option to file the complaint / grievance on{' '}
                      <strong className="text-ink">SMARTODR platform</strong> for its resolution through online conciliation or arbitration.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 px-6 py-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm leading-6 text-ink-muted">
                      <strong className="text-ink">Physical complaints:</strong> Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai â€“ 400 051.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 â€” Rights of investors */}
      <section id="rights" aria-labelledby="rights-heading" className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Section 5</p>
            <h2 id="rights-heading" className="mt-3 text-2xl font-bold tracking-tight text-navy-dark sm:text-3xl">
              Rights of Investors
            </h2>
            <ul role="list" className="mt-8 grid gap-3 sm:grid-cols-2">
              {RIGHTS.map((right) => (
                <li key={right} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-outline-soft shadow-card">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm leading-6 text-ink-muted">{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 â€” Complaints data */}
      <section id="complaints" aria-labelledby="complaints-heading" className="bg-surface-muted/60 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Section 6</p>
            <h2 id="complaints-heading" className="mt-3 text-2xl font-bold tracking-tight text-navy-dark sm:text-3xl">
              Investor's Complaints
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white ring-1 ring-outline-soft shadow-card">
              <div className="border-b border-outline-soft px-5 py-4 sm:px-6">
                <p className="font-semibold text-navy-dark">
                  Data for the month ending: <span className="text-gold">31st March 2026</span>
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-surface-muted/60 text-navy-dark">
                      <th className="whitespace-nowrap border-b border-outline-soft px-4 py-3 font-semibold">Sr. No.</th>
                      <th className="whitespace-nowrap border-b border-outline-soft px-4 py-3 font-semibold">Received from</th>
                      <th className="whitespace-nowrap border-b border-outline-soft px-4 py-3 font-semibold">Pending at end of last month</th>
                      <th className="whitespace-nowrap border-b border-outline-soft px-4 py-3 font-semibold">Received</th>
                      <th className="whitespace-nowrap border-b border-outline-soft px-4 py-3 font-semibold">Resolved</th>
                      <th className="whitespace-nowrap border-b border-outline-soft px-4 py-3 font-semibold">Total Pending</th>
                      <th className="whitespace-nowrap border-b border-outline-soft px-4 py-3 font-semibold">Pending &gt; 3 months</th>
                      <th className="whitespace-nowrap border-b border-outline-soft px-4 py-3 font-semibold">Avg. Resolution time (days)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPLAINT_ROWS.map((row) => (
                      <tr
                        key={`${row.receivedFrom}-${row.srNo}`}
                        className={row.srNo === '' ? 'bg-navy/5 font-semibold text-navy-dark' : 'text-ink-muted odd:bg-white even:bg-surface/40'}
                      >
                        <td className="border-b border-outline-soft px-4 py-3">{row.srNo}</td>
                        <td className="border-b border-outline-soft px-4 py-3 font-medium text-navy-dark">{row.receivedFrom}</td>
                        <td className="border-b border-outline-soft px-4 py-3 text-center">{row.pending}</td>
                        <td className="border-b border-outline-soft px-4 py-3 text-center">{row.received}</td>
                        <td className="border-b border-outline-soft px-4 py-3 text-center">{row.resolved}</td>
                        <td className="border-b border-outline-soft px-4 py-3 text-center">{row.totalPending}</td>
                        <td className="border-b border-outline-soft px-4 py-3 text-center">{row.pendingOver3}</td>
                        <td className="border-b border-outline-soft px-4 py-3 text-center">{row.avgDays}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-14">
        <div className="container-page">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <p className="text-base leading-relaxed text-ink-muted">
              For full registration details and disclosure documents, visit our Investor Disclosures page.
            </p>
            <Link to="/disclosures" className={buttonClasses({ variant: 'secondary', size: 'lg' })}>
              View full disclosures
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
