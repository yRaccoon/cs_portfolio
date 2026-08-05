import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleInfo,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { asset } from '../utils/asset'

const FALLBACK_IMG = (title) =>
  `https://placehold.co/600x400/3E2723/FAEDCD?text=${encodeURIComponent(title)}`

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      className="project-card bg-white rounded-3xl overflow-hidden border border-latte/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
      data-category={project.category}
    >
      <div className="relative h-52 overflow-hidden bg-espresso">
        <img
          src={imgError ? FALLBACK_IMG(project.title) : asset(project.image)}
          alt={`${project.title} Screenshot`}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roast/80 via-transparent to-transparent opacity-60" />
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-espresso/90 text-latte text-[11px] font-bold tracking-wide backdrop-blur-sm border border-latte/30">
          {project.categoryLabel}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-roast mb-2 group-hover:text-coffee transition-colors">
            {project.title}
          </h3>
          <p className="text-roast/70 text-xs leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-cream text-roast text-[10px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-latte/15">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-coffee hover:text-latte flex items-center gap-1"
            >
              <span>Details</span>
              <FontAwesomeIcon icon={faCircleInfo} className="text-xs" />
            </a>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-roast/70 hover:text-coffee transition text-sm"
                title="View Code"
                aria-label={`View ${project.title} code on GitHub`}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-latte hover:bg-caramel text-roast text-xs font-bold transition flex items-center gap-1 shadow-sm"
                >
                  <span>Demo</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
