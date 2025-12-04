# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Patheya Technologies** corporate website - a complete redesign from static HTML to a modern Next.js application. The company is a software development and IT consultancy based in Pune, India, offering services in web development, mobile apps, cloud/DevOps, and business consultancy.

**Current Status:** Early stage - project structure is set up, but most pages and components are yet to be built.

**Key References:**
- `PRD.md` - Comprehensive Product Requirements Document with all feature specifications, design guidelines, and development phases
- `PROJECT_SUMMARY.md` - Quick overview of setup, tech stack, and next steps
- `docs/CONTENT_GUIDE.md` - Brand voice, tone, and content writing guidelines

## Commands

**Note:** This project uses **pnpm** as the package manager.

```bash
# Development
pnpm run dev             # Start dev server at http://localhost:3000
pnpm run build           # Build for production
pnpm start               # Run production build locally
pnpm run lint            # Run ESLint
pnpm run type-check      # Run TypeScript type checking

# Note: This project does not have tests configured yet
```

## Architecture

### Next.js 14+ App Router Structure

This project uses the **App Router** (not Pages Router). All routes are defined in `src/app/`:

- `src/app/layout.tsx` - Root layout with metadata, fonts, and global structure
- `src/app/page.tsx` - Homepage route
- Future routes: `src/app/about/page.tsx`, `src/app/services/[slug]/page.tsx`, etc.

### TypeScript Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/lib/*` → `./src/lib/*`
- `@/types/*` → `./src/types/*`

Use these imports throughout the codebase for cleaner import statements.

### Styling with Tailwind CSS

- Custom color palette defined in `tailwind.config.ts`:
  - `primary` (blue scale) - main brand color
  - `secondary` (purple scale) - accent color
- Custom animations: `animate-fade-in`, `animate-slide-up`, `animate-slide-down`, `animate-scale-in`
- Font variables: `font-sans` (Inter), `font-display` (for headings)
- Use the `cn()` utility from `@/lib/utils` to merge Tailwind classes

### Component Patterns

When building components:
- Use **Server Components by default** (Next.js App Router)
- Add `"use client"` directive only when needed (for interactivity, hooks, Framer Motion)
- Place reusable components in `src/components/`
- Consider component organization: `components/ui/` (primitives), `components/sections/` (page sections), `components/layout/` (header, footer)

### Type Definitions

All TypeScript interfaces are centralized in `src/types/index.ts`:
- `Service` - Service offering structure
- `Technology` - Tech stack items
- `CaseStudy` - Case study/portfolio projects
- `Stat` - Company statistics
- `ContactInfo` - Contact information

Reference these types when building features rather than creating new ones.

## Key Implementation Details

### SEO & Metadata

- Metadata is defined in `layout.tsx` and should be extended for each page
- All pages need proper meta tags, Open Graph, and Twitter Card data
- Target keywords: "software development company Pune", "mobile app development India", "cloud DevOps services"

### Accessibility Requirements

This project **must meet WCAG 2.1 Level AA standards**:
- Color contrast ratio minimum 4.5:1
- Keyboard navigation support
- Screen reader compatibility
- Semantic HTML
- Focus indicators on interactive elements
- Skip navigation links

### Performance Targets

- Lighthouse Performance: 90+
- Lighthouse SEO: 95+
- Lighthouse Accessibility: 100
- LCP < 2.5s, FCP < 1.8s, CLS < 0.1

Use Next.js `Image` component for all images, leverage SSG where possible.

### Animations

- Use **Framer Motion** for complex animations (requires `"use client"`)
- Use Tailwind's custom animations for simple effects
- Keep animations subtle and purposeful - avoid over-animation

### No Backend/Forms

**Important:** This is a static site with no backend. The contact page uses direct links (mailto:, LinkedIn) rather than forms to avoid spam and security concerns. Do not add contact forms unless explicitly requested.

## Development Phases

The PRD defines a phased approach:

1. **Phase 1 (Foundation)** - Core pages, navigation, basic content
2. **Phase 2 (Enhancement)** - Case studies, testimonials, advanced animations
3. **Phase 3 (Advanced)** - SEO optimization, analytics, optional dark mode

Refer to `PRD.md` sections 10-11 for detailed feature breakdowns and timelines.

## Content Guidelines

From `docs/CONTENT_GUIDE.md`:
- **Tone:** Professional yet approachable, confident, solution-focused
- **Voice:** Clear, jargon-minimal (or well-explained), action-oriented
- **Brand tagline:** "Build at the speed of innovation"
- Bilingual branding: "पथेय" (Hindi) appears alongside "Patheya"

## Image Optimization

- Next.js config enables AVIF and WebP formats
- Lucide Icons are optimized via `experimental.optimizePackageImports`
- All branding assets are in `public/images/`

## Commit Conventions

Follow conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Build process or tooling changes

## Important Notes

- Node.js 18.0+ and pnpm 8.0+ required (check `package.json` engines)
- This project uses **pnpm** as the package manager
- React Strict Mode is enabled
- No Git repository initialized yet (not a git repo per env info)
- Recommended deployment: Vercel for automatic builds and CDN
- Current website (for reference): https://patheya.tech
