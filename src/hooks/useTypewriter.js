import { useEffect, useState } from 'react'

const DEFAULT_PHRASES = [
  'Computer Engineer.',
  'Software Developer.',
  'Python Developer.',
  'Web Developer.',
  'Problem Solver.',
]

/**
 * Typewriter effect hook — cycles through a list of phrases
 * with typing / deleting timing, mirroring the original script.
 */
export function useTypewriter(
  phrases = DEFAULT_PHRASES,
  { typeSpeed = 90, deleteSpeed = 40, pauseAtEnd = 1800, pauseBeforeNext = 400, startDelay = 500 } = {},
) {
  const [text, setText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(timer)
  }, [startDelay])

  useEffect(() => {
    if (!started) return

    let charIndex = 0
    let phraseIndex = 0
    let isDeleting = false
    let timeout

    const tick = () => {
      const current = phrases[phraseIndex % phrases.length]

      if (!isDeleting) {
        charIndex += 1
        setText(current.substring(0, charIndex))
        if (charIndex === current.length) {
          isDeleting = true
          timeout = setTimeout(tick, pauseAtEnd)
        } else {
          timeout = setTimeout(tick, typeSpeed)
        }
      } else {
        charIndex -= 1
        setText(current.substring(0, charIndex))
        if (charIndex === 0) {
          phraseIndex += 1
          isDeleting = false
          timeout = setTimeout(tick, pauseBeforeNext)
        } else {
          timeout = setTimeout(tick, deleteSpeed)
        }
      }
    }

    timeout = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timeout)
  }, [started, phrases, typeSpeed, deleteSpeed, pauseAtEnd, pauseBeforeNext])

  return text
}
