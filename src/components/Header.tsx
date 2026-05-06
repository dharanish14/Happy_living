import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { buttonClasses } from './ui/buttonStyles'
import { ChevronDown, Close, Menu } from './ui/Icon'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/vision-mission', label: 'Vision & Mission' },
  { to: '/services', label: 'Services' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const CHARTER_SECTIONS = [
  { hash: 'dos-donts', label: "Do's and Don'ts for Investors" },
  { hash: 'business-details', label: 'Business Transacted' },
  { hash: 'services-details', label: 'Services Provided' },
  { hash: 'grievance', label: 'Grievance Redressal' },
  { hash: 'rights', label: 'Rights of Investors' },
  { hash: 'complaints', label: 'Complaints Data' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [charterOpen, setCharterOpen] = useState(false)
  const [mobileCharterOpen, setMobileCharterOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
    setMobileCharterOpen(false)
  }, [pathname, hash])

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCharterOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={[
        'sticky top-0 z-40 w-full border-b transition-[background,border-color,box-shadow] motion-reduce:transition-none',
        scrolled
          ? 'border-outline-soft bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_rgb(26_54_93/0.04)]'
          : 'border-transparent bg-surface',
      ].join(' ')}
    >
      <div className="container-page flex min-h-20 items-center justify-between gap-4 py-3 sm:min-h-24 sm:gap-6 lg:min-h-28">
        <Link
          to="/"
          className="focus-ring-gold mr-auto inline-flex max-w-[70%] shrink items-center sm:max-w-none"
          aria-label="SRG Happy Living Financial Services, home"
        >
          <span className="inline-flex items-center justify-center rounded-xl bg-white px-2.5 py-1.5 ring-1 ring-outline-soft shadow-card sm:px-3 sm:py-2">
            <img
              src="/logo.png"
              alt="SRG Happy Living Financial Services"
              className="block h-10 w-auto sm:h-14 lg:h-16 xl:h-20"
              width={320}
              height={224}
            />
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    [
                      'focus-ring-gold relative inline-flex min-h-11 items-center rounded-md px-4 py-2 text-[15px] font-medium transition-colors motion-reduce:transition-none lg:text-base',
                      isActive
                        ? 'text-navy-dark'
                        : 'text-ink-muted hover:bg-surface-muted hover:text-navy',
                    ].join(' ')
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive ? (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-1.5 left-3.5 right-3.5 h-0.5 rounded-full bg-gold"
                        />
                      ) : null}
                    </>
                  )}
                </NavLink>
              </li>
            ))}

            {/* Investor Charter dropdown */}
            <li ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setCharterOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={charterOpen}
                className={[
                  'focus-ring-gold relative inline-flex min-h-11 items-center gap-1.5 rounded-md px-4 py-2 text-[15px] font-medium transition-colors motion-reduce:transition-none lg:text-base',
                  pathname === '/investment-charter'
                    ? 'text-navy-dark'
                    : 'text-ink-muted hover:bg-surface-muted hover:text-navy',
                ].join(' ')}
              >
                Investor Charter
                <ChevronDown
                  className={[
                    'size-4 transition-transform duration-200',
                    charterOpen ? 'rotate-180' : '',
                  ].join(' ')}
                />
                {pathname === '/investment-charter' && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1.5 left-3.5 right-3.5 h-0.5 rounded-full bg-gold"
                  />
                )}
              </button>

              {charterOpen && (
                <div className="absolute left-0 top-full z-50 mt-1.5 w-64 overflow-hidden rounded-xl border border-outline-soft bg-white py-1.5 shadow-elevated">
                  <div className="border-b border-outline-soft px-4 pb-2 pt-2.5">
                    <Link
                      to="/investment-charter"
                      onClick={() => setCharterOpen(false)}
                      className="text-xs font-semibold uppercase tracking-[0.14em] text-navy hover:text-navy-dark"
                    >
                      Investor Charter →
                    </Link>
                  </div>
                  <ul className="mt-1">
                    {CHARTER_SECTIONS.map((s) => (
                      <li key={s.hash}>
                        <Link
                          to={`/investment-charter#${s.hash}`}
                          onClick={() => setCharterOpen(false)}
                          className="flex min-h-10 items-center px-4 py-2 text-sm text-ink-muted hover:bg-surface-muted hover:text-navy"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className={buttonClasses({ size: 'md' })}>
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring-gold inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-outline-soft bg-white text-navy-dark shadow-card hover:bg-surface-muted lg:hidden"
        >
          {open ? <Close className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-outline-soft bg-white lg:hidden"
      >
        <nav aria-label="Primary mobile" className="container-page py-4 pb-6">
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      'focus-ring-gold flex min-h-12 items-center rounded-lg px-4 py-3 text-base font-medium hover:bg-surface-muted hover:text-navy',
                      isActive
                        ? 'bg-surface-muted text-navy-dark ring-1 ring-outline-soft'
                        : 'text-ink',
                    ].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Mobile: Investor Charter accordion */}
            <li>
              <button
                type="button"
                onClick={() => setMobileCharterOpen((v) => !v)}
                className={[
                  'focus-ring-gold flex min-h-12 w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium hover:bg-surface-muted hover:text-navy',
                  pathname === '/investment-charter'
                    ? 'bg-surface-muted text-navy-dark ring-1 ring-outline-soft'
                    : 'text-ink',
                ].join(' ')}
              >
                Investor Charter
                <ChevronDown
                  className={[
                    'size-5 transition-transform duration-200',
                    mobileCharterOpen ? 'rotate-180' : '',
                  ].join(' ')}
                />
              </button>
              {mobileCharterOpen && (
                <ul className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-gold/40 pl-3">
                  <li>
                    <Link
                      to="/investment-charter"
                      onClick={closeMenu}
                      className="flex min-h-10 items-center rounded-md px-3 py-2 text-sm font-semibold text-navy hover:bg-surface-muted"
                    >
                      View full page →
                    </Link>
                  </li>
                  {CHARTER_SECTIONS.map((s) => (
                    <li key={s.hash}>
                      <Link
                        to={`/investment-charter#${s.hash}`}
                        onClick={closeMenu}
                        className="flex min-h-10 items-center rounded-md px-3 py-2 text-sm text-ink-muted hover:bg-surface-muted hover:text-navy"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="mt-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className={buttonClasses({ size: 'lg', fullWidth: true })}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
