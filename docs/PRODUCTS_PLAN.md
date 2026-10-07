# Products Plan — TasKram, EASIE, KitchenConnect

Plan and status for adding Patheya's own products to the website.

**Status:** Stages A and B are done, reviewed in the browser by the team and released to production (October 2026). Stage C is to do (see [Stage C](#stage-c--media-and-qa-todo)).

---

## 1. Positioning

Patheya is a **services company first, with its own products**. The products show
the quality of our work: *"We don't just build for clients, we build and run our
own products."* Every product page links back to the services behind it, so the
products also sell the services.

| Product | Category | Audience | Status | Main button |
|---|---|---|---|---|
| **TasKram**, *Sequence. Simplified.* | AI task management | CA, accounting & compliance firms | Live | Visit taskram.in ↗ |
| **EASIE**, E-Auditing & Systems Integration In Education | Accreditation & IQAC platform | Colleges, universities & IQAC teams | Live | Visit easie.co.in ↗ |
| **KitchenConnect** | Cloud kitchen platform | Cloud kitchens, tiffin services, multi-outlet food brands | **Coming soon** | Get early access / Partner with us (mailto) |

Decisions:
- **No pricing anywhere** on the Patheya site. Visitors follow links to the product websites.
- EASIE is **owned by Patheya**, built with an education domain expert who has 25+ years of experience. The expert is not named.
- KitchenConnect has a full product page labelled **Coming soon**, with mailto buttons only. **No launch date** appears anywhere.
- There are no forms (site policy). Buttons are external links or `mailto:connect@patheya.tech` with a pre-filled subject.
- The standalone concept HTML pages in `public/` (`anandini.html`, `ssp.html`, `iccc_*.html`) stay unchanged.

## 2. Pages and navigation

| Route | Purpose |
|---|---|
| `/products` | Landing page: dark hero, quick links to each product, three alternating showcases, and a closing "have a product idea?" pitch for our services |
| `/products/[slug]` | One page per product: `taskram`, `easie`, `kitchen-connect`. Statically generated, `dynamicParams = false` |

- **Header:** `Home · About · Services · Products ▾ · Portfolio · Contact`.
  - The "Clients" and "Technologies" homepage anchors were removed from the nav. Both sections are still on the homepage.
  - The desktop dropdown is built on `@radix-ui/react-navigation-menu`, which handles keyboard navigation, Esc and the ARIA attributes. It lists each product's icon, name, status and one-line description, plus "View all products".
  - On mobile, Products is an expandable section within the slide-down menu.
  - The current page is marked with `aria-current="page"`.
- **Footer:** a new Products column, with a "Coming soon" badge on KitchenConnect. "Products" is also added to the Company links.
- **Homepage:** order is Hero → Stats → Services → **Our Products** → Clients → Technologies → Testimonials → CTA.
  - Services stay before Products, so the page still reads as a services company.
  - The hero gains a quiet "Products: see the software we build and run" link.
- **Service pages:** a "Proof in production" strip shows the products built with that service.

## 3. Product page layout

The template is `src/app/products/[slug]/page.tsx`. Sections, in order:

1. **Hero:** breadcrumb, logo, status and category badges, headline and subheadline, main and secondary buttons, the audience line, and a preview image.
2. **At a glance:** four highlight figures. Only facts that can be backed up; nothing invented.
3. **The problem:** four pain points.
4. **How it works:** four numbered steps.
5. **See it in action:** a YouTube embed that loads only on click, plus a screenshot gallery once screenshots are added. Hidden if a product has neither.
6. **Features:** six cards.
7. **Who it's for:** personas.
8. **Spotlight**, which differs per product:
   - TasKram: "AI drafts. Your team decides."
   - EASIE: "Shaped by 25+ years in higher education."
   - KitchenConnect: "Be one of our first partner kitchens."
9. **Built by Patheya:** platforms, tech stack, and links to related services.
10. **CTA band** in the product's colour.
11. **More from Patheya:** the other two products.

### Previews until screenshots arrive

While `screenshots` is empty, the hero and `/products` show **illustrations of each product's main screen, drawn in code** (`ProductPreview.tsx`):
- TasKram: Kanban board
- EASIE: IQAC dashboard
- KitchenConnect: phone menu screen

They are decorative (`aria-hidden`), with a text description for screen readers. Once real screenshots are added to `screenshots`, the first one replaces the illustration in the hero, and all of them appear in the gallery. No other code changes are needed.

## 4. Data and code structure

- **Types:** `Product` and related types in `src/types/index.ts`.
- **Content:** all product copy lives in `src/lib/data/products.ts`. Helpers: `getProductBySlug`, `getProductsForService`, `getProductIcon`, `productStatusLabel`.
- **Theme:** `src/lib/productTheme.ts` sets four CSS variables per product. The `product` colour in `tailwind.config.ts` reads them, giving `bg-product`, `text-product-strong`, `bg-product-tint` and `bg-product-accent`. Defaults (Patheya primary) are in `globals.css`.
- **Colour contrast:** each product has a `brand` colour (decorative only) and a `strong` shade that meets AA (≥4.5:1 on white) for text and buttons. Two brand colours fail AA as text:

  | Product | `brand` | `strong` |
  |---|---|---|
  | TasKram | `#3F8ED9` (3.4:1) | `#1E6BB8` (5.5:1) |
  | EASIE | `#3A8B80` (4.0:1) | `#2A6C63` (6.1:1) |
  | KitchenConnect | `#3A5F3A` (7.3:1) | same as brand |

- **Components** in `src/components/products/`:
  - `ProductHero`, `ProductSections` (all the page sections)
  - `ProductCard`, `ProductShowcase`, `ProductPreview`, `DeviceFrame`
  - `YouTubeEmbed`, `StatusBadge`, `ProductLinkButton`, `SectionHeading`, `ServiceProducts`
- **Shared:** `src/components/ui/Reveal.tsx` lets server components fade in on scroll and respects reduced-motion settings. Hero sections use CSS-only animation so they don't hurt LCP.
- **Homepage section:** `src/components/sections/ProductsSection.tsx`.
- **Assets:** `public/images/products/{slug}/logo.png` and `icon.png`.
  - Trimmed and resized from the source files.
  - The EASIE icon is the book-shaped "E" cut from the full logo.
  - The KitchenConnect logo's white background was made transparent.

## 5. SEO

- Each product page gets its own title, description, keywords, canonical URL, Open Graph and Twitter tags.
- JSON-LD:
  - `SoftwareApplication` per product, with no `offers` since there's no pricing.
  - `BreadcrumbList`.
  - The Organization schema now lists the three products as `brand`s.
- **Open Graph images** are generated per product by `src/app/products/[slug]/opengraph-image.tsx` (`next/og`) at build time, from the brand colours, icon, tagline and headline.
- `metadataBase` is set in the root layout, so OG image URLs resolve to `https://patheya.tech` instead of `localhost`. This applies site-wide.
- The sitemap includes `/products` and the three product pages.

## 6. Build stages

### Stage A — Foundation ✅
Product type, data and copy; assets; `/products`; `/products/[slug]`; theme variables; status badge; illustrated previews; YouTube embed.

### Stage B — Integration ✅
Header dropdown (desktop and mobile); footer column; homepage section and hero link; service page cross-links; sitemap; JSON-LD; OG images; `metadataBase`.

### Release of A and B ✅
- Type-check, lint and production build pass; all product pages and OG images are statically generated.
- Fixes made during visual review: stale `.next` cache caused a serif fallback font (clean build fixes it); acronyms in audience text keep their case (`lowerFirst` in `src/lib/utils.ts`); service-page strip copy no longer lowercases service names; KitchenConnect hero logo size and "Mobile + Web" highlight; EASIE preview chart bars.
- Desktop, mobile menu and Products dropdown reviewed by the team in a real browser.
- Merged `feat/products` into `main` for deployment.

### Stage C — Media and QA (TODO)

- [ ] **Screenshots.** Get real screenshots for all three products. The team will capture and share them.
  - Suggested set per product:
    - **TasKram:** AI generation preview, Kanban board, dashboard.
    - **EASIE:** IQAC dashboard, mobile capture screen, a generated report.
    - **KitchenConnect:** customer menu, outlet admin "Today's menu", rider order with OTP.
  - Desktop captures at 1440×900 (2x if possible). Mobile captures in 9:19.5 portrait.
  - Save as `public/images/products/{slug}/screenshot-*.png` (or `.webp`) and add to `screenshots` in `products.ts` with good `alt` text.
- [ ] Check the hero layout with real screenshots. Consider a device frame or a stacked desktop and mobile composition.
- [ ] Playwright tests in `e2e/`:
  - [ ] The Products dropdown opens and closes with mouse and keyboard (Enter/Space, arrows, Esc), and its links go to the right pages.
  - [ ] The mobile menu's Products section expands and its links navigate.
  - [ ] All three product pages render: correct h1, status badge, button `href`s (external links use `target=_blank` and `rel=noopener`; mailto subjects are correct).
  - [ ] The YouTube player loads only after clicking play.
  - [ ] `/products/unknown` returns 404.
  - [ ] Each service page's product strip shows the right products.
- [ ] Lighthouse on `/products` and each product page. Targets: Performance 90+, Accessibility 100, SEO 95+.
- [ ] Run the axe accessibility checker on the dropdown and product pages.
- [ ] Validate the JSON-LD with Google's Rich Results Test and check OG cards with a social preview tool.
- [ ] Optional: fill the product pages with real proof (named customers, institutions, adoption numbers) as it becomes public.
- [ ] When KitchenConnect launches:
  - Set `status: 'live'` and `url`.
  - Change `primaryCta` to the product site.
  - Rewrite the spotlight section, which currently describes early access.

## 7. Updating products later

- **Copy:** edit `src/lib/data/products.ts`. Every page, card, menu, schema and OG image updates from it.
- **New product:** add an entry to `products.ts` and assets in `public/images/products/{slug}/`. For a code-drawn illustration, add one in `ProductPreview.tsx`; otherwise supply `screenshots`. The new page, nav entry, footer link, sitemap entry and OG image are created automatically.
