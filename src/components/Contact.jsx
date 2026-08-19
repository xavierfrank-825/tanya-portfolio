import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <Reveal as="section" id="contact" className="section" aria-label="Contact">
      <div className="panel contact-panel">
        <div>
          <h2 className="contact-title">Let's talk data.</h2>
          <p className="contact-sub">
            Open to Data Analyst roles in Bengaluru or remote — reach out any time.
          </p>
        </div>
        <div className="contact-actions">
          <a className="btn-primary" href={`mailto:${profile.email}`}>
            ✉ Email me
          </a>
          <a className="btn-ghost" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            in Connect on LinkedIn
          </a>
          <a className="btn-ghost" href="/Tanya_Gupta_Resume.pdf" download>
            ↓ Resume
          </a>
        </div>
      </div>

      <p className="footer-note">
        {profile.name} · {profile.location} · Built with Vite + React
      </p>
    </Reveal>
  )
}
