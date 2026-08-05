import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { skillCategories, skillBadges } from '../data/skills'
import { useScrollReveal } from '../hooks/useScrollReveal'

function SkillBar({ name, level, visible }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold text-roast mb-1">
        <span>{name}</span>
        <span className="text-coffee">{level}%</span>
      </div>
      <div className="w-full h-2.5 bg-cream rounded-full overflow-hidden">
        <div
          className="skill-fill h-full rounded-full"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function SkillCard({ category, className = '' }) {
  const [ref, visible] = useScrollReveal(0.3)

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-3xl shadow-md border border-latte/30 hover:border-latte transition duration-300 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-espresso text-cream flex items-center justify-center text-xl shadow">
          <FontAwesomeIcon icon={category.icon} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-roast">{category.title}</h3>
          <p className="text-xs text-roast/60">{category.subtitle}</p>
        </div>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} visible={visible} />
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-cream/40 border-y border-latte/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-hand text-2xl text-coffee px-4 py-1.5 rounded-full bg-white inline-block mb-3 border border-latte/30">
            Toolkit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-roast">
            Skills &amp; Ingredients
          </h2>
          <p className="text-roast/70 text-sm mt-2">
            A balanced blend of modern frameworks, robust backend logic, and hardware tinkering.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
            />
          ))}
        </div>

        {/* Skill Badges Quick List */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {skillBadges.map((badge) => (
            <span
              key={badge.label}
              className="px-3.5 py-1.5 rounded-xl bg-white border border-latte/30 text-roast text-xs font-medium shadow-sm flex items-center gap-2"
            >
              <FontAwesomeIcon icon={badge.icon} className={badge.colorClass} /> {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
