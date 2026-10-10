// Service types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  technologies: string[]
  slug: string
}

// Technology types
export interface Technology {
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'cloud' | 'database' | 'devops' | 'ai-tools'
  icon?: string
  proficiency?: number
}

// Team member types
export interface TeamMember {
  name: string
  role: string
  image?: string
  bio?: string
  social?: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

// Project/Case study types
export interface CaseStudy {
  id: string
  title: string
  client?: string
  description: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  image?: string
  slug: string
}

// Stats types
export interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

// Contact types
export interface ContactInfo {
  email: string
  linkedin: string
  location: string
  hours: string
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  /** Paragraphs are separated by a blank line */
  content: string
  /** Shown as stars only when the client actually gave a rating */
  rating?: number
  image?: string
  projectType?: string
  /** Another position held, shown on its own line */
  secondaryRole?: string
}

// Client types
export interface Client {
  id: string
  name: string
  logo: string
  logoDark?: string
  alt?: string
}

// Product types
export type ProductStatus = 'live' | 'coming-soon'

export interface ProductBrand {
  /** Brand colour, decorative use only (may fail AA as text) */
  brand: string
  /** AA-compliant (≥4.5:1 on white) shade for text, buttons and links */
  strong: string
  /** Secondary brand colour, decorative use only */
  accent: string
  /** Very light background tint */
  tint: string
}

export interface ProductLink {
  label: string
  href: string
  external?: boolean
}

export interface ProductItem {
  title: string
  description: string
  icon: string
}

export interface ProductScreenshot {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export interface Product {
  slug: string
  name: string
  /** Expanded name, e.g. an acronym's meaning */
  fullName?: string
  tagline: string
  category: string
  status: ProductStatus
  /** One line for nav menus and cards */
  oneLiner: string
  /** Short paragraph for cards and meta descriptions */
  summary: string
  audience: string
  hero: {
    headline: string
    subheadline: string
  }
  url?: string
  primaryCta: ProductLink
  logo: { src: string; width: number; height: number }
  icon: string
  brand: ProductBrand
  highlights: { value: string; label: string }[]
  problem: { title: string; intro: string; points: ProductItem[] }
  steps: { title: string; description: string }[]
  features: ProductItem[]
  personas: ProductItem[]
  spotlight: {
    eyebrow: string
    title: string
    description: string
    points: string[]
  }
  platforms: string[]
  technologies: string[]
  /** Slugs from services data */
  relatedServices: string[]
  video?: { youtubeId: string; title: string }
  /** Real screenshots; when empty, an illustrative preview is shown instead */
  screenshots: ProductScreenshot[]
  seo: {
    title: string
    description: string
    keywords: string[]
    applicationCategory: string
    operatingSystem: string
  }
}
