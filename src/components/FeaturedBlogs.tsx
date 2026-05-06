import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFeaturedBlogs } from '../services/blogService'
import type { BlogPost } from '../services/blogService'

export const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true

    async function loadBlogs() {
      try {
        const items = await getFeaturedBlogs(3)
        if (!alive) return
        setBlogs(items)
      } finally {
        if (alive) setLoading(false)
      }
    }

    loadBlogs()

    return () => {
      alive = false
    }
  }, [])

  if (loading) {
    return (
      <section className="bg-surface-muted/60 py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-ink-subtle">Loading featured articles...</p>
          </div>
        </div>
      </section>
    )
  }

  if (blogs.length === 0) return null

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return dateString
    }
  }

  return (
    <section className="bg-surface-muted/60 py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
            Insights & Articles
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl lg:text-5xl">
            Featured Articles
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Wisdom on wealth, financial health, and life planning
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="overflow-hidden rounded-2xl bg-surface-card shadow-card ring-1 ring-outline-soft transition-shadow duration-300 hover:shadow-card-hover"
            >
              {blog.imageUrl ? (
                <div className="h-48 overflow-hidden bg-surface-muted">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ) : null}

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-navy">
                    {blog.author}
                  </span>
                  <span className="text-xs text-ink-subtle">{formatDate(blog.publishedDate)}</span>
                </div>

                <h3 className="mb-3 text-lg font-bold tracking-tight text-navy-dark line-clamp-2">
                  {blog.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-ink-muted line-clamp-3">
                  {blog.description}
                </p>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-200 hover:text-navy-soft"
                >
                  Read More
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-navy-dark hover:shadow-elevated"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
