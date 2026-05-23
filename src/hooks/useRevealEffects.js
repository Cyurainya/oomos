import { useEffect } from 'react'

export function useRevealEffects(routeKey) {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    revealItems.forEach((item) => observer.observe(item))

    const setHeroShift = () => {
      const shift = Math.min(window.scrollY * 0.12, 64)
      document.documentElement.style.setProperty('--hero-shift', `${shift}px`)
    }

    setHeroShift()
    window.addEventListener('scroll', setHeroShift, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', setHeroShift)
    }
  }, [routeKey])
}
