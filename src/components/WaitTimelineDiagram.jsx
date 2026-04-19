import './WaitTimelineDiagram.css'

const milestones = [
  {
    when: 'Week 1–2',
    title: 'Google finds you',
    body: 'Crawler visits your homepage and follows your sitemap.',
  },
  {
    when: 'Week 2–6',
    title: 'Pages get indexed',
    body: 'Your brand name starts resolving in search instead of returning nothing.',
  },
  {
    when: 'Month 2–4',
    title: 'Early rankings appear',
    body: 'Low-competition and branded searches start showing you.',
  },
  {
    when: 'Month 4–6',
    title: 'First real traffic',
    body: 'Search Console impressions climb weeks before clicks do.',
  },
  {
    when: 'Month 6–12',
    title: 'Trust signals strengthen',
    body: 'Sitelinks become possible. Google has enough data to make judgements.',
  },
  {
    when: 'Year 1–3+',
    title: 'Compounding kicks in',
    body: 'Competitive keywords become reachable as the domain earns its stripes.',
  },
]

export default function WaitTimelineDiagram() {
  return (
    <div className="wait-timeline">
      <div className="wait-timeline__track" aria-hidden="true" />
      <ol className="wait-timeline__list">
        {milestones.map((m, i) => (
          <li key={m.when} className="wait-timeline__item">
            <div className="wait-timeline__node" aria-hidden="true">
              <span className="wait-timeline__node-num">{i + 1}</span>
            </div>
            <div className="wait-timeline__card">
              <div className="wait-timeline__when">{m.when}</div>
              <div className="wait-timeline__title">{m.title}</div>
              <p className="wait-timeline__body">{m.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
