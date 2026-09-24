import PageMeta from '../components/PageMeta';
import SectionTitle from '../components/SectionTitle';
import { Leaf, Heart, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Natural Philosophy',
    description:
      'We believe in the power of nature to support everyday wellness. Our products are inspired by herbs and ingredients valued in traditional self-care.',
  },
  {
    icon: Heart,
    title: 'Our Mission',
    description:
      'To make quality herbal products accessible to everyone seeking natural alternatives for body, hair, and overall well-being.',
  },
  {
    icon: Award,
    title: 'Quality & Sourcing',
    description:
      'We carefully select our ingredients and follow thoughtful preparation methods to deliver products you can trust.',
  },
  {
    icon: Users,
    title: 'Customer Care',
    description:
      'Your satisfaction matters to us. We are here to help with product enquiries, orders, and support through WhatsApp and phone.',
  },
];

export default function AboutUs() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about Eesa Organics — our story, mission, and commitment to natural herbal wellness products."
      />

      <section className="page-hero">
        <div className="container">
          <SectionTitle title="About Eesa Organics" />
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__content">
            <span className="section-title__label">OUR STORY</span>
            <h2>Rooted in Nature, Crafted with Care</h2>
            <p>
              Eesa Organics was born from a simple belief — that nature provides everything we need
              for everyday self-care. Inspired by traditional herbal knowledge and the healing power
              of plants, we create products that bring nature&apos;s goodness into your daily routine.
            </p>
            <p>
              From herbal oils and teas to body care essentials, every product reflects our commitment
              to purity, quality, and the time-honoured wisdom of herbal wellness.
            </p>
          </div>
          <div className="about-story__image">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
              alt="Herbal ingredients and natural products"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <SectionTitle
            label="WHAT WE STAND FOR"
            title="Our Values"
            subtitle="The principles that guide everything we do at Eesa Organics."
          />
          <div className="values-grid">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="value-card">
                <div className="value-card__icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mission__inner">
          <blockquote>
            &ldquo;To bring the best of nature&apos;s healing power to every home, one herbal product at a time.&rdquo;
          </blockquote>
          <cite>— Eesa Organics</cite>
        </div>
      </section>
    </>
  );
}
