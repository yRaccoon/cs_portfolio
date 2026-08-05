import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faMugHot,
  faDownload,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { useTypewriter } from '../hooks/useTypewriter'
import { asset } from '../utils/asset'

const STATS = [
  { value: '9', label: 'Projects' },
  { value: '2+', label: 'Years Coding' },
  { value: '100%', label: 'Commitment' },
  { value: '6+', label: 'Technologies' },
]

const PROFILE_IMG = asset('assets/profile/cs_picture.png')
const FALLBACK_IMG =
  'https://placehold.co/600x600/3E2723/FAEDCD?text=Clarence'
const RESUME_PATH = asset('assets/profile/cs_resume.pdf')

export default function HeroSection() {
  const typewriterText = useTypewriter()
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen latte-art-bg text-creamlite flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Abstract Organic Crema SVG Background Layers */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cremaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C49A6C" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#6F4E37" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#23120B" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="cremaGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4A373" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3E2723" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M 0,200 Q 250,50 500,250 T 1000,100 L 1000,0 L 0,0 Z" fill="url(#cremaGrad1)" />
          <path d="M 0,600 C 300,400 400,900 1000,700 L 1000,1000 L 0,1000 Z" fill="url(#cremaGrad2)" />
          <path
            d="M 150,300 C 350,100 650,500 850,200 C 950,350 750,700 500,600 C 250,800 50,500 150,300 Z"
            fill="none"
            stroke="#C49A6C"
            strokeWidth="0.8"
            strokeDasharray="8,6"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Floating Crema Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 crema-blob-1 rounded-full animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 crema-blob-2 rounded-full animate-float-medium pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Text Content */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-espresso/80 border border-latte/30 text-caramel text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="ml-2">Available for Work • 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-creamlite leading-tight">
            Engineered Solutions, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-latte via-caramel to-foam bg-clip-text text-transparent">
              Freshly Brewed.
            </span>
          </h1>

          {/* Subheading / Typewriter Line */}
          <div className="text-xl sm:text-2xl text-foam font-light min-h-[3rem] flex items-center justify-center lg:justify-start">
            <span>I&apos;m a&nbsp;</span>
            <span className="font-medium text-latte">{typewriterText}</span>
            <span className="typewriter-cursor">&nbsp;</span>
          </div>

          <p className="text-foam/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
            Software developer with hands-on experience across{' '}
            <span className="text-latte font-medium">Web Development</span>,{' '}
            <span className="text-caramel font-medium">Data Analytics</span>,{' '}
            <span className="text-caramel font-medium">Computer Vision</span>, and{' '}
            <span className="text-latte font-medium">Hardware Integration</span>. I build with{' '}
            <span className="text-caramel font-medium">Python</span>,{' '}
            <span className="text-latte font-medium">JavaScript</span>,{' '}
            <span className="text-latte font-medium">React</span>,{' '}
            <span className="text-caramel font-medium">Flask</span>, and{' '}
            <span className="text-latte font-medium">Arduino</span> &mdash; creating practical
            solutions from full-stack web apps to embedded systems.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-latte to-caramel text-roast font-bold text-base shadow-xl hover:shadow-latte/20 hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Explore Projects</span>
              <FontAwesomeIcon icon={faArrowDown} className="text-sm" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-coffee hover:bg-espresso text-cream font-semibold text-base border border-latte/30 hover:border-latte hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faMugHot} className="text-latte" />
              <span>Let&apos;s Connect</span>
            </a>
            <a
              href={RESUME_PATH}
              download
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-latte/40 text-latte font-semibold text-base hover:bg-latte/10 hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>Resume</span>
            </a>
          </div>

          {/* Stats / Quick Highlights */}
          <div className="pt-8 border-t border-latte/15 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-latte">{stat.value}</p>
                <p className="text-xs text-foam/70 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Avatar / Headshot Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Outer Decorative Glowing Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-latte via-coffee to-espresso blur-xl opacity-50 animate-pulse-slow" />

            {/* Circular Frame */}
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-latte via-coffee/60 to-roast shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-espresso relative border-2 border-latte/40">
                <img
                  src={imgError ? FALLBACK_IMG : PROFILE_IMG}
                  alt="Clarence Sioson"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="text-xs text-foam tracking-widest uppercase font-medium flex flex-col items-center gap-1"
        >
          <span>Explore</span>
          <FontAwesomeIcon icon={faChevronDown} className="text-latte animate-bounce text-sm" />
        </a>
      </div>
    </section>
  )
}
