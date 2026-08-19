import { education, certifications } from '../data/profile'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="section" aria-label="Education and certifications">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">Data model</div>
          <h2 className="section-title">Education &amp; Certifications</h2>
        </div>
      </div>

      <div className="edu-grid">
        <Reveal className="panel">
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-school">{education.school}</p>

          <div className="edu-meta-row">
            <div className="edu-meta">
              <span>Period</span>
              {education.period}
            </div>
            <div className="edu-meta">
              <span>CGPA</span>
              {education.cgpa}
            </div>
          </div>

          <div className="tag-row">
            {education.coursework.map((c) => (
              <span className="tag-chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="panel" style={{ transitionDelay: '0.08s' }}>
          <div className="panel-label" style={{ marginBottom: 12 }}>
            Certifications
          </div>
          <div className="cert-list">
            {certifications.map((c) => (
              <div className="cert-item" key={c.name}>
                <span className="cert-icon">✓</span>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
