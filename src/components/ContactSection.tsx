import { useId, useState, type FormEvent } from 'react'
import { Button } from './ui/Button'
import { CheckCircle, Mail, MapPin, Phone, ShieldCheck } from './ui/Icon'

type FormState = {
  fullName: string
  phone: string
  email: string
  service: string
  notes: string
}

const INITIAL: FormState = {
  fullName: '',
  phone: '',
  email: '',
  service: 'Portfolio Management',
  notes: '',
}

const SERVICES = [
  'Portfolio Management',
  'Retirement Planning',
  'Wealth Transfer',
  'Equity Advisory',
  'Comprehensive Plan',
]

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const ids = {
    fullName: useId(),
    phone: useId(),
    email: useId(),
    service: useId(),
    notes: useId(),
  }

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!/^\+?[0-9 ()-]{7,}$/.test(form.phone.trim()))
      next.phone = 'Enter a valid phone number with country code if applicable.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Enter a valid email address.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) {
      const firstErrorKey = (
        ['fullName', 'phone', 'email', 'notes'] as Array<keyof FormState>
      ).find((k) => Boolean(errors[k]))
      if (firstErrorKey) {
        const el = document.getElementById(ids[firstErrorKey])
        el?.focus()
      }
      return
    }
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface py-20 sm:py-24"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Begin Your Journey
              </p>
              <h2
                id="contact-heading"
                className="text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl"
              >
                Begin Your Wealth Journey
              </h2>
              <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                Schedule a confidential discovery session with our lead
                advisor. We will map your goals and recommend a thoughtful
                architecture per your context.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Phone
                  </p>
                  <a
                    href="tel:+919800000000"
                    className="focus-ring-gold mt-0.5 inline-block font-headline text-base font-semibold text-navy-dark hover:text-navy"
                  >
                    +91 98000 00000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Email
                  </p>
                  <a
                    href="mailto:advisor@srghappyliving.com"
                    className="focus-ring-gold mt-0.5 inline-block break-all font-headline text-base font-semibold text-navy-dark hover:text-navy"
                  >
                    advisor@srghappyliving.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Office
                  </p>
                  <p className="mt-0.5 font-headline text-base font-semibold text-navy-dark">
                    14 Brigade Square, MG Road, Bengaluru 560001
                  </p>
                </div>
              </li>
            </ul>

            <p className="inline-flex items-center gap-2 rounded-lg bg-navy-dark/5 p-3 text-sm text-ink-muted">
              <ShieldCheck className="size-4 shrink-0 text-success" />
              All conversations are confidential. We never share your data with
              third parties.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-outline-soft shadow-elevated sm:p-8">
              {submitted ? (
                <SuccessPanel name={form.fullName} onReset={() => {
                  setForm(INITIAL)
                  setSubmitted(false)
                }} />
              ) : (
                <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id={ids.fullName}
                      label="Full Name"
                      required
                      error={errors.fullName}
                    >
                      <input
                        id={ids.fullName}
                        type="text"
                        autoComplete="name"
                        value={form.fullName}
                        onChange={(e) => update('fullName', e.target.value)}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? `${ids.fullName}-err` : undefined}
                        aria-required="true"
                        placeholder="Enter your name"
                        className={inputCls(Boolean(errors.fullName))}
                      />
                    </Field>
                    <Field
                      id={ids.phone}
                      label="Phone Number"
                      required
                      error={errors.phone}
                    >
                      <input
                        id={ids.phone}
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? `${ids.phone}-err` : undefined}
                        aria-required="true"
                        placeholder="+91 98XXX XXXXX"
                        className={inputCls(Boolean(errors.phone))}
                      />
                    </Field>
                  </div>

                  <Field id={ids.email} label="Email Address" required error={errors.email}>
                    <input
                      id={ids.email}
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? `${ids.email}-err` : undefined}
                      aria-required="true"
                      placeholder="name@example.com"
                      className={inputCls(Boolean(errors.email))}
                    />
                  </Field>

                  <Field id={ids.service} label="Service of Interest">
                    <div className="relative">
                      <select
                        id={ids.service}
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className={`${inputCls(false)} appearance-none pr-10`}
                      >
                        {SERVICES.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center text-ink-muted"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </Field>

                  <Field
                    id={ids.notes}
                    label="Additional Notes"
                    hint="Tell us briefly about your goals or current situation (optional)."
                  >
                    <textarea
                      id={ids.notes}
                      rows={4}
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      placeholder="How can we help you?"
                      className={`${inputCls(false)} min-h-[120px] resize-y`}
                    />
                  </Field>

                  <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-ink-muted">
                      By submitting, you consent to be contacted by SRG Happy
                      Living regarding your enquiry.
                    </p>
                    <Button type="submit" size="lg">
                      Request Advisory Call
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function inputCls(hasError: boolean): string {
  return [
    'block w-full rounded-lg border bg-white px-3.5 py-3 text-base text-ink placeholder:text-ink-subtle/80 transition-colors motion-reduce:transition-none',
    'focus:outline-none focus-visible:outline-none focus:ring-3 focus:ring-gold/40 focus:border-navy',
    hasError
      ? 'border-error/70 focus:ring-error/30 focus:border-error'
      : 'border-outline',
  ].join(' ')
}

type FieldProps = {
  id: string
  label: string
  required?: boolean
  hint?: string
  error?: string
  children: React.ReactNode
}

function Field({ id, label, required, hint, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-headline text-sm font-semibold text-navy-dark"
      >
        {label}
        {required ? (
          <span className="ml-0.5 text-error" aria-hidden="true">
            *
          </span>
        ) : null}
        {required ? <span className="sr-only">required</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-ink-muted">{hint}</p>
      ) : null}
      {error ? (
        <p
          id={`${id}-err`}
          className="text-xs font-medium text-error"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}

function SuccessPanel({ name, onReset }: { name: string; onReset: () => void }) {
  return (
    <div role="status" className="flex flex-col items-center gap-4 py-6 text-center">
      <span className="grid size-14 place-items-center rounded-full bg-success/12 text-success">
        <CheckCircle className="size-7" />
      </span>
      <h3 className="font-headline text-2xl font-bold text-navy-dark">
        Thank you{name ? `, ${name.split(' ')[0]}` : ''}.
      </h3>
      <p className="max-w-md text-base leading-relaxed text-ink-muted">
        Your request has been received. A senior advisor will reach out within
        one business day to schedule your confidential discovery session.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="focus-ring-gold mt-2 text-sm font-semibold text-navy hover:text-navy-dark underline-offset-4 hover:underline"
      >
        Submit another request
      </button>
    </div>
  )
}
