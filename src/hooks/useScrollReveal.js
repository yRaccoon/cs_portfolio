import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a `visible` flag that flips to true the first time
 * the element scrolls into view (used for fade-ins & skill-bar fills).
 */
export function useScrollReveal(threshold = 0.3) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: show immediately if IntersectionObserver is unavailable.
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
