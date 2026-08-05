import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPaperPlane,
  faCircleCheck,
  faTriangleExclamation,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xldqpagz'

const CONTACT_LINKS = [
  {
    icon: faEnvelope,
    label: 'Email Me',
    value: 'sioson.rens@gmail.com',
    href: 'mailto:sioson.rens@gmail.com',
  },
  {
    icon: faLinkedinIn,
    label: 'LinkedIn',
    value: 'in/clarence-sioson',
    href: 'https://www.linkedin.com/in/clarence-sioson-558b2b1aa/',
  },
  {
    icon: faGithub,
    label: 'GitHub',
    value: 'github.com/yRaccoon',
    href: 'https://github.com/yRaccoon',
  },
]

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-creamlite border border-latte/30 focus:outline-none focus:border-coffee focus:ring-2 focus:ring-latte/20 text-sm text-roast transition'

export default function ContactSection() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [toast, setToast] = useState(null)

  // Auto-hide toast after 5s
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 5000)
    return () => clearTimeout(timer)
  }, [toast])

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        form.reset()
        setToast({
          type: 'success',
          text: "Thank you! Your message has been sent. I'll get back to you soon.",
        })
      } else {
        setToast({
          type: 'error',
          text: 'Something went wrong. Please try again or email me directly.',
        })
      }
    } catch {
      setToast({
        type: 'error',
        text: 'Something went wrong. Please try again or email me directly.',
      })
    }
    setStatus('idle')
  }

  const toastStyles =
    toast?.type === 'success'
      ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
      : 'bg-red-100 border-red-300 text-red-800'

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-hand text-2xl text-coffee px-4 py-1.5 rounded-full bg-cream inline-block mb-3 border border-latte/30">
          Get In Touch
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-roast">
          Let&apos;s Connect Over Coffee
        </h2>
        <p className="text-roast/70 text-sm mt-2">
          Whether you have an opening, a project idea, or just want to chat tech, my inbox is
          open!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-espresso text-creamlite p-8 rounded-3xl shadow-xl border border-latte/30 relative overflow-hidden">
            <h3 className="font-serif text-2xl font-bold text-cream mb-4">Reach Out Directly</h3>
            <p className="text-foam/80 text-xs leading-relaxed font-light mb-8">
              I am currently actively looking for entry-level software development opportunities
              for 2026.
            </p>

            <div className="space-y-6">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-latte/20 flex items-center justify-center text-latte group-hover:bg-latte group-hover:text-roast transition">
                    <FontAwesomeIcon icon={link.icon} className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[10px] text-caramel uppercase tracking-wider font-bold">
                      {link.label}
                    </p>
                    <p className="text-sm font-semibold text-cream group-hover:text-latte transition">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Coffee Quote Box */}
          <div className="p-6 rounded-3xl bg-cream/60 border border-latte/30 flex items-center gap-4">
            <div className="text-3xl text-coffee">☕</div>
            <p className="font-hand text-xl text-roast/80 leading-snug">
              &quot;Great conversations start with a warm coffee. Looking forward to discussing how
              I can add value to your team!&quot;
            </p>
          </div>
        </div>

        {/* Functional Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-latte/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-roast uppercase tracking-wider mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Juan Dela Cruz"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-roast uppercase tracking-wider mb-2"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. juandelacruz@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-bold text-roast uppercase tracking-wider mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold text-roast uppercase tracking-wider mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Tell me about your team or project details..."
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-coffee to-latte hover:from-espresso hover:to-coffee text-creamlite font-bold text-sm shadow-lg hover:shadow-xl active:scale-[0.99] transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin className="text-xs" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                </>
              )}
            </button>
          </form>

          {/* Toast Feedback Notification */}
          {toast && (
            <div
              className={`mt-4 p-4 rounded-xl border text-xs font-bold flex items-center gap-2 ${toastStyles}`}
              role="status"
            >
              <FontAwesomeIcon
                icon={toast.type === 'success' ? faCircleCheck : faTriangleExclamation}
                className="text-base"
              />
              <span>{toast.text}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
