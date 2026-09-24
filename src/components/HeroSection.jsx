import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, FlaskConical, Heart } from 'lucide-react';

const heroTrustBadges = [
  { icon: Leaf, text: '100% Natural Ingredients' },
  { icon: FlaskConical, text: 'No Harmful Chemicals' },
  { icon: Heart, text: 'Safe & Effective' },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__background" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content fade-in">
          <span className="hero__label">PURE HERBAL PRODUCTS</span>
          <h1 className="hero__title">
            Natural Wellness
            <br />
            for a Better You
          </h1>
          <p className="hero__description">
            Discover the power of nature with Eesa Organics. Pure herbal products for your body,
            hair and overall well-being.
          </p>
          <Link to="/products" className="btn btn--hero">
            Shop Now
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="hero__trust-bar">
        <div className="container">
          <div className="hero__trust-grid">
            {heroTrustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="hero__trust-item">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
