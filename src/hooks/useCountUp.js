import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `target` once `start` becomes true.
 * Respects prefers-reduced-motion by jumping straight to the target.
 */
export function useCountUp(target, { start = true, duration = 1200, decimals = 0 } = {}) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => rafRef.current && cancelAnimationFrame(rafRef.current)
  }, [start, target, duration])

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value)
}
