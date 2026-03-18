import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionTitle } from './SectionTitle'

const INITIAL_VISIBLE_PROJECTS = 4

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)

  const sortedProjects = useMemo(() => {
    return [...projects].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
  }, [])

  const visibleProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, INITIAL_VISIBLE_PROJECTS)

  const hasHiddenProjects = sortedProjects.length > INITIAL_VISIBLE_PROJECTS

  function handleToggleProjects() {
    setShowAll((prev) => !prev)
  }

  return (
    <section className="section" id="projetos">
      <div className="container">
        <SectionTitle
          overline="PROJETOS"
          title="Projetos desenvolvidos"
          description="A estrutura abaixo já está pronta para crescer. Sempre que um novo projeto for adicionado com uma data mais recente, ele aparecerá primeiro automaticamente."
        />

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {hasHiddenProjects ? (
          <div className="projects-toggle-wrapper">
            <button
              type="button"
              className="button button-secondary projects-toggle-button"
              onClick={handleToggleProjects}
            >
              {showAll ? 'Mostrar menos' : 'Mostrar mais'}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}