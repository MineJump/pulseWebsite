# PULSE / 2CHuB Website — Editable Source

Editable Vite + React 19 + Tailwind v4 + Framer Motion 11 Quellcode der PULSE/2CHuB Website.

## Schnellstart

```bash
cd 2chub-website-src
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview  # Build-Vorschau auf http://localhost:8765
```

## Was wo liegt

```
src/
├── App.jsx                 Routing-Tabelle (Mini-Router, kein react-router)
├── main.jsx                React-Entrypoint
├── i18n/
│   ├── translations.js     Komplette DE + EN Texte — hier editieren
│   ├── privacy-de.html     Datenschutzerklärung DE (Volltext)
│   └── privacy-en.html     Privacy Policy EN (Volltext)
├── lib/
│   ├── i18n.jsx            LangProvider + useLang Hook
│   ├── router.jsx          MiniRouterProvider + useRoute + LinkInterceptor
│   ├── motion.js           Animations-Tokens (dur, ease, Varianten)
│   └── hooks.js            usePrefersReducedMotion
├── components/
│   ├── Header.jsx          Mit Methoden-Dropdown, Sprach-Toggle, Mobile-Menu
│   ├── Footer.jsx          Mit Kontakt-Card
│   ├── PageHero.jsx        Shared Hero für alle Sub-Pages
│   ├── PageScaffold.jsx    Header + main + Footer Wrapper
│   ├── Hero.jsx            Home-Hero mit Pulsing-Dot
│   ├── UspPipelineDiagram.jsx     Sensor → Pipeline → Insight Animation
│   ├── PlattformPipeline.jsx      Interaktiver 9-Knoten Graph mit Pfeilen
│   ├── Button.jsx, Card.jsx, Logo.jsx, BackLink.jsx, SubtleArrowLink.jsx
│   ├── BlurOrbField.jsx, GooeyBlobs.jsx, Marquee.jsx
│   └── PageTransition.jsx
├── pages/
│   ├── HomePage.jsx        /
│   ├── MethodenPage.jsx    /methoden
│   ├── MethodDetailPage.jsx /methoden/{slug}
│   ├── PlattformPage.jsx   /plattform
│   ├── AppPage.jsx         /app
│   ├── AnwendungenPage.jsx /anwendungen
│   ├── PreisePage.jsx      /preise
│   ├── UeberUnsPage.jsx    /ueber-uns
│   ├── ImpressumPage.jsx   /impressum
│   └── PrivacyPage.jsx     /privacy
└── styles/
    └── index.css           Globales CSS: Tokens, Fonts, Custom Utilities, Keyframes

public/
├── fonts/                  IBM Plex Sans + Mono (woff2)
├── logo-2chub.svg
├── favicon.png
├── robots.txt
├── _headers                Netlify/Cloudflare Pages Security-Header
└── .well-known/security.txt

index.html                  Vite Entry + 3 inline Runtime-Helpers
                            (Pipeline-Pfad-Fix, Scroll-Nudge, Dot-Pulse-Fallback)
vite.config.js              Vite-Config mit react + tailwindcss-Plugins
```

## Editing-Beispiele

**Text einer Seite ändern:** öffne `src/i18n/translations.js`, suche den Pfad (z.B. `t.hero.title`), ändere den String. Auto-Reload im Dev-Server.

**Neue Methode hinzufügen:** in `translations.js` unter `methods.items` einen neuen Eintrag mit `number`, `slug`, `title`, `shortDesc`, `cardDesc`, `pageTitle`, `pageIntro`, `bullets`, optional `rich.*`. Dann in `src/App.jsx` den Slug zu `METHOD_SLUGS` ergänzen.

**Neue Route hinzufügen:** Page-Datei in `src/pages/` anlegen, in `src/App.jsx` einen Eintrag in `pageForPath` ergänzen. Header-Links in `src/components/Header.jsx`.

**Farben / Fonts:** alles in `src/styles/index.css` unter `:root { ... }`.

## Tech-Notes

- React 19, Vite 6, Tailwind v4 (`@tailwindcss/vite`), Framer Motion 11
- Routing: eigener Mini-Router (kein react-router), 70 Zeilen in `src/lib/router.jsx`
- i18n: DE/EN, gespeichert in `localStorage['2chub-lang']`, Default aus `navigator.language`
- Pipeline-Diagramme: animierte SVG + Framer-Motion (keine canvas-libs)
- Build-Output: ~9 KB HTML + 38 KB CSS + 242 KB App-JS + 117 KB framer-motion + 194 KB react (gzipped: ~170 KB total)

## Externe Dienste

### Web3Forms — Pricing-Anfragen-Modal
Das Modal auf `/preise` (Klick auf z. B. „Explore wählen") schickt die User-Anfrage
direkt an `info@2chub.com` über die Web3Forms-API — kein eigenes Backend nötig.

- **Account-Inhaber:** `leon@theo-group.de`
- **Dashboard:** https://web3forms.com/ (Login mit Leons Account)
- **Access-Key:** hardcoded in `src/components/PricingRequestModal.jsx` (Konstante
  `WEB3FORMS_KEY` — laut Web3Forms-Docs ist der Key public-safe)
- **Free-Tier-Limit:** 250 Submissions / Monat. Bei Bedarf upgraden oder im
  Dashboard auf Auslastung achten.
- **Spam-Schutz:**
  - Honeypot-Field (`botcheck`) clientseitig — Bot-Submits werden silent
    gedropt und zählen nicht aufs Quota.
  - Im Web3Forms-Dashboard unter Settings → "Allowed Domains" sollten
    `2chub.com` und `www.2chub.com` als Whitelist eingetragen sein.
  - Bei aggressivem Spam: hCaptcha-Integration in Web3Forms aktivieren
    + 3 Zeilen Code im Modal nachrüsten.
- **Felder die ankommen:** `email`, `paket` (Name), `preis`, `nachricht`,
  Subject `PULSE Anfrage: <Plan-Name>`.

### Statuspage
Footer-Status-Badge polled `https://2chub.statuspage.io/api/v2/status.json`
und rendert farbigen Dot + Status-Text (live, ohne eigene API-Key).
Statuspage-Admin: über den 2CHuB-statuspage.io Account verwalten.

### Service Worker
`public/sw.js` ist ein **Kill-Switch** — räumt nur den alten SW (aus der
Pre-v2-Website) bei jedem Besucher auf, dann deregistriert er sich selbst.
Sicher zu entfernen sobald keine Clients mehr vom alten SW kontrolliert sind
(typisch nach 1–2 Wochen Production-Traffic).

## Deploy

Production läuft auf einem AWS-Lightsail-Server (Frankfurt) hinter Caddy.

```bash
cd website
./deploy.sh
```

Was passiert: `npm run build` → `dist/` → `rsync` nach
`ubuntu@3.76.225.82:/var/www/2chub/` → `sudo systemctl reload caddy` →
Smoke-Test gegen `https://2chub.com/`.

**SSH-Key:** Default-Key der Lightsail-Frankfurt-Region. Im `deploy.sh` wird er
unter `${PULSE_DEPLOY_KEY:-$HOME/.ssh/lightsail-frankfurt.pem}` erwartet. Wer
deployen will, muss den Key einmal von der Lightsail-Konsole runterladen und
unter dem Pfad ablegen (oder die Env-Var setzen).

**Git-Branch-Schutz:** `main` ist protected, jede Änderung muss per PR rein
(Squash-Merge). Nach dem Merge `git pull` lokal + `./deploy.sh`.
