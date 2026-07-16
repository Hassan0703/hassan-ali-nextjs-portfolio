# 🔍 SEO Implementation Guide

This document tracks the SEO state of this repo — what's already implemented, what's missing, and exactly how to fix it. Keeping this file up to date is part of what makes the repo itself rank well (recruiters and other devs search GitHub for "seo optimized nextjs portfolio," and a documented, honest audit like this signals quality).

## ✅ Already Implemented

- **Metadata API** (`src/app/layout.tsx`) — title template, description, keyword array, author link
- **Open Graph tags** — title, description, url, siteName, type, locale, image reference
- **Twitter Card** — `summary_large_image` with title/description
- **Robots directives** — full `googleBot` config with `max-image-preview: large`, `max-snippet: -1`
- **`sitemap.ts`** — dynamic sitemap covering all top-level routes + project case studies
- **`robots.ts`** — points crawlers to the sitemap, disallows `/api/`
- **Skip-to-content link** — accessibility + helps crawlers/screen readers identify main content
- **`next/font/google`** with `display: "swap"` — prevents layout shift from web fonts (good for CLS)

## ⚠️ Gaps Found in This Codebase (fix before pushing)

### 1. Missing `og-image.png`
`layout.tsx` references `/og-image.png` in the Open Graph config, but **this file does not exist in `/public`**. Right now, when your link is shared on LinkedIn, Twitter/X, or Slack, it will show a broken image or no preview at all.

**Fix:** Create a 1200×630px image (your name, title, and a clean background) and save it as `public/og-image.png`. Tools: Figma, Canva, or even a styled screenshot of your hero section.

### 2. No JSON-LD structured data
Google uses structured data to show rich results (knowledge panels, sitelinks). Currently there's no `Person` or `WebSite` schema anywhere in the codebase.

**Fix:** Add this to `src/app/layout.tsx`, inside `<head>` (or via a `<script>` tag before `</body>`):

```tsx
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hassan Ali",
  jobTitle: "Frappe/ERPNext Architect & Full-Stack Engineer",
  url: "https://hassanali.dev",
  sameAs: [
    "https://github.com/Hassan0703",
    "https://linkedin.com/in/hassan-ali-frappe-dev",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
};

// In the JSX, inside <html>/<body>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
/>
```

### 3. Per-page metadata not confirmed on all routes
`about`, `projects`, `services`, `open-source`, `contact`, and `project/[slug]` should each export their own `metadata` object (or `generateMetadata` for the dynamic route) rather than relying solely on the root layout's title template. Verify each page file exports a page-specific `title` and `description` — this is what makes each URL rank for different search intents instead of competing with your homepage.

### 4. `images: { unoptimized: true }`
Because `output: "export"` disables the Next.js Image Optimization API, all images are served unoptimized. This is a fair tradeoff for static export, but consider:
- Pre-compressing images (WebP/AVIF) before adding them to `/public`
- Using explicit `width`/`height` on all `<Image>` usages to avoid layout shift

## 📋 Pre-Launch SEO Checklist

- [ ] Add `public/og-image.png` (1200×630)
- [ ] Add JSON-LD `Person` schema
- [ ] Confirm every route exports unique `title` + `description`
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Run [Rich Results Test](https://search.google.com/test/rich-results) on the live URL
- [ ] Run Lighthouse audit and record real scores in the README badges
- [ ] Verify `hassanali.dev` domain is verified in Search Console (helps indexing speed significantly)
- [ ] Add descriptive, keyword-rich `alt` text to every project screenshot

## 🐙 GitHub-Specific "SEO" (repo discoverability)

Ranking for "Next.js portfolio" *inside GitHub's own search* depends on different signals than Google:

- **Repo name & description** — keyword match matters most (see main README header)
- **Topics/tags** — GitHub explicitly indexes these; use all 20 slots
- **README quality** — repos with images, badges, and clear docs get more stars, and stars are a ranking signal
- **Stars & forks** — the single biggest factor; ask early users/colleagues to star it once it's live
- **Recent commits** — active repos rank above stale ones — keep committing incrementally rather than one big initial push
- **A pinned repo on your GitHub profile** — increases visibility and click-through from profile visitors
