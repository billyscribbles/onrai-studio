import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    q: 'Do you work with existing sites or only new builds?',
    a: 'Yes — rebuilds are one of our most common projects. We audit your existing site and modernise it without starting from zero.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects run 2–8 weeks depending on scope. We\'ll give you a clear timeline before we start.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. We offer retainer packages for ongoing updates, new features, and technical support.',
  },
  {
    q: 'Can you work with our existing developer or team?',
    a: 'Absolutely. We\'re comfortable working alongside in-house teams or other agencies.',
  },
  {
    q: 'What do you need from us to get started?',
    a: 'A brief overview of your goals, your existing site if you have one, and a budget range. We handle the rest.',
  },
  {
    q: 'Do you handle hosting and deployment?',
    a: 'Yes. We deploy to Railway, Vercel, or your preferred host and hand over full access.',
  },
  {
    q: 'Can you integrate with our existing tools like CRM and email?',
    a: 'Yes — we integrate with most major tools including HubSpot, Mailchimp, Klaviyo, and more.',
  },
  {
    q: 'What makes you different from a regular agency?',
    a: 'We\'re a lean, technical studio. No account managers or inflated fees — just senior-level work delivered directly.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="faq__item">
      <button className="faq__question" onClick={onToggle} aria-expanded={isOpen}>
        {q}
        <ChevronDown
          size={20}
          strokeWidth={2}
          className={`faq__question-icon${isOpen ? ' open' : ''}`}
        />
      </button>
      <div className={`faq__answer${isOpen ? ' open' : ''}`} role="region">
        <div className="faq__answer-inner">{a}</div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <motion.div
          className="faq__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label-center">Common Questions</h2>
        </motion.div>

        <motion.div
          className="faq__list"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
