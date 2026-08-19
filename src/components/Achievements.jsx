import { achievements } from '../data/profile'
import Reveal from './Reveal'

export default function Achievements() {
  return (
    <Reveal as="section" id="achievements" className="section" aria-label="Key achievements">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Insights panel</div>
          <h2 className="section-title">Key Achievements</h2>
        </div>
      </div>

      <div className="panel achievement-list">
        {achievements.map((item) => (
          <div className="achievement-item" key={item}>
            <span className="achievement-check">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
