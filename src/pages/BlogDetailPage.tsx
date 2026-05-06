import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getBlogBySlug } from '../services/blogService'
import type { BlogPost } from '../services/blogService'

export function BlogDetailPage() {
  const { slug } = useParams()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true

    async function loadBlog() {
      try {
        if (!slug) return
        const item = await getBlogBySlug(slug)
        if (!alive) return
        setBlog(item)
      } finally {
        if (alive) setLoading(false)
      }
    }

    loadBlog()

    return () => {
      alive = false
    }
  }, [slug])

  if (loading) {
    return (
      <article className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-card ring-1 ring-outline-soft sm:p-10">
            <p className="text-sm text-ink-muted">Loading article...</p>
          </div>
        </div>
      </article>
    )
  }

  if (!blog) {
    return <Navigate to="/blogs" replace />
  }

  return (
    <article className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-card ring-1 ring-outline-soft sm:p-10">
          <p className="text-xs uppercase tracking-[0.12em] text-ink-subtle">
            {blog.publishedDate} • {blog.author}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
            {blog.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-ink-muted">{blog.description}</p>

          {blog.imageUrl ? (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="mt-8 h-auto w-full rounded-2xl object-cover"
            />
          ) : null}

          <div className="prose prose-slate mt-8 max-w-none whitespace-pre-line text-[15px] leading-8 text-ink">
            {blog.content}
          </div>
        </div>
      </div>
    </article>
  )
}
