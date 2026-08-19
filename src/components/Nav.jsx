export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-mark">
        <span className="nav-mark-badge">TG</span>
        <span>Tanya Gupta</span>
      </div>
      <nav className="nav-links">
        <a className="nav-link" href="#summary">Summary</a>
        <a className="nav-link" href="#skills">Skills</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a className="nav-link" href="#education">Education</a>
        <a className="nav-link" href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="/Tanya_Gupta_Resume.pdf" download>
        Download Resume
      </a>
    </header>
  )
}
