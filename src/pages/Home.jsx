import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  Shield,
  BookOpen,
  Heart,
} from 'lucide-react';
import PageMeta from '../components/PageMeta';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';

const productCategories = [
  { title: 'Medicine & Ointment', image: '/products/herbal-bath-powder.png' },
  { title: 'Beauty & Wellness', image: '/products/herbal-face-pack.png' },
  { title: 'De-addiction & Herbal', image: '/products/digestive-herbal-tea.png' },
  { title: 'Oil', image: '/products/oil-massage.png' },
  { title: 'Fragrance', image: '/products/lemongrass-hair-oil.png' },
  { title: 'Traditional', image: '/products/eesa-herbal-tea.png' },
];

const whyChooseFeatures = [
  {
    icon: Leaf,
    title: 'Herbal & Natural Ingredients',
    description: 'Carefully selected herbs and botanicals in every product.',
  },
  {
    icon: Shield,
    title: 'Safe for Daily Use',
    description: 'Formulated for gentle, everyday self-care routines.',
  },
  {
    icon: BookOpen,
    title: 'Traditional Formulas',
    description: 'Inspired by time-tested herbal knowledge and practices.',
  },
  {
    icon: Heart,
    title: 'For a Healthier Lifestyle',
    description: 'Supporting your wellness journey with natural care.',
  },
];

const wellnessArticles = [
  {
    title: 'Benefits of Herbal Tea',
    excerpt:
      'Herbal teas have been enjoyed for centuries as part of daily wellness routines. Discover how natural blends can support relaxation and hydration.',
    image: '/products/eesa-herbal-tea.png',
  },
  {
    title: 'Natural Hair Care',
    excerpt:
      'Regular oil massage with herbal oils can nourish the scalp and support healthy-looking hair as part of a natural hair care routine.',
    image: '/products/lemongrass-hair-oil.png',
  },
  {
    title: 'Traditional Herbal Ingredients',
    excerpt:
      'From tulsi to lemongrass, traditional herbs have long been valued in self-care. Learn about the ingredients in our products.',
    image: '/products/herbal-bath-powder.png',
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Discover pure herbal products from Eesa Organics. Natural wellness for body, hair and overall well-being."
      />

      <HeroSection />

      <section className="section featured-products">
        <div className="container">
          <SectionTitle
            label="OUR COLLECTION"
            title="Shop by Category"
            subtitle="Explore natural care inspired by traditional wellness."
            linkText="View All Products →"
            linkTo="/products"
          />
          <div className="category-grid">
            {productCategories.map(({ title, image }) => (
              <Link key={title} to="/products" className="category-card">
                <img src={image} alt="" loading="lazy" />
                <span className="category-card__shade" aria-hidden="true" />
                <h3>{title}</h3>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container why-choose__inner">
          <div className="why-choose__image fade-in">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
              alt="Traditional herbal ingredients and mortar pestle"
              loading="lazy"
            />
          </div>
          <div className="why-choose__content fade-in fade-in--delay">
            <SectionTitle
              label="WHY CHOOSE EESA ORGANICS"
              title="The Power of Natural Healing"
              subtitle="At Eesa Organics, we bring you the best of nature's goodness. Our products are made with carefully selected herbs and time-tested traditional methods to support your everyday self-care."
              align="left"
            />
            <div className="why-choose__features">
              {whyChooseFeatures.map(({ icon: Icon, title, description }) => (
                <div key={title} className="why-choose__feature">
                  <div className="why-choose__feature-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="promo-banner">
        <div className="container promo-banner__inner">
          <div className="promo-banner__content">
            <span className="promo-banner__label">NATURAL CARE FOR</span>
            <h2 className="promo-banner__title">Body, Hair &amp; Beyond</h2>
            <p className="promo-banner__text">
              Give your body the care it deserves with Eesa Organics.
            </p>
            <Link to="/products" className="btn btn--white btn--lg">
              Shop All Products
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
          <div className="promo-banner__images">
            <img
              src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80"
              alt="Herbal body care products"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80"
              alt="Natural hair care oils"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section wellness-content">
        <div className="container">
          <SectionTitle
            label="WELLNESS GUIDE"
            title="Natural Wellness Tips"
            subtitle="Learn more about herbal self-care and the benefits of natural ingredients."
          />
          <div className="wellness-grid">
            {wellnessArticles.map(({ title, excerpt, image }) => (
              <article key={title} className="wellness-card">
                <div className="wellness-card__image">
                  <img src={image} alt={title} loading="lazy" />
                </div>
                <div className="wellness-card__body">
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
