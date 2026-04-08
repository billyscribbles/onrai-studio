import { motion } from 'framer-motion'
import { Search, ShoppingBag, Bot, MapPin, RefreshCw, HeartHandshake } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: Search,
    title: 'Google-Ready Website',
    desc: 'A fast, mobile-friendly site built to rank. We handle your on-page SEO so customers find you first.',
  },
  {
    icon: ShoppingBag,
    title: 'Online Shop',
    desc: 'Sell your products online with a beautiful store, secure payments, and easy order management.',
  },
  {
    icon: Bot,
    title: 'AI Chatbot',
    desc: 'An AI assistant that answers customer questions, collects leads, and books appointments 24/7.',
  },
  {
    icon: MapPin,
    title: 'Google Business Profile',
    desc: 'Get your business on Google Maps and local search. We set up and optimise your listing for you.',
  },
  {
    icon: RefreshCw,
    title: 'Website Refresh',
    desc: 'Got an old or embarrassing site? We\'ll modernise it — faster, better looking, and mobile-friendly.',
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing Support',
    desc: 'We look after your site so you don\'t have to. Updates, security, and someone to call when things break.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label">Everything You Need Online</h2>
          <p className="section-sub">From getting found on Google to selling online — we handle your entire digital presence.</p>
        </motion.div>

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                className="service-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="service-card__icon">
                  <Icon size={28} strokeWidth={1.75} />
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
