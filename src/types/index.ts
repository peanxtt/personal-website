export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  current: boolean
}

export interface TechStack {
  name: string
  icon: string
  description: string
}

export interface SocialLink {
  name: string
  icon: any
  url: string
  color: string
}
