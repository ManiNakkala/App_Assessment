import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    metta: false,
    quickLinks: false,
    followUs: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="newsletter-section">
            <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
            <p className="newsletter-text">Sign up for updates from mettä muse.</p>
            <p className="newsletter-text-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">SUBSCRIBE</button>
            </form>
          </div>

          <div className="contact-section">
            <div className="contact-group">
              <h3 className="footer-heading">CONTACT US</h3>
              <p className="contact-item">+44 221 133 5360</p>
              <p className="contact-item">customercare@mettamuse.com</p>
            </div>

            <div className="currency-group">
              <h3 className="footer-heading">CURRENCY</h3>
              <div className="currency-selector">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23B22234'/%3E%3Cpath d='M0,3.5h60M0,10h60M0,16.5h60M0,23h60' stroke='%23FFF' stroke-width='2'/%3E%3Crect width='24' height='16' fill='%233C3B6E'/%3E%3C/svg%3E" alt="USD" className="flag-icon" />
                <span>USD</span>
              </div>
              <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>

          <div className="call-us-mobile">
            <h3 className="footer-heading">CALL US</h3>
            <p className="contact-item">+44 221 133 5360 • customercare@mettamuse.com</p>
          </div>

          <div className="currency-mobile">
            <h3 className="footer-heading">CURRENCY</h3>
            <div className="currency-selector">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23B22234'/%3E%3Cpath d='M0,3.5h60M0,10h60M0,16.5h60M0,23h60' stroke='%23FFF' stroke-width='2'/%3E%3Crect width='24' height='16' fill='%233C3B6E'/%3E%3C/svg%3E" alt="USD" className="flag-icon" />
              <span>USD</span>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-column">
            <button
              className="footer-column-header mobile-toggle"
              onClick={() => toggleSection('metta')}
            >
              <h4 className="footer-subtitle">mettä muse</h4>
              <svg
                className={`chevron ${expandedSections.metta ? 'chevron-up' : ''}`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="4 6 8 10 12 6"/>
              </svg>
            </button>
            <ul className={`footer-links ${expandedSections.metta ? 'expanded' : ''}`}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#artisans">Artisans</a></li>
              <li><a href="#boutiques">Boutiques</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#compliance">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <button
              className="footer-column-header mobile-toggle"
              onClick={() => toggleSection('quickLinks')}
            >
              <h4 className="footer-subtitle">QUICK LINKS</h4>
              <svg
                className={`chevron ${expandedSections.quickLinks ? 'chevron-up' : ''}`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="4 6 8 10 12 6"/>
              </svg>
            </button>
            <ul className={`footer-links ${expandedSections.quickLinks ? 'expanded' : ''}`}>
              <li><a href="#orders">Orders & Shipping</a></li>
              <li><a href="#seller">Join/Login as a Seller</a></li>
              <li><a href="#payment">Payment & Pricing</a></li>
              <li><a href="#returns">Return & Refunds</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <button
              className="footer-column-header mobile-toggle"
              onClick={() => toggleSection('followUs')}
            >
              <h4 className="footer-subtitle">FOLLOW US</h4>
              <svg
                className={`chevron ${expandedSections.followUs ? 'chevron-up' : ''}`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="4 6 8 10 12 6"/>
              </svg>
            </button>
            <div className={`social-links ${expandedSections.followUs ? 'expanded' : ''}`}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="payment-section">
          <h4 className="footer-subtitle">mettä muse ACCEPTS</h4>
          <div className="payment-icons">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%23fff'/%3E%3Ctext x='24' y='20' font-size='10' text-anchor='middle' fill='%234285F4' font-weight='bold'%3EG Pay%3C/text%3E%3C/svg%3E" alt="Google Pay" className="payment-icon" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%23fff'/%3E%3Ccircle cx='18' cy='16' r='8' fill='%23EB001B'/%3E%3Ccircle cx='30' cy='16' r='8' fill='%23F79E1B'/%3E%3C/svg%3E" alt="Mastercard" className="payment-icon" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%23fff'/%3E%3Ctext x='24' y='20' font-size='10' text-anchor='middle' fill='%23003087' font-weight='bold'%3EPayPal%3C/text%3E%3C/svg%3E" alt="PayPal" className="payment-icon" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%23006FCF'/%3E%3Ctext x='24' y='20' font-size='8' text-anchor='middle' fill='%23fff' font-weight='bold'%3EAMEX%3C/text%3E%3C/svg%3E" alt="Amex" className="payment-icon" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%23fff'/%3E%3Ctext x='24' y='20' font-size='8' text-anchor='middle' fill='%23000' font-weight='bold'%3E Pay%3C/text%3E%3C/svg%3E" alt="Apple Pay" className="payment-icon" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%235A31F4'/%3E%3Ctext x='24' y='20' font-size='8' text-anchor='middle' fill='%23fff' font-weight='bold'%3EO Pay%3C/text%3E%3C/svg%3E" alt="Shop Pay" className="payment-icon" />
          </div>
        </div>

        <div className="footer-copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
