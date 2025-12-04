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
  content: string
  rating: number
  image?: string
}
