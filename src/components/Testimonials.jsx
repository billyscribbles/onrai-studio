import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    quote: "We had no website at all — just a Facebook page. They built us a proper site in two weeks and now we're getting calls from Google every week. Worth every cent.",
    name: 'Mick T.',
    role: 'Owner, MT Electrical',
    type: 'Electrician · Brisbane QLD',
    initials: 'MT',
    stars: 5,
  },
  {
    quote: "Our café was invisible online. They set up our Google Business profile and built us a site with an online menu. Foot traffic increased noticeably within the first month.",
    name: 'Jess P.',
    role: 'Co-owner, The Morning Pour Café',
    type: 'Hospitality · Melbourne VIC',
    initials: 'JP',
    stars: 5,
  },
  {
    quote: "I was sceptical about the AI chatbot but it's been incredible. It answers enquiries at 2am when I'm asleep and I wake up to booked jobs. Game changer for a one-man band.",
    name: 'Dave K.',
    role: 'Owner, Pristine Cleaning Co.',
    type: 'Trade Service · Sydney NSW',
    initials: 'DK',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label-center">Real Businesses, Real Results</h2>
          <p className="testimonials__sub">Local and small business owners across Australia.</p>
        </motion.div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="testimonial-card__stars" aria-label={`${t.stars} stars`}>
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-card__text">"{t.quote}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                  <div className="testimonial-card__type">{t.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
