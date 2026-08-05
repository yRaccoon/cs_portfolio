import { useEffect, useState } from 'react'

/**
 * Tracks which page section is currently in the middle of the viewport.
 * Returns the active section id ('' if none) for nav-link highlighting.
 */
export function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      // Band around the middle of the viewport; sections crossing it become "active".
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}
