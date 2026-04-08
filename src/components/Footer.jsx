import "./Footer.css";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta-strip">
        <h2 className="footer__cta-headline">
          Ready to build something great?
        </h2>
        <p className="footer__cta-sub">
          Book a free 30-minute discovery call. No obligation, just a
          conversation.
        </p>
        <a href="#contact" className="footer__cta-btn">
          Book a Free Call →
        </a>
      </div>

      <div className="footer__main">
        <div>
          <div className="footer__logo">
            ONRAISTUDIO
            <span className="footer__logo-dot" aria-hidden="true" />
          </div>
          <p className="footer__tagline">
            A lean web development studio building digital products for
            businesses that want results.
          </p>
        </div>

        <div>
          <div className="footer__col-title">Navigation</div>
          <ul className="footer__links">
            {navLinks.slice(0, 3).map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer__link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className="footer__col-title"
            style={{ marginBottom: 20, opacity: 0 }}
          >
            —
          </div>
          <ul className="footer__links">
            {navLinks.slice(3).map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer__link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer__col-title">Contact</div>
          <div className="footer__contact-info">
            <span className="footer__location">🇦🇺 AU Based Studio</span>
            <a href="mailto:hello@mystudio.com.au" className="footer__email">
              hello@mystudio.com.au
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__copyright">
          © 2025 Onrai Studio. Built in Australia. All rights reserved.
        </span>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
