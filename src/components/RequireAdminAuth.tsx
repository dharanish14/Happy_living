import { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAdminAuthenticated } from '../services/adminAuthService'

export function RequireAdminAuth() {
  const location = useLocation()
  const [checking, setChecking] = useState(true)
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    let alive = true

    async function verify() {
      const ok = await isAdminAuthenticated()
      if (!alive) return
      setAllowed(ok)
      setChecking(false)
    }

    verify()

    return () => {
      alive = false
    }
  }, [])

  if (checking) {
    return (
      <div className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-md rounded-3xl bg-white p-7 text-center shadow-card ring-1 ring-outline-soft sm:p-10">
            <p className="text-sm text-ink-muted">Checking admin access...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!allowed) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
