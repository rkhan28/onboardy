# Onboardy

Premium dark agency site for **Onboardy** — AI automation for service businesses. Obsidian + aged-gold palette, heavy iOS-style liquid glass, animated revenue chart, testimonial placeholders, transparent logo carousel.

## Stack

- Next.js 14 (App Router) · TypeScript
- Tailwind CSS
- Framer Motion
- Inter / Sora / Fraunces (Google Fonts)
- Lucide icons

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & deploy

```bash
npm run build
npm run start
```

Push to Git, import in Vercel. No env vars required.

## What's on the page

1. **Hero** — animated headline, aurora background, gold CTA
2. **Logo carousel** — *transparent* (no card backgrounds), floats right under the hero
3. **Live flow + stats** — glass card row showing automation flow and key numbers
4. **Features** — 6 glass cards with gold hover spotlights
5. **Growth chart** — animated SVG line + area chart showing revenue lift after Onboardy. Counts up when scrolled into view.
6. **Testimonials** — 2 placeholder cards ready for real quotes. Edit `lib/data.ts → TESTIMONIALS`.
7. **Contact** — glass form + supporting cards
8. **Footer**

## Palette

Single dark theme — no toggle.

| Token | Use |
|---|---|
| **Obsidian 950** `#08070c` | Background — near-black with a faint violet undertone |
| **Champagne 50** `#fdfaf3` | Headlines |
| **Champagne 100** `#f7efd9` | Body text |
| **Gold 400** `#caa44a` | Primary accent (buttons, highlights, italic serif) |
| **Gold gradient** `#f5ecd0 → #caa44a → #9a6f26` | CTAs, logo, avatars |
| **Violet mist** `rgba(96,64,132,0.28)` | Aurora background only — adds royal depth without coloring the UI |

Defined as both Tailwind colors (`obsidian-*`, `gold-*`, `champagne-*`) and CSS variables (`--bg`, `--gold`, `--fg-strong`, etc.) at the top of `app/globals.css`.

## Glass system

Three levels — all use real `backdrop-filter: blur() saturate()`:

- `.glass` — standard cards / nav (blur 22px, saturate 180%)
- `.glass-heavy` — hero panels, scrolled nav (blur 32px, saturate 200%)
- `.glass-shine` — adds the iOS-style specular highlight overlay (135° gradient + overlay blend mode)

All glass surfaces have an inner highlight (`inset 0 1px 0 0 rgba(...,0.14)`) plus a soft outer shadow — same recipe iPhone Control Center uses.

## File map

```
app/
  layout.tsx          Fonts + metadata
  page.tsx            Composes sections
  globals.css         CSS vars, .glass utilities, animations
components/
  Navbar.tsx          Translucent glass pill, 3 links + gold CTA
  Footer.tsx
  ui/
    Logo.tsx          Gold gradient mark + wordmark
    ClientLogos.tsx   12 fictional brand-mark SVGs
    Reveal.tsx        Scroll-triggered fade-in wrapper
  sections/
    Hero.tsx          Headline → transparent carousel → flow + stats
    Features.tsx
    GrowthChart.tsx   Animated SVG revenue chart
    Testimonials.tsx  2 placeholder slots
    Contact.tsx
lib/
  data.ts             FEATURES, STATS, TESTIMONIALS, NAV_LINKS
```

## Customize

- **Testimonials** → `lib/data.ts → TESTIMONIALS` (swap quote / name / role / business)
- **Logos** → `components/ui/ClientLogos.tsx` (they use `currentColor` so they auto-tone)
- **Features & nav** → `lib/data.ts`
- **Palette** → CSS vars in `app/globals.css` + Tailwind scales in `tailwind.config.ts`
- **Chart data** → `data` array at top of `components/sections/GrowthChart.tsx`
