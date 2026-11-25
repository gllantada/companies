import { useParams, Link, Navigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { getArticleBySlug, articles } from '../data/blog'

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined
  useScrollReveal()
  usePageMeta(
    article?.title || 'Articulo no encontrado',
    article?.description || ''
  )

  if (!article) return <Navigate to="/blog" replace />

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 pt-24 pb-14 md:px-6 md:pt-36 md:pb-20">
        <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          ← Volver al blog
        </Link>

        <header>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>{article.readTime} lectura</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {article.description}
          </p>
        </header>

        <div className="prose-custom mt-10">
          {article.content.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
              return <h2 key={i} className="mb-3 mt-10 text-xl font-bold text-foreground md:text-2xl">{block.replace('## ', '')}</h2>
            }
            if (block.startsWith('### ')) {
              return <h3 key={i} className="mb-2 mt-8 text-lg font-semibold text-foreground">{block.replace('### ', '')}</h3>
            }
            if (block.startsWith('**Costo:')) {
              return <p key={i} className="mb-4 rounded-lg bg-muted p-3 text-sm font-medium text-foreground">{block.replace(/\*\*/g, '')}</p>
            }
            if (block.startsWith('| ')) {
              const rows = block.split('\n').filter(r => r.trim() && !r.startsWith('|---'))
              const headers = rows[0]?.split('|').filter(Boolean).map(c => c.trim()) || []
              const dataRows = rows.slice(1)
              return (
                <div key={i} className="mb-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        {headers.map((h, j) => (
                          <th key={j} className="px-3 py-2 text-left font-semibold text-foreground">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataRows.map((row, ri) => {
                        const cells = row.split('|').filter(Boolean).map(c => c.trim())
                        return (
                          <tr key={ri} className="border-b border-border last:border-0">
                            {cells.map((cell, ci) => (
                              <td key={ci} className="px-3 py-2 text-muted-foreground">{cell}</td>
                            ))}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )
            }
            if (block.startsWith('- **')) {
              const items = block.split('\n').filter(Boolean)
              return (
                <ul key={i} className="mb-4 space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, '').replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              )
            }
            if (block.startsWith('1. ') || block.startsWith('2. ')) {
              const items = block.split('\n').filter(Boolean)
              return (
                <ol key={i} className="mb-4 space-y-2 list-decimal pl-5">
                  {items.map((item, j) => (
                    <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\. /, '').replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                    </li>
                  ))}
                </ol>
              )
            }
            return (
              <p key={i} className="mb-4 text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
            )
          })}
        </div>

        {/* CTA linking to landing page */}
        <div className="mt-12 rounded-xl border border-border bg-card p-5 text-center md:p-8">
          <h3 className="text-lg font-bold text-foreground md:text-xl">¿Queres ver como funciona?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Podemos mostrarte una demostracion personalizada para tu negocio.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to={article.linkedLanding} className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
              Ver solucion completa
            </Link>
            <Link to="/#contacto" className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              Contactanos
            </Link>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12">
          <h3 className="mb-4 text-lg font-bold text-foreground">Mas articulos</h3>
          <div className="grid gap-3">
            {articles.filter(a => a.slug !== article.slug).slice(0, 3).map((related) => (
              <Link key={related.slug} to={`/blog/${related.slug}`} className="rounded-lg border border-border p-4 text-sm transition-colors hover:border-foreground/20">
                <span className="font-medium text-foreground">{related.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
