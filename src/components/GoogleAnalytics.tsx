import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_SRC_BASE = 'https://www.googletagmanager.com/gtag/js'
const DEFAULT_MEASUREMENT_ID = 'G-J5WBY22DX0'

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
  const measurementIdFromEnv = (
    import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
  )?.trim()
  const measurementId = measurementIdFromEnv || DEFAULT_MEASUREMENT_ID
  const location = useLocation()

  useEffect(() => {
    ensureGtag(measurementId)
  }, [measurementId])

  useEffect(() => {
    if (!window.gtag) return

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search + location.hash,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [measurementId, location.pathname, location.search, location.hash])

  return null
}
