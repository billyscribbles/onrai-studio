import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          STUDIONAME
          <span className="navbar__logo-dot" aria-hidden="true" />
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
          <a href="#contact">
            <button className="navbar__cta">Get a Quote</button>
          </a>
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`navbar__mobile${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          <button className="navbar__mobile-cta">Get a Quote</button>
        </a>
      </nav>
    </header>
  )
}
