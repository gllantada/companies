import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { articles } from '../data/blog'

export function BlogPage() {
  useScrollReveal()
  usePageMeta(
    'Blog — Agentes de IA, automatizaciones y desarrollo web',
    'Articulos sobre agentes de inteligencia artificial, chatbots para empresas, automatizacion por WhatsApp y desarrollo web en Argentina.'
  )

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-8 md:px-6 md:pt-36 md:pb-12">
        <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          Blog
        </span>
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
          Agentes de IA, automatizaciones y desarrollo web para empresas
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:max-w-2xl md:text-lg">
          Guias practicas, casos de uso y comparativas para decidir como automatizar tu negocio.
        </p>
      </section>

      <section className="scroll-reveal mx-auto max-w-4xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="scroll-reveal-stagger grid gap-5">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20 md:p-6"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span>·</span>
                <span>{article.readTime} lectura</span>
              </div>
              <h2 className="mt-2 text-lg font-semibold text-foreground group-hover:underline md:text-xl">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {article.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {article.keywords.slice(0, 3).map((kw) => (
                  <span key={kw} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                    {kw}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
