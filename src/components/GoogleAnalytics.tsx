import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function GoogleAnalytics() {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (!window.gtag) return

    // The gtag snippet in index.html already fires the initial page_view.
    // We only fire page_view events for SPA route changes.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search + location.hash,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [location.pathname, location.search, location.hash])

  return null
}
