import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const FOOTER_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  {
    icon: faGithub,
    href: 'https://github.com/yRaccoon',
    label: 'GitHub',
  },
  {
    icon: faLinkedinIn,
    href: 'https://www.linkedin.com/in/clarence-sioson-558b2b1aa/',
    label: 'LinkedIn',
  },
  {
    icon: faEnvelope,
    href: 'mailto:sioson.rens@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  return (
    <footer className="bg-roast text-foam py-12 border-t border-latte/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-latte/15">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-latte flex items-center justify-center text-roast font-bold">
              <FontAwesomeIcon icon={faMugHot} className="text-xs" />
            </div>
            <span className="font-serif font-bold text-lg text-cream">Clarence Sioson</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-foam/70">
            {FOOTER_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-latte transition">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4 text-sm">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-espresso flex items-center justify-center text-foam hover:text-latte hover:bg-coffee transition"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-foam/50 gap-4">
          <p>
            &copy; 2026 Clarence Sioson. 🦝 Built with Latte <span className="text-latte">☕</span>,
            passion, and clean code.
          </p>
          <a href="#hero" className="hover:text-latte flex items-center gap-1 transition">
            <span>Back to top</span>
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </div>
    </footer>
  )
}
