# 2chub Website

Public-facing website for the 2chub research institute.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion
- IBM Plex Mono / Sans (self-hosted, GDPR-compliant)

## Development

```bash
npm install
npm run dev
```

Dev server runs on http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/sections/` - page sections (Hero, Research, Platform, Team, Impressum)
- `src/components/` - shared components (Header, Footer, MarqueeStrip, Logo)
- `src/i18n/` - bilingual content (de default, en fallback)
- `src/styles/globals.css` - design tokens and base styles
- `public/fonts/` - self-hosted IBM Plex fonts
- `public/logo.svg` - 2chub logo (currently admin-panel logo)

## Content editing

All copy lives in `src/i18n/translations.ts`. Both languages must be updated together.
