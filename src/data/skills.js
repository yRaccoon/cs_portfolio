import {
  faLayerGroup,
  faServer,
  faMicrochip,
  faFlask,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons'
import {
  faPython,
  faSquareJs,
  faReact,
  faNodeJs,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'

/**
 * Skill categories — rendered as cards with animated progress bars.
 */
export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Craft',
    subtitle: 'User Interfaces & Web Apps',
    icon: faLayerGroup,
    skills: [
      { name: 'HTML5 & CSS3 / Tailwind', level: 95 },
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'React & Vite', level: 85 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Data',
    subtitle: 'Server Logic & Analytics',
    icon: faServer,
    skills: [
      { name: 'Python & Flask', level: 90 },
      { name: 'Node.js & Express', level: 80 },
      { name: 'SQL & REST APIs', level: 82 },
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    subtitle: 'Embedded Systems & Workflow',
    icon: faMicrochip,
    skills: [
      { name: 'Arduino & IoT', level: 88 },
      { name: 'C# & .NET Desktop', level: 78 },
      { name: 'Git, VS Code & Power BI', level: 90 },
    ],
  },
]

/**
 * Skill badge quick-list.
 */
export const skillBadges = [
  { icon: faPython, label: 'Python', colorClass: 'text-amber-600' },
  { icon: faSquareJs, label: 'JavaScript', colorClass: 'text-yellow-500' },
  { icon: faReact, label: 'React', colorClass: 'text-sky-500' },
  { icon: faNodeJs, label: 'Node.js', colorClass: 'text-emerald-600' },
  { icon: faMicrochip, label: 'Arduino', colorClass: 'text-coffee' },
  { icon: faFlask, label: 'Flask', colorClass: 'text-latte' },
  { icon: faChartSimple, label: 'Power BI', colorClass: 'text-coffee' },
  { icon: faGitAlt, label: 'Git', colorClass: 'text-orange-600' },
]
