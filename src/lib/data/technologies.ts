import type { Technology } from '@/types'

export const technologies: Technology[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 95 },
  { name: 'Next.js', category: 'frontend', proficiency: 90 },
  { name: 'Angular', category: 'frontend', proficiency: 85 },
  { name: 'TypeScript', category: 'frontend', proficiency: 90 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 95 },
  { name: 'Redux', category: 'frontend', proficiency: 85 },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 90 },
  { name: 'Java', category: 'backend', proficiency: 85 },
  { name: 'Spring Boot', category: 'backend', proficiency: 80 },
  { name: 'Express.js', category: 'backend', proficiency: 90 },
  { name: 'GraphQL', category: 'backend', proficiency: 80 },
  { name: 'REST APIs', category: 'backend', proficiency: 95 },

  // Mobile
  { name: 'React Native', category: 'mobile', proficiency: 90 },
  { name: 'Flutter', category: 'mobile', proficiency: 85 },
  { name: 'Ionic', category: 'mobile', proficiency: 80 },
  { name: 'Swift', category: 'mobile', proficiency: 75 },
  { name: 'Kotlin', category: 'mobile', proficiency: 75 },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', proficiency: 90 },
  { name: 'Firebase', category: 'cloud', proficiency: 85 },
  { name: 'Docker', category: 'devops', proficiency: 85 },
  { name: 'Kubernetes', category: 'devops', proficiency: 80 },
  { name: 'Jenkins', category: 'devops', proficiency: 80 },
  { name: 'GitHub Actions', category: 'devops', proficiency: 90 },
  { name: 'Terraform', category: 'devops', proficiency: 75 },

  // Database
  { name: 'PostgreSQL', category: 'database', proficiency: 90 },
  { name: 'MongoDB', category: 'database', proficiency: 90 },
  { name: 'Redis', category: 'database', proficiency: 85 },
  { name: 'MySQL', category: 'database', proficiency: 85 },

  // AI Development Tools
  { name: 'Cursor AI', category: 'ai-tools', proficiency: 95 },
  { name: 'GitHub Copilot', category: 'ai-tools', proficiency: 90 },
  { name: 'Claude Code', category: 'ai-tools', proficiency: 95 },
  // { name: 'V0 by Vercel', category: 'ai-tools', proficiency: 85 },
  { name: 'Gemini', category: 'ai-tools', proficiency: 85 },
  { name: 'ChatGPT', category: 'ai-tools', proficiency: 90 },
]

export const getTechnologiesByCategory = (category: Technology['category']) => {
  return technologies.filter(tech => tech.category === category)
}

export const categories = [
  { id: 'frontend', label: 'Frontend', icon: '🎨' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'cloud', label: 'Cloud', icon: '☁️' },
  { id: 'devops', label: 'DevOps', icon: '🔧' },
  { id: 'database', label: 'Database', icon: '💾' },
  { id: 'ai-tools', label: 'AI Development', icon: '🤖' },
] as const
