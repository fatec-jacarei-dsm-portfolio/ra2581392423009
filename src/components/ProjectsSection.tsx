import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionTitle } from './SectionTitle'

export function ProjectsSection() {
  const sortedProjects = [...projects].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )

  return (
    <section className="section" id="projetos">
      <div className="container">
        <SectionTitle
          overline="PROJETOS"
          title="Projetos desenvolvidos"
          description="A estrutura abaixo já está pronta para crescer. Sempre que um novo projeto for adicionado com uma data mais recente, ele aparecerá primeiro automaticamente."
        />

        <div className="projects-grid">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}