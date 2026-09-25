import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Youtube,
} from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import { LOGO_SRC } from '../config/brand';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

const careLinks = [
  { to: '/contact', label: 'Shipping & Delivery' },
  { to: '/contact', label: 'Returns & Refunds' },
  { to: '/contact', label: 'Privacy Policy' },
  { to: '/contact', label: 'Terms & Conditions' },
];

const socialLinks = [
  { href: CONTACT_INFO.social.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
  { href: CONTACT_INFO.social.instagram, icon: Instagram, label: 'Instagram' },
  { href: CONTACT_INFO.social.facebook, icon: Facebook, label: 'Facebook' },
  { href: CONTACT_INFO.social.youtube, icon: Youtube, label: 'YouTube' },
  { href: `mailto:${CONTACT_INFO.email}`, icon: Mail, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={LOGO_SRC} alt="Eesa Organics" className="footer__logo" />
          <p className="footer__tagline">Nature&apos;s Care for a Healthier You</p>
          <p className="footer__description">
            Pure herbal products inspired by nature and traditional wellness for everyday self-care.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            {quickLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Customer Care</h3>
          <ul className="footer__links">
            {careLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Stay Connected</h3>
          <div className="footer__social">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer__social-link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="footer__contact-item">{CONTACT_INFO.phone}</p>
          <p className="footer__contact-item">{CONTACT_INFO.email}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; 2026 Eesa Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
