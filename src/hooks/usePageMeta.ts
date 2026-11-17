import { useEffect } from 'react'

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const suffix = 'Devs Extension'
    document.title = title ? `${title} — ${suffix}` : `${suffix} — Desarrollo web y automatizaciones para empresas`

    const setAttr = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    const canonical = `https://companies.devsextension.com${window.location.pathname}`

    setAttr('meta[name="description"]', 'content', description)
    setAttr('meta[property="og:title"]', 'content', document.title)
    setAttr('meta[property="og:description"]', 'content', description)
    setAttr('meta[property="og:url"]', 'content', canonical)
    setAttr('meta[name="twitter:title"]', 'content', document.title)
    setAttr('meta[name="twitter:description"]', 'content', description)
    setAttr('link[rel="canonical"]', 'href', canonical)
  }, [title, description])
}
