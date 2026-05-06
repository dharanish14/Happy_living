import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllBlogs } from '../services/blogService'
import type { BlogPost } from '../services/blogService'

export function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true

    async function loadBlogs() {
      try {
        const items = await getAllBlogs()
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

  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
            Knowledge Hub
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
            Our Blogs
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-muted sm:text-base">
            Insights on financial planning, wealth strategy, and long-term money decisions.
          </p>

          {loading ? (
            <div className="mt-8 rounded-2xl bg-white p-6 text-sm text-ink-muted shadow-card ring-1 ring-outline-soft">
              Loading blogs...
            </div>
          ) : blogs.length === 0 ? (
            <div className="mt-8 rounded-2xl bg-white p-6 text-sm text-ink-muted shadow-card ring-1 ring-outline-soft">
              No blogs published yet.
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-outline-soft"
                >
                  {blog.imageUrl ? (
                    <img src={blog.imageUrl} alt={blog.title} className="h-48 w-full object-cover" />
                  ) : null}

                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.12em] text-ink-subtle">
                      {blog.publishedDate} • {blog.author}
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-navy-dark">{blog.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-ink-muted">{blog.description}</p>

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-soft"
                    >
                      Read article
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
