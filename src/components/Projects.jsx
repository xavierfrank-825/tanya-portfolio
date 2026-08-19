import { projects } from '../data/profile'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Published reports</div>
          <h2 className="section-title">Projects</h2>
        </div>
        <span className="section-note">{projects.length} builds</span>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} className="panel project-card" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="project-top">
              <h3 className="project-title">{p.title}</h3>
              <span className="project-tool">{p.tool}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="project-metrics">
              {p.metrics.map((m) => (
                <div className="project-metric" key={m.label}>
                  <div className="project-metric-value">{m.value}</div>
                  <div className="project-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="project-stack">
              {p.stack.map((s) => (
                <span className="stack-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
