import { profile, kpis, trendSeries } from '../data/profile'
import { profilePhoto } from '../data/photo'
import ReportChart from './ReportChart'
import KpiTile from './KpiTile'

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      {/* Profile widget */}
      <div className="panel profile-widget hero-in" style={{ animationDelay: '0.05s' }}>
        <div className="panel-label">
          <span className="live-dot" aria-hidden="true" />
          Analyst profile
        </div>

        <div className="profile-heading">
          <div className="avatar-frame">
            <img src={profilePhoto} alt="Portrait of Tanya Gupta" />
          </div>
          <div>
            <h1 className="profile-name">{profile.name}</h1>
            <div className="profile-role">{profile.role}</div>
            <div className="profile-location">{profile.location}</div>
          </div>
        </div>

        <span className="status-pill">
          <span className="live-dot" aria-hidden="true" />
          {profile.status}
        </span>

        <p className="profile-summary">{profile.summary}</p>

        <div className="contact-row">
          <a className="contact-chip" href={`mailto:${profile.email}`}>
            ✉ {profile.email}
          </a>
          <a className="contact-chip" href={`tel:${profile.phone}`}>
            ☎ {profile.phone}
          </a>
          <a className="contact-chip" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            in LinkedIn
          </a>
        </div>
      </div>

      {/* Report canvas widget */}
      <div className="panel report-widget hero-in" style={{ animationDelay: '0.18s' }}>
        <div className="panel-label">
          <span className="live-dot" aria-hidden="true" />
          Report canvas — career snapshot
        </div>

        <div className="kpi-grid">
          {kpis.map((k, i) => (
            <KpiTile
              key={k.label}
              value={k.value}
              suffix={k.suffix}
              decimals={k.decimals || 0}
              label={k.label}
              delay={i * 120}
            />
          ))}
        </div>

        <div className="chart-frame">
          <div className="chart-frame-head">
            <span className="chart-title">Records analyzed across projects</span>
            <span className="chart-badge">▲ trending up</span>
          </div>
          <ReportChart data={trendSeries} />
        </div>
      </div>
    </section>
  )
}
