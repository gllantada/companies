# CLAUDE.md — Companies (companies.devsextension.com)

## Overview

Landing page de Devs Extension para empresas. Presenta servicios de desarrollo web, automatizaciones y agentes de IA.

**Stack:** React + Vite + Tailwind CSS v4 + react-router + i18next + lucide-react

## Repositorio

- **Repo:** `gllantada/companies` (repo propio, separado del monorepo)
- **Es solo frontend** — no tiene backend. Es un sitio estatico.

## Estructura

```
src/
  App.tsx              — Router principal (rutas: /, /desarrollo-web, /automatizaciones, /demos)
  main.tsx             — Entrypoint
  index.css            — Tailwind + theme custom (colores warm)
  pages/
    Home.tsx           — Landing principal
    DesarrolloWeb.tsx  — Pagina de desarrollo web
    Automatizaciones.tsx — Pagina de automatizaciones
    Demo.tsx           — Pagina de demos de agentes IA (/demos)
  components/          — Hero, Navbar, Footer, Services, etc.
  i18n/                — Traducciones ES/EN
  hooks/               — useScrollReveal, usePageMeta
```

## Dev local

```bash
npm install
npm run dev
# Abrir http://localhost:5173
```

## Build

```bash
npm run build   # Genera dist/
npm run preview # Preview del build
```

## Deploy (Railway)

- **Proyecto Railway:** `efficient-cooperation`
- **Servicio:** `efficient-cooperation`
- **URL produccion:** https://companies.devsextension.com
- **Dominio custom:** `companies.devsextension.com`
- **Como deploya:** `serve dist -s` (SPA con client-side routing, flag `-s` maneja fallback)

```bash
# Desde el directorio companies/
cd /Users/gonzalollantada/Desktop/devsextension/companies
railway up
```

Railway esta linkeado en este directorio. Solo hace falta `railway up`.

## Notas

- Tailwind v4 (usa `@theme` en index.css, no tailwind.config)
- i18n: soporte ES/EN con deteccion automatica
- La pagina `/demos` tiene cards que linkan a los chatbots en produccion (Railway)
