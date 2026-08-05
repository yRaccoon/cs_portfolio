import { useMemo, useState } from 'react'
import { PROJECT_CATEGORIES, projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="font-hand text-2xl text-coffee px-4 py-1.5 rounded-full bg-cream inline-block mb-3 border border-latte/30">
          Portfolio
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-roast">
          Featured Creations
        </h2>
        <p className="text-roast/70 text-sm mt-2">
          Explore a collection of capstone projects, full-stack applications, and data-driven
          tools.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {PROJECT_CATEGORIES.map((category) => {
          const isActive = activeFilter === category.id
          return (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-xl text-xs transition ${
                isActive
                  ? 'font-bold bg-gradient-to-r from-latte to-caramel text-roast shadow-md'
                  : 'font-medium text-roast hover:bg-cream border border-latte/20'
              }`}
            >
              {category.label}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
