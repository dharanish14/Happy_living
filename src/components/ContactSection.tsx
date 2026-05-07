import { useId, useState, type FormEvent } from 'react'
import { Button } from './ui/Button'
import { CheckCircle, Mail, MapPin, Phone, ShieldCheck, AlertCircle } from './ui/Icon'
import { sendContactEmail } from '../services/emailService'

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
  service: 'Wealth Planning and Management',
  notes: '',
}

const SERVICES = [
  'Wealth Planning and Management',
  'Asset Management',
  'Retirement Planning',
  'Estate Planning',
  'Financial Health Check',
]

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
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

  const validate = (): Partial<Record<keyof FormState, string>> => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!/^\+?[0-9 ()-]{7,}$/.test(form.phone.trim()))
      next.phone = 'Enter a valid phone number with country code if applicable.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Enter a valid email address.'
    return next
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstErrorKey = (
        ['fullName', 'phone', 'email'] as Array<keyof FormState>
      ).find((k) => Boolean(nextErrors[k]))
      if (firstErrorKey) {
        const el = document.getElementById(ids[firstErrorKey])
        el?.focus()
      }
      return
    }

    setLoading(true)
    setMessage(null)

    try {
      const result = await sendContactEmail({
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        subject: `New Advisory Request: ${form.service}`,
        message: `Service: ${form.service}\n\nMessage:\n${form.notes || '(No additional notes)'}`,
      })

      if (result.success) {
        setMessage({
          type: 'success',
          text: result.message,
        })
        setForm(INITIAL)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setMessage({
          type: 'error',
          text: result.message,
        })
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to send message. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
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
              <p className="text-base leading-8 text-ink-muted sm:text-lg">
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
                    href="tel:+919035083452"
                    className="focus-ring-gold mt-1 inline-block rounded-sm py-1 font-headline text-base font-semibold text-navy-dark hover:text-navy"
                  >
                    +91 90350 83452
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
                    href="mailto:sameersakurikar@yahoo.com"
                    className="focus-ring-gold mt-1 inline-block break-all rounded-sm py-1 font-headline text-base font-semibold text-navy-dark hover:text-navy"
                  >
                    sameersakurikar@yahoo.com
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
                  <p className="mt-1 font-headline text-base font-semibold text-navy-dark">
                    A2-201, Paramount Pilatus, Arekere,<br />Off Bannergatta Road, Bengaluru 560076
                  </p>
                </div>
              </li>
            </ul>

            <p className="inline-flex items-center gap-2 rounded-xl bg-navy-dark/5 p-4 text-sm leading-6 text-ink-muted">
              <ShieldCheck className="size-4 shrink-0 text-success" />
              All conversations are confidential. We never share your data with
              third parties.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-outline-soft shadow-elevated sm:p-8 lg:p-9">
              {submitted ? (
                <SuccessPanel name={form.fullName} onReset={() => {
                  setForm(INITIAL)
                  setErrors({})
                  setSubmitted(false)
                }} />
              ) : (
                <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
                  {Object.keys(errors).length > 0 ? (
                    <div
                      role="alert"
                      className="rounded-xl border border-error/20 bg-error/5 px-4 py-3 text-sm leading-6 text-error"
                    >
                      Please correct the highlighted fields before submitting.
                    </div>
                  ) : null}
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
                        required
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
                        required
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
                      required
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

                  <div className="flex flex-col gap-3 pt-1 lg:flex-row lg:items-center lg:justify-between">
                    <p className="max-w-xl text-sm leading-6 text-ink-muted">
                      By submitting, you consent to be contacted by SRG Happy
                      Living regarding your enquiry.
                    </p>
                    <Button 
                      type="submit" 
                      size="lg" 
                      fullWidth 
                      disabled={loading}
                      className="lg:w-auto lg:whitespace-nowrap !bg-gold !text-white hover:!bg-gold/90 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg active:shadow-md"
                    >
                      {loading ? 'Sending...' : 'Request Advisory Call'}
                    </Button>
                  </div>

                  {message && (
                    <div
                      className={`rounded-lg p-4 flex items-start gap-3 ${
                        message.type === 'success'
                          ? 'bg-success/10 border border-success/30'
                          : 'bg-error/10 border border-error/30'
                      }`}
                      role="alert"
                    >
                      {message.type === 'success' ? (
                        <CheckCircle className="size-5 shrink-0 text-success mt-0.5" />
                      ) : (
                        <AlertCircle className="size-5 shrink-0 text-error mt-0.5" />
                      )}
                      <p
                        className={`text-sm leading-6 ${
                          message.type === 'success' ? 'text-success' : 'text-error'
                        }`}
                      >
                        {message.text}
                      </p>
                    </div>
                  )}
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
    'block w-full rounded-lg border bg-white px-4 py-3 text-base leading-6 text-ink placeholder:text-ink-subtle/80 transition-colors motion-reduce:transition-none',
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
    <div className="flex flex-col gap-2">
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
    <div role="status" aria-live="polite" className="flex flex-col items-center gap-4 py-6 text-center">
      <span className="grid size-14 place-items-center rounded-full bg-success/12 text-success">
        <CheckCircle className="size-7" />
      </span>
      <h3 className="font-headline text-2xl font-bold text-navy-dark">
        Thank you{name ? `, ${name.split(' ')[0]}` : ''}.
      </h3>
      <p className="max-w-md text-base leading-8 text-ink-muted">
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
