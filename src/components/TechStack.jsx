import { motion } from 'framer-motion'
import './TechStack.css'

const techs = [
  'React', 'Next.js', 'TypeScript', 'CSS', 'Shopify',
  'WooCommerce', 'WordPress', 'Vercel', 'Railway',
  'OpenAI', 'Supabase', 'Stripe',
]

export default function TechStack() {
  const doubled = [...techs, ...techs]

  return (
    <section className="techstack" id="tech-stack">
      <div className="techstack__inner">
        <motion.div
          className="techstack__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label-center">Built With The Best</h2>
        </motion.div>

        <motion.div
          className="techstack__row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {techs.map((t) => (
            <span key={t} className="techstack__item">{t}</span>
          ))}
        </motion.div>

        <div className="techstack__marquee-wrap">
          <div className="techstack__marquee">
            {doubled.map((t, i) => (
              <span key={i} className="techstack__marquee-item">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
