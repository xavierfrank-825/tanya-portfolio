import Reveal from './Reveal'

export default function Summary() {
  return (
    <Reveal as="section" id="summary" className="section" aria-label="Summary">
      <div className="panel summary-strip">
        <span>
          <strong>Field note —</strong> graduated Computer Science &amp; Engineering, now building the
          SQL-to-dashboard pipeline recruiters actually want to see: clean data, clear KPIs, faster
          decisions.
        </span>
      </div>
    </Reveal>
  )
}
