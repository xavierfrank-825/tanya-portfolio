import Nav from './components/Nav'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className="canvas-grid" aria-hidden="true" />
      <div className="canvas-glow" aria-hidden="true" />
      <div className="app">
        <Nav />
        <Hero />
        <Summary />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </>
  )
}
