import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { buttonClasses } from './ui/buttonStyles'
import { Close, Menu } from './ui/Icon'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/disclosures', label: 'SEBI Disclosures' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()

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
  }, [pathname, hash])

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
