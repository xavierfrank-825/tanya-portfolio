import { useCountUp } from '../hooks/useCountUp'

export default function KpiTile({ value, suffix = '', label, decimals = 0, delay = 0 }) {
  const animated = useCountUp(value, { decimals, duration: 1000 + delay })
  return (
    <div className="kpi-tile">
      <div className="kpi-value">
        {animated}
        {suffix}
      </div>
      <div className="kpi-label">{label}</div>
    </div>
  )
}
