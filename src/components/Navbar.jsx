import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faBars, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_LINKS = [
  { id: 'about', label: 'About', mobileLabel: 'About Me' },
  { id: 'skills', label: 'Skills', mobileLabel: 'Technical Skills' },
  { id: 'projects', label: 'Projects', mobileLabel: 'Featured Projects' },
  { id: 'journey', label: 'Journey', mobileLabel: 'My Journey' },
  { id: 'contact', label: 'Contact', mobileLabel: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()

  // Subtle shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass-coffee rounded-2xl px-5 py-3 flex items-center justify-between shadow-xl">
          {/* Logo */}
          <a href="#hero" onClick={closeMenu} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-latte to-coffee flex items-center justify-center text-creamlite font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              <FontAwesomeIcon icon={faMugHot} className="text-foam text-base" />
            </div>
            <span className="font-serif font-bold text-lg text-creamlite tracking-tight group-hover:text-latte transition-colors">
              Clarence Sioson
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-foam">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link px-3 py-2 rounded-lg hover:text-cream hover:bg-espresso/60 transition ${
                  activeSection === link.id ? 'active' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-latte to-caramel text-roast font-semibold text-sm shadow-lg hover:shadow-latte/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Say Hello</span>
              <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden text-cream hover:text-latte focus:outline-none p-2 rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-xl" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden mt-3 glass-coffee rounded-2xl p-5 shadow-2xl">
            <div className="flex flex-col space-y-3 font-medium text-foam">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={`mobile-link px-4 py-2.5 rounded-xl hover:bg-espresso hover:text-cream ${
                    activeSection === link.id ? 'active' : ''
                  }`}
                >
                  {link.mobileLabel}
                </a>
              ))}
              <div className="pt-3 border-t border-latte/20 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full text-center px-4 py-2.5 rounded-xl bg-latte text-roast font-bold"
                >
                  Connect Over Coffee ☕
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
