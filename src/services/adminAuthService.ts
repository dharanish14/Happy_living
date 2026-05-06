import type { Session, User } from '@supabase/supabase-js'
import { supabase } from './supabaseClient'

const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL as string | undefined) || 'admin@happyliving.com'

export function getAdminEmail() {
  return ADMIN_EMAIL
}

export async function getCurrentSession(): Promise<Session | null> {
  if (!supabase) return null
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    console.error('Failed to read admin session:', error)
    return null
  }
  return data.session ?? null
}

export async function getCurrentUser(): Promise<User | null> {
  if (!supabase) return null
  const { data, error } = await supabase.auth.getUser()
  if (error) {
    console.error('Failed to read admin user:', error)
    return null
  }
  return data.user ?? null
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser()
  return !!user && user.email === ADMIN_EMAIL
}

export async function loginAdmin(email: string, password: string) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
  }

  const normalizedEmail = email.trim().toLowerCase()
  if (normalizedEmail !== ADMIN_EMAIL.toLowerCase()) {
    throw new Error('This account is not allowed to access the admin panel.')
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  })

  if (error) {
    throw error
  }

  if (!data.user || data.user.email !== ADMIN_EMAIL) {
    await supabase.auth.signOut()
    throw new Error('This account is not allowed to access the admin panel.')
  }

  return data.user
}

export async function logoutAdmin() {
  if (!supabase) return
  await supabase.auth.signOut()
}
