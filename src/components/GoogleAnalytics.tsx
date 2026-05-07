import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_SRC_BASE = 'https://www.googletagmanager.com/gtag/js'

function ensureGtag(measurementId: string) {
  if (typeof document === 'undefined') return

  // Avoid injecting twice
  if (document.querySelector(`script[data-ga4="${measurementId}"]`)) return

  const script = document.createElement('script')
  script.async = true
  script.src = `${GA_SRC_BASE}?id=${encodeURIComponent(measurementId)}`
  script.setAttribute('data-ga4', measurementId)
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    // We'll send SPA page_view manually on route change
    send_page_view: false,
  })
}

export function GoogleAnalytics() {
  const measurementId = (
    import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
  )?.trim()
  const location = useLocation()

  useEffect(() => {
    if (!measurementId) return
    ensureGtag(measurementId)
  }, [measurementId])

  useEffect(() => {
    if (!measurementId) return
    if (!window.gtag) return

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search + location.hash,
    })
  }, [measurementId, location.pathname, location.search, location.hash])

  return null
}
