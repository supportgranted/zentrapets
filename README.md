# ZENTRA Pets — Landing Page

**Stack:** Next.js 15.2.4 · Tailwind CSS v4 · Framer Motion · Lucide React · TypeScript

---

## Setup

```bash
npm install
npm run dev   # localhost:3000
npm run build
```

---

## Project Structure

```
app/
  globals.css       ← ALL design tokens here (change primary color from here)
  layout.tsx        ← SEO metadata, JSON-LD structured data, OG/Twitter
  page.tsx          ← Page assembly

components/
  Navbar.tsx        ← Sticky, scroll-aware, mobile drawer
  Hero.tsx          ← Full-screen hero with Framer Motion stagger
  TrustBlock.tsx    ← 5 compliance pillars with Lucide icons
  Products.tsx      ← Grid 3×2 oils + bites
  ProductCard.tsx   ← Reusable card with hover animation
  CentralMessage.tsx
  B2B.tsx
  Transparency.tsx  ← Dark section
  Footer.tsx        ← Footer + legal disclaimer

data/
  products.json     ← Ready for Supabase migration
```

---

## Change the primary color

Open `app/globals.css` and edit:

```css
--color-primary: #7A9E7E;  /* ← just change this */
```

The rest of the palette auto-derives from it conceptually — update `--color-primary-light`, `--color-primary-dark`, and `--color-primary-subtle` if needed.

---

## Tailwind v4 notes

- No `tailwind.config.ts` needed
- Custom tokens live in `@theme {}` inside `globals.css`
- PostCSS plugin: `@tailwindcss/postcss`

---

## Supabase migration

`data/products.json` maps 1:1 to a `products` table.  
Replace the static import in `Products.tsx` with `supabase.from('products').select('*')`.

---

> These products are not intended to diagnose, treat, cure, or prevent any disease.  
> © Heliora Group LLC, USA
