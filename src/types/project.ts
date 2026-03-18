export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  cover: string
  githubUrl: string
  liveUrl?: string
  publishedAt: string
  featured?: boolean
}