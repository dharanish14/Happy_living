import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getAdminEmail, isAdminAuthenticated, loginAdmin } from '../services/adminAuthService'

export function AdminLoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState(getAdminEmail())
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [checking, setChecking] = useState(true)
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    let alive = true

    async function verify() {
      const ok = await isAdminAuthenticated()
      if (!alive) return
      setAuthed(ok)
      setChecking(false)
    }

    verify()

    return () => {
      alive = false
    }
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    try {
      await loginAdmin(email, password)
      const from = (location.state as { from?: string } | null)?.from || '/admin/blogs'
      navigate(from, { replace: true })
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : 'Invalid admin credentials.')
    }
  }

  if (checking) {
    return (
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-md rounded-3xl bg-white p-7 text-center shadow-card ring-1 ring-outline-soft sm:p-10">
            <p className="text-sm text-ink-muted">Checking admin session...</p>
          </div>
        </div>
      </section>
    )
  }

  if (authed) {
    return <Navigate to="/admin/blogs" replace />
  }

  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-7 shadow-card ring-1 ring-outline-soft sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Admin Access</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-dark">Log in</h1>
          <p className="mt-3 text-sm leading-7 text-ink-muted">
            Sign in to manage blog posts.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              Email
              <input
                className="rounded-xl border border-outline-soft px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              Password
              <input
                type="password"
                className="rounded-xl border border-outline-soft px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </label>

            {error ? <p className="text-sm font-medium text-error">{error}</p> : null}

            <button
              type="submit"
              className="w-full rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 rounded-2xl bg-surface-muted/60 p-4 text-xs leading-6 text-ink-subtle">
            Admin email: {getAdminEmail()}
          </div>
        </div>
      </div>
    </section>
  )
}
