import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key from environment
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'S9eI-gut4b8EHteUP'
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_j0980pi'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_txi9qfa'

export function initEmailJS() {
  emailjs.init(PUBLIC_KEY)
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_email: 'conference22255@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      },
      PUBLIC_KEY
    )

    return {
      success: true,
      messageId: result.text,
      message: 'Your message has been sent successfully! We will get back to you soon.',
    }
  } catch (error: any) {
    const status = error?.status ?? 'unknown'
    const text = error?.text ?? (error instanceof Error ? error.message : String(error))
    console.error('Email send failed — status:', status, '| message:', text)
    return {
      success: false,
      message: `Failed to send (${status}): ${text}`,
      error: text,
    }
  }
}
