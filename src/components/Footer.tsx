import { Link } from 'react-router-dom'

type LinkItem = { label: string; to: string; external?: boolean }

const REGULATORY: LinkItem[] = [
  { label: 'SEBI Reg. INA000000000', to: '/disclosures' },
  { label: 'Disclosure Document', to: '/disclosures' },
  { label: 'Risk Profile Form', to: '/disclosures' },
  { label: 'Investor Charter', to: '/disclosures' },
]

const COMPANY: LinkItem[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Disclosures', to: '/disclosures' },
  { label: 'Contact', to: '/contact' },
]

const LOCATION = [
  '14 Brigade Square',
  'MG Road, Bengaluru 560001',
  'Karnataka, India',
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="bg-navy-dark text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer and regulatory information
      </h2>

      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="focus-ring-gold inline-flex items-center"
              aria-label="SRG Happy Living Financial Services, back to home"
            >
              <span className="inline-block rounded-xl bg-white p-2.5 ring-1 ring-white/15 shadow-elevated">
                <img
                  src="/logo.png"
                  alt=""
                  aria-hidden="true"
                  className="block h-14 w-auto"
                  width={320}
                  height={224}
                />
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/82">
              A SEBI-registered investment advisory crafting calm,
              evidence-based wealth strategies that compound across decades.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold ring-1 ring-white/10">
              <span className="size-1.5 rounded-full bg-gold" aria-hidden />
              Compliant since 2014
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-headline text-sm font-semibold uppercase tracking-[0.14em] text-white/85">
              Regulatory Info
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {REGULATORY.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="focus-ring-gold inline-block rounded-sm py-1 text-sm text-white/82 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-headline text-sm font-semibold uppercase tracking-[0.14em] text-white/85">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="focus-ring-gold inline-block rounded-sm py-1 text-sm text-white/82 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-headline text-sm font-semibold uppercase tracking-[0.14em] text-white/85">
              Location
            </h3>
            <address className="mt-4 not-italic text-sm leading-7 text-white/82">
              {LOCATION.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} SRG Happy Living Advisory Pvt. Ltd. All rights reserved.
          </p>
          <p className="max-w-2xl leading-6 text-white/70 sm:text-right">
            Investments are subject to market risk. Please read all
            scheme-related documents carefully. Past performance is not
            indicative of future returns.
          </p>
        </div>
      </div>
    </footer>
  )
}
