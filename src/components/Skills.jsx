import { skillGroups } from '../data/profile'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Field list</div>
          <h2 className="section-title">Skills</h2>
        </div>
        <span className="section-note">{skillGroups.length} categories</span>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.field} className="panel skill-card" style={{ transitionDelay: `${i * 0.06}s` }}>
            <div className="skill-card-title">{group.title}</div>
            <div className="tag-row">
              {group.items.map((item) => (
                <span className="tag-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
