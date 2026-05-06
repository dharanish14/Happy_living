import { supabase } from './supabaseClient'

const BLOGS_TABLE = 'blogs'
const BLOG_IMAGES_BUCKET = 'blog-images'

export type BlogPost = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  author: string
  publishedDate: string
  featured: boolean
  imageUrl?: string
  imagePath?: string
  imageName?: string
  createdAt: string
  updatedAt: string
}

type BlogRow = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  author: string
  published_date: string
  featured: boolean
  image_url: string | null
  image_path: string | null
  image_name: string | null
  created_at: string
  updated_at: string
}

type CreateBlogInput = {
  title: string
  slug?: string
  description: string
  content: string
  author: string
  publishedDate: string
  featured: boolean
  imageUrl?: string
  imagePath?: string
  imageName?: string
}

type UpdateBlogInput = Partial<CreateBlogInput>

function requireSupabase() {
  if (!supabase) {
    throw new Error('Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
  }
  return supabase
}

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function toBlogPost(row: BlogRow): BlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    description: row.description,
    content: row.content,
    author: row.author,
    publishedDate: row.published_date,
    featured: row.featured,
    imageUrl: row.image_url || undefined,
    imagePath: row.image_path || undefined,
    imageName: row.image_name || undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

async function makeUniqueSlug(baseSlug: string, excludeId?: string) {
  const supabase = requireSupabase()
  const { data, error } = await supabase
    .from(BLOGS_TABLE)
    .select('id, slug')
    .eq('slug', baseSlug)

  if (error) {
    throw error
  }

  const filtered = (data || []).filter((row) => (excludeId ? row.id !== excludeId : true))
  if (filtered.length === 0) return baseSlug

  let index = 2
  let next = `${baseSlug}-${index}`
  // Keep checking until we find an unused slug.
  while (true) {
    const { data: nextData, error: nextError } = await supabase
      .from(BLOGS_TABLE)
      .select('id, slug')
      .eq('slug', next)

    if (nextError) {
      throw nextError
    }

    const nextFiltered = (nextData || []).filter((row) => (excludeId ? row.id !== excludeId : true))
    if (nextFiltered.length === 0) return next
    index += 1
    next = `${baseSlug}-${index}`
  }
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const supabase = requireSupabase()
  const { data, error } = await supabase
    .from(BLOGS_TABLE)
    .select('*')
    .order('published_date', { ascending: false })

  if (error) {
    console.error('Failed to load blogs:', error)
    return []
  }

  return (data || []).map((row) => toBlogPost(row as BlogRow))
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = requireSupabase()
  const { data, error } = await supabase
    .from(BLOGS_TABLE)
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    console.error('Failed to load blog by slug:', error)
    return null
  }

  return data ? toBlogPost(data as BlogRow) : null
}

export async function getFeaturedBlogs(limit = 3): Promise<BlogPost[]> {
  const supabase = requireSupabase()
  const { data, error } = await supabase
    .from(BLOGS_TABLE)
    .select('*')
    .eq('featured', true)
    .order('published_date', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Failed to load featured blogs:', error)
    return []
  }

  return (data || []).map((row) => toBlogPost(row as BlogRow))
}

export async function uploadBlogImage(file: File) {
  const supabase = requireSupabase()
  const extension = file.name.split('.').pop() || 'jpg'
  const filePath = `${crypto.randomUUID()}.${extension}`

  const { error: uploadError } = await supabase.storage
    .from(BLOG_IMAGES_BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type,
    })

  if (uploadError) {
    throw uploadError
  }

  const { data } = supabase.storage.from(BLOG_IMAGES_BUCKET).getPublicUrl(filePath)

  return {
    imageUrl: data.publicUrl,
    imagePath: filePath,
    imageName: file.name,
  }
}

export async function createBlog(input: CreateBlogInput): Promise<BlogPost> {
  const supabase = requireSupabase()
  const now = new Date().toISOString()
  const generatedSlug = normalizeSlug(input.slug?.trim() || input.title)
  const uniqueSlug = await makeUniqueSlug(generatedSlug)

  const payload = {
    title: input.title.trim(),
    slug: uniqueSlug,
    description: input.description.trim(),
    content: input.content.trim(),
    author: input.author.trim(),
    published_date: input.publishedDate,
    featured: input.featured,
    image_url: input.imageUrl || null,
    image_path: input.imagePath || null,
    image_name: input.imageName || null,
    created_at: now,
    updated_at: now,
  }

  const { data, error } = await supabase.from(BLOGS_TABLE).insert(payload).select('*').single()
  if (error) {
    throw error
  }

  return toBlogPost(data as BlogRow)
}

export async function updateBlog(id: string, input: UpdateBlogInput): Promise<BlogPost | null> {
  const supabase = requireSupabase()
  const { data: existing, error: existingError } = await supabase
    .from(BLOGS_TABLE)
    .select('*')
    .eq('id', id)
    .maybeSingle()

  if (existingError) {
    throw existingError
  }

  if (!existing) return null

  const current = existing as BlogRow
  const desiredSlug = normalizeSlug((input.slug ?? current.slug).trim())
  const nextSlug = await makeUniqueSlug(desiredSlug, id)

  const payload = {
    title: (input.title ?? current.title).trim(),
    slug: nextSlug,
    description: (input.description ?? current.description).trim(),
    content: (input.content ?? current.content).trim(),
    author: (input.author ?? current.author).trim(),
    published_date: input.publishedDate ?? current.published_date,
    featured: input.featured ?? current.featured,
    image_url: input.imageUrl !== undefined ? input.imageUrl || null : current.image_url,
    image_path: input.imagePath !== undefined ? input.imagePath || null : current.image_path,
    image_name: input.imageName !== undefined ? input.imageName || null : current.image_name,
    updated_at: new Date().toISOString(),
  }

  const { data, error } = await supabase
    .from(BLOGS_TABLE)
    .update(payload)
    .eq('id', id)
    .select('*')
    .single()

  if (error) {
    throw error
  }

  return toBlogPost(data as BlogRow)
}

export async function deleteBlog(id: string): Promise<void> {
  const supabase = requireSupabase()
  const { data, error } = await supabase.from(BLOGS_TABLE).select('*').eq('id', id).maybeSingle()

  if (error) {
    throw error
  }

  const row = data as BlogRow | null

  if (row?.image_path) {
    const { error: storageError } = await supabase.storage.from(BLOG_IMAGES_BUCKET).remove([row.image_path])
    if (storageError) {
      console.warn('Failed to delete blog image from storage:', storageError)
    }
  }

  const { error: deleteError } = await supabase.from(BLOGS_TABLE).delete().eq('id', id)
  if (deleteError) {
    throw deleteError
  }
}

export function getEmptyBlogDraft() {
  const today = new Date().toISOString().slice(0, 10)
  return {
    title: '',
    slug: '',
    description: '',
    content: '',
    author: '',
    publishedDate: today,
    featured: false,
    imageFile: null as File | null,
  }
}
