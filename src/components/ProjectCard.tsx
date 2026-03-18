import { motion } from 'framer-motion'
import { ArrowUpRight, CalendarDays, Github } from 'lucide-react'
import type { Project } from '../types/project'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div className="project-cover-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}${project.cover}`}
          alt={project.title}
          className="project-cover"
        />
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span className="project-date">
            <CalendarDays size={14} />
            {new Date(project.publishedAt).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: '2-digit',
            })}
          </span>

          {project.featured ? <span className="featured-badge">Destaque</span> : null}
        </div>

        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub
          </a>

          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ArrowUpRight size={16} />
              Acessar
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}