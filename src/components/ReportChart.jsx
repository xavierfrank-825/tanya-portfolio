import { useEffect, useRef, useState } from 'react'

/**
 * A small animated line+area chart, drawn in the style of a Power BI
 * report visual. The stroke draws itself in on mount via a
 * stroke-dashoffset transition.
 */
export default function ReportChart({ data, width = 460, height = 140, animate = true }) {
  const pathRef = useRef(null)
  const [drawn, setDrawn] = useState(false)

  const padding = 10
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2)
    const y = height - padding - ((val - min) / range) * (height - padding * 2)
    return [x, y]
  })

  const linePath = points
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(' ')

  const areaPath = `${linePath} L${points[points.length - 1][0].toFixed(1)},${height - padding} L${points[0][0].toFixed(1)},${height - padding} Z`

  useEffect(() => {
    if (!animate) {
      setDrawn(true)
      return
    }
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDrawn(true)
      return
    }
    const id = requestAnimationFrame(() => setDrawn(true))
    return () => cancelAnimationFrame(id)
  }, [animate])

  const length = pathRef.current?.getTotalLength?.() ?? 800

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} role="img" aria-label="Illustrative analysis trend chart">
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path className="chart-area" d={areaPath} style={{ opacity: drawn ? 0.5 : 0, transition: 'opacity 0.6s ease 0.4s' }} />

      <path
        ref={pathRef}
        className="chart-line"
        d={linePath}
        style={{
          strokeDasharray: length,
          strokeDashoffset: drawn ? 0 : length,
          transition: 'stroke-dashoffset 1.1s cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      />

      {points.map(([x, y], i) => (
        <circle
          key={i}
          className="chart-dot"
          cx={x}
          cy={y}
          r={i === points.length - 1 ? 4 : 2.2}
          style={{
            opacity: drawn ? 1 : 0,
            transition: `opacity 0.4s ease ${0.2 + i * 0.05}s`,
          }}
        />
      ))}
    </svg>
  )
}
