import { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getEmptyBlogDraft,
  uploadBlogImage,
  updateBlog,
} from '../services/blogService'
import type { BlogPost } from '../services/blogService'
import { getAdminEmail, logoutAdmin } from '../services/adminAuthService'

type Draft = ReturnType<typeof getEmptyBlogDraft>

export function AdminBlogsPage() {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [draft, setDraft] = useState<Draft>(() => getEmptyBlogDraft())
  const [editingId, setEditingId] = useState<string | null>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let alive = true

    async function loadBlogs() {
      try {
        setLoading(true)
        const items = await getAllBlogs()
        if (!alive) return
        setBlogs(items)
      } catch (err) {
        if (!alive) return
        console.error(err)
        setError('Failed to load blogs.')
      } finally {
        if (alive) setLoading(false)
      }
    }

    loadBlogs()

    return () => {
      alive = false
    }
  }, [])

  async function refreshBlogs() {
    setBlogs(await getAllBlogs())
  }

  function resetForm() {
    setDraft(getEmptyBlogDraft())
    setImagePreview('')
    setEditingId(null)
  }

  async function handleLogout() {
    await logoutAdmin()
    navigate('/admin/login', { replace: true })
  }

  function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) {
      setDraft((prev) => ({ ...prev, imageFile: null }))
      setImagePreview('')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : ''
      setDraft((prev) => ({ ...prev, imageFile: file }))
      setImagePreview(result)
    }
    reader.readAsDataURL(file)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    if (!draft.title || !draft.description || !draft.content || !draft.author) {
      return
    }

    try {
      setSaving(true)

      const current = editingId ? blogs.find((blog) => blog.id === editingId) : null
      let uploadedImage: {
        imageUrl?: string
        imagePath?: string
        imageName?: string
      } | undefined = current
        ? {
            imageUrl: current.imageUrl,
            imagePath: current.imagePath,
            imageName: current.imageName,
          }
        : undefined

      if (draft.imageFile) {
        uploadedImage = await uploadBlogImage(draft.imageFile)
      }

      const payload = {
        title: draft.title,
        slug: draft.slug,
        description: draft.description,
        content: draft.content,
        author: draft.author,
        publishedDate: draft.publishedDate,
        featured: draft.featured,
        imageUrl: uploadedImage?.imageUrl,
        imagePath: uploadedImage?.imagePath,
        imageName: uploadedImage?.imageName,
      }

      if (editingId) {
        await updateBlog(editingId, payload)
      } else {
        await createBlog(payload)
      }

      await refreshBlogs()
      resetForm()
    } catch (err) {
      console.error(err)
      setError('Unable to save the blog post.')
    } finally {
      setSaving(false)
    }
  }

  function startEdit(blog: BlogPost) {
    setEditingId(blog.id)
    setDraft({
      title: blog.title,
      slug: blog.slug,
      description: blog.description,
      content: blog.content,
      author: blog.author,
      publishedDate: blog.publishedDate,
      featured: blog.featured,
      imageFile: null,
    })
    setImagePreview(blog.imageUrl || '')
  }

  async function handleDelete(id: string) {
    try {
      setSaving(true)
      await deleteBlog(id)
      if (editingId === id) {
        resetForm()
      }
      await refreshBlogs()
    } catch (err) {
      console.error(err)
      setError('Unable to delete the blog post.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-outline-soft sm:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  Blog CMS
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
                  Admin Blog Panel
                </h1>
              </div>
              <div className="flex flex-col items-start gap-2 sm:items-end">
                <p className="text-xs uppercase tracking-[0.14em] text-ink-subtle">
                  Signed in as {getAdminEmail()}
                </p>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full border border-outline px-4 py-2 text-xs font-semibold text-ink hover:bg-surface-muted"
                >
                  Log out
                </button>
              </div>
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-muted sm:text-base">
              Create, edit, and delete blog posts. Images are uploaded from your device and stored in Supabase Storage.
            </p>

            {error ? (
              <div className="mt-6 rounded-2xl border border-error bg-red-50 px-4 py-3 text-sm text-error">
                {error}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                Title
                <input
                  className="rounded-xl border border-outline-soft px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  value={draft.title}
                  onChange={(e) => setDraft((prev) => ({ ...prev, title: e.target.value }))}
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                Slug (optional)
                <input
                  className="rounded-xl border border-outline-soft px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  value={draft.slug}
                  onChange={(e) => setDraft((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="auto-generated-if-empty"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                Author
                <input
                  className="rounded-xl border border-outline-soft px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  value={draft.author}
                  onChange={(e) => setDraft((prev) => ({ ...prev, author: e.target.value }))}
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                Published Date
                <input
                  type="date"
                  className="rounded-xl border border-outline-soft px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  value={draft.publishedDate}
                  onChange={(e) =>
                    setDraft((prev) => ({ ...prev, publishedDate: e.target.value }))
                  }
                  required
                />
              </label>

              <label className="sm:col-span-2 flex flex-col gap-2 text-sm font-medium text-ink">
                Short Description
                <textarea
                  rows={3}
                  className="rounded-xl border border-outline-soft px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  value={draft.description}
                  onChange={(e) => setDraft((prev) => ({ ...prev, description: e.target.value }))}
                  required
                />
              </label>

              <label className="sm:col-span-2 flex flex-col gap-2 text-sm font-medium text-ink">
                Content
                <textarea
                  rows={8}
                  className="rounded-xl border border-outline-soft px-4 py-2.5 text-sm leading-7 focus:outline-none focus:ring-2 focus:ring-navy"
                  value={draft.content}
                  onChange={(e) => setDraft((prev) => ({ ...prev, content: e.target.value }))}
                  required
                />
              </label>

              <label className="sm:col-span-2 flex flex-col gap-2 text-sm font-medium text-ink">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="rounded-xl border border-outline-soft px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  onChange={handleImageUpload}
                />
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Selected blog cover preview"
                    className="mt-2 h-48 w-full rounded-2xl object-cover"
                  />
                ) : null}
              </label>

              <label className="sm:col-span-2 inline-flex items-center gap-3 rounded-xl border border-outline-soft px-4 py-3 text-sm font-medium text-ink">
                <input
                  type="checkbox"
                  checked={draft.featured}
                  onChange={(e) => setDraft((prev) => ({ ...prev, featured: e.target.checked }))}
                />
                Mark as featured (shows on homepage)
              </label>

              <div className="sm:col-span-2 mt-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark"
                >
                  {saving ? 'Saving...' : editingId ? 'Update Blog' : 'Publish Blog'}
                </button>
                {editingId ? (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center rounded-full border border-outline px-6 py-3 text-sm font-semibold text-ink hover:bg-surface-muted"
                  >
                    Cancel Edit
                  </button>
                ) : null}
              </div>
            </form>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-7 shadow-card ring-1 ring-outline-soft sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-navy-dark">Existing Blogs</h2>
            {loading ? (
              <p className="mt-4 text-sm text-ink-muted">Loading blogs...</p>
            ) : blogs.length === 0 ? (
              <p className="mt-4 text-sm text-ink-muted">No blogs yet. Create your first post above.</p>
            ) : (
              <ul className="mt-5 space-y-3">
                {blogs.map((blog) => (
                  <li
                    key={blog.id}
                    className="flex flex-col gap-4 rounded-2xl border border-outline-soft p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold text-navy-dark">{blog.title}</p>
                      <p className="text-xs uppercase tracking-[0.1em] text-ink-subtle">
                        {blog.publishedDate} • {blog.featured ? 'Featured' : 'Standard'}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => startEdit(blog)}
                        disabled={saving}
                        className="rounded-full border border-outline px-4 py-2 text-xs font-semibold text-ink hover:bg-surface-muted"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(blog.id)}
                        disabled={saving}
                        className="rounded-full border border-error px-4 py-2 text-xs font-semibold text-error hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
