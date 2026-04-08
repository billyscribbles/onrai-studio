import { motion } from 'framer-motion'
import { Bot, SearchCheck, Star, FileText } from 'lucide-react'
import './AIFeatures.css'

const features = [
  {
    icon: Bot,
    title: '24/7 AI Chatbot',
    desc: 'Answers customer questions, collects contact details, and books appointments while you\'re sleeping, eating, or on the tools.',
    tag: 'Never miss a lead',
  },
  {
    icon: SearchCheck,
    title: 'AI-Powered SEO',
    desc: 'Your site\'s pages are written and structured to rank on Google. We don\'t just build pretty sites — we build ones that get found.',
    tag: 'Get found on Google',
  },
  {
    icon: Star,
    title: 'Automated Review Replies',
    desc: 'AI drafts personalised replies to your Google reviews — keeping your profile active and showing customers you care.',
    tag: 'Build trust online',
  },
  {
    icon: FileText,
    title: 'Smart Content Writing',
    desc: 'Struggling to write about your business? We use AI to create service pages, product descriptions, and FAQs that convert visitors into customers.',
    tag: 'Words that sell',
  },
]

export default function AIFeatures() {
  return (
    <section className="ai-features section--dark" id="ai">
      <div className="ai-features__inner">
        <motion.div
          className="ai-features__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="ai-features__eyebrow">AI for Small Business</span>
          <h2 className="ai-features__title">AI That Works<br />For Your Business</h2>
          <p className="ai-features__sub">
            You don't need to understand AI. We build it in, set it up, and it just runs in the background — helping you get more customers without more effort.
          </p>
        </motion.div>

        <div className="ai-features__grid">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                className="ai-feature-card glow-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="ai-feature-card__icon">
                  <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <span className="ai-feature-card__tag">{f.tag}</span>
                <h3 className="ai-feature-card__title">{f.title}</h3>
                <p className="ai-feature-card__desc">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="ai-features__cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contact" className="ai-features__cta-btn">
            Add AI to My Business →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
