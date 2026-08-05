import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faLocationDot,
  faLaptopCode,
  faServer,
  faMicrochip,
  faHeart,
  faLayerGroup,
  faPenNib,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'

const QUICK_PROFILE = [
  { icon: faGraduationCap, label: 'Degree', value: 'BS Computer Engineering' },
  { icon: faLocationDot, label: 'Location', value: 'Philippines' },
  { icon: faLaptopCode, label: 'Frontend', value: 'HTML5, React, JavaScript, Tailwind CSS' },
  { icon: faServer, label: 'Backend & Data', value: 'Python, Flask, Node.js, SQL' },
  { icon: faMicrochip, label: 'Hardware & Tools', value: 'Arduino, C# / .NET, Git' },
  { icon: faHeart, label: 'Interests', value: 'Software Development' },
]

const CORE_VALUES = [
  {
    icon: faLayerGroup,
    title: 'Clean Architecture',
    text: 'Writing modular, readable, and well-documented code designed to scale.',
  },
  {
    icon: faPenNib,
    title: 'User-Centric UI',
    text: 'Crafting responsive interfaces that feel warm, modern, and effortless to navigate.',
  },
  {
    icon: faMicrochip,
    title: 'Hardware-Software Bridge',
    text: 'Merging embedded systems with desktop and web interfaces for real-world tools.',
  },
  {
    icon: faChartLine,
    title: 'Data-Driven Thinking',
    text: 'Turning raw numbers into interactive dashboards and actionable insights.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-hand text-2xl text-coffee px-4 py-1.5 rounded-full bg-foam inline-block mb-3 border border-latte/30">
          My Story
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-roast">
          Brewing a Career in Tech
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-coffee to-latte mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-hand text-3xl text-coffee">Hi there !</h3>
          <p className="text-roast/80 leading-relaxed font-light text-base">
            I&apos;m <span className="font-semibold text-coffee">Clarence Sioson</span>, a recent
            Computer Engineering graduate with a strong focus on Python development. Experienced
            in building full-stack web apps, data dashboards, computer vision tools, and desktop
            applications through personal projects.
          </p>
          <p className="text-roast/80 leading-relaxed font-light text-base">
            I recently completed my OJT internship (March 2026 &ndash; June 2026) at{' '}
            <span className="font-medium text-coffee">
              Toshiba Information Equipment (Philippines), Inc.
            </span>
            , where I built a real-time monitoring dashboard, an inventory system with interactive
            Plotly.js visualizations, and an archive system with search, date filtering, and export
            &mdash; using Python, JavaScript, Tailwind CSS, and jQuery.
          </p>
          <p className="text-roast/80 leading-relaxed font-light text-base">
            I&apos;m passionate about creating{' '}
            <span className="font-medium text-coffee">
              practical solutions that bridge software and hardware
            </span>
            , and I&apos;m now seeking entry-level job opportunities for 2026.
          </p>
          <p className="font-hand text-2xl text-coffee">&mdash; Clarence</p>
        </div>

        {/* Right Interactive Workstation / Fast Facts */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-espresso text-creamlite p-8 rounded-3xl shadow-2xl relative overflow-hidden border border-latte/30">
            {/* Background Accent Circle */}
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-coffee/30 rounded-full blur-2xl" />

            <div className="flex items-center justify-between pb-6 border-b border-latte/20 mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-caramel font-semibold">
                  Quick Profile
                </p>
                <h4 className="font-serif text-xl font-bold text-cream">At A Glance</h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-latte/20 text-latte text-xs font-mono">
                Status: Ready to Hire
              </span>
            </div>

            <ul className="space-y-4 text-sm font-light">
              {QUICK_PROFILE.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between py-2 border-b border-latte/10"
                >
                  <span className="text-foam/70 flex items-center gap-2">
                    <FontAwesomeIcon icon={item.icon} className="text-latte" /> {item.label}
                  </span>
                  <span className="font-semibold text-cream text-right">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Core Values / Philosophy */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
        {CORE_VALUES.map((value) => (
          <div
            key={value.title}
            className="p-4 rounded-2xl bg-white border border-latte/30 shadow-sm hover:shadow-md hover:border-latte transition text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-coffee mx-auto mb-3 shadow-sm">
              <FontAwesomeIcon icon={value.icon} className="text-base" />
            </div>
            <h4 className="font-bold text-roast text-sm mb-1">{value.title}</h4>
            <p className="text-xs text-roast/80 leading-relaxed">{value.text}</p>
          </div>
        ))}
      </div>

      {/* Pull Quote */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h3 className="font-hand text-3xl sm:text-4xl text-espresso leading-snug">
          &quot;Just like a great cup of coffee, clean code takes patience, precision, and the
          right blend of tools.&quot;
        </h3>
      </div>
    </section>
  )
}
