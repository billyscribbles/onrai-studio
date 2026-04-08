import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import './Pricing.css'

const plans = [
  {
    tier: 'Starter',
    desc: 'Single landing page or site rebuild',
    price: 'From $1,500',
    features: [
      'Custom design & development',
      'Mobile responsive',
      'Basic SEO setup',
      '2 rounds of revisions',
    ],
    cta: 'Get a Quote',
    featured: false,
  },
  {
    tier: 'Growth',
    desc: 'Full site + CMS + integrations',
    price: '$4,000–$10,000',
    features: [
      'Multi-page website',
      'CMS integration',
      'Analytics & tracking',
      '3rd-party integrations',
    ],
    cta: 'Get a Quote',
    featured: true,
  },
  {
    tier: 'Commerce',
    desc: 'Headless Shopify or WooCommerce frontend',
    price: '$6,000–$15,000',
    features: [
      'Headless React storefront',
      'Custom product pages',
      'Checkout optimisation',
      'Performance tuning',
    ],
    cta: 'Get a Quote',
    featured: false,
  },
  {
    tier: 'Studio',
    desc: 'MVP or custom app build',
    price: 'From $12,000',
    features: [
      'Full-stack application',
      'Auth & database',
      'API development',
      'Deployment & docs',
    ],
    cta: 'Get a Quote',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__inner">
        <motion.div
          className="pricing__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label-center">Transparent Pricing</h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '16px auto 0' }}>
            No surprises. No hidden fees. Just clear scope and honest rates.
          </p>
        </motion.div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {plan.featured && (
                <div className="pricing-card__badge">Most Popular</div>
              )}
              <div className="pricing-card__tier">{plan.tier}</div>
              <div className="pricing-card__desc">{plan.desc}</div>
              <div className="pricing-card__price">{plan.price}</div>
              <ul className="pricing-card__features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing-card__feature">
                    <Check size={15} strokeWidth={2.5} className="pricing-card__check" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <button className={`pricing-card__cta${plan.featured ? ' pricing-card__cta--filled' : ' pricing-card__cta--outline'}`}>
                  {plan.cta}
                </button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="pricing__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Prefer hourly or retainer? $150–$250/hr · Retainers from $2,000/month —{' '}
          <a href="#contact" style={{ color: 'var(--color-accent)' }}>get in touch</a>.
        </motion.p>
      </div>
    </section>
  )
}
