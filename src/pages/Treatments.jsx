import { ArrowRight, CalendarCheck, HeartPulse, Leaf, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import SectionTitle from '../components/SectionTitle';
import { buildWhatsAppEnquiryUrl, openWhatsApp } from '../utils/whatsapp';

const treatments = [
  {
    tamil: 'தட்டு வர்மம்',
    name: 'Thattu Varmam',
    description: 'A traditional touch-based practice that helps encourage balance and natural movement.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=85',
  },
  {
    tamil: 'பாத அழுத்த சிகிச்சை',
    name: 'Foot Pressure Therapy',
    description: 'Gentle pressure techniques for relaxed feet, refreshed energy and everyday comfort.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85',
  },
  {
    tamil: 'முகவாதம் தொடர்பான சிகிச்சை',
    name: 'Facial Nerve Support',
    description: 'Traditional supportive care focused on facial comfort and mindful recovery routines.',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=85',
  },
  {
    tamil: 'பக்கவாதத்திற்குப் பிந்தைய ஆதரவு சிகிச்சை',
    name: 'Post-Stroke Support',
    description: 'A gentle, complementary wellness approach to support rehabilitation alongside medical care.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85',
  },
  {
    tamil: 'முதுகுவலி',
    name: 'Back Pain Care',
    description: 'Natural, hands-on care designed to encourage ease and comfort in the back and body.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=85',
  },
  {
    tamil: 'இடுப்புவலி',
    name: 'Hip Pain Care',
    description: 'Traditional techniques that focus on mobility, relaxation and daily physical comfort.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=85',
  },
  {
    tamil: 'கால் வலி',
    name: 'Leg Pain Care',
    description: 'Restorative support for tired or uncomfortable legs, guided by traditional wellness practices.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=85',
  },
];

function openTreatmentEnquiry(treatment) {
  const url = buildWhatsAppEnquiryUrl({
    subject: `Treatment enquiry - ${treatment.name}`,
    message: `I would like to enquire about ${treatment.name} (${treatment.tamil}). Please share available timings and details.`,
  });
  openWhatsApp(url);
}

export default function Treatments() {
  return (
    <>
      <PageMeta
        title="Natural Herbal Treatment"
        description="Explore traditional natural treatments and herbal wellness support at Eesa Organics."
      />

      <section className="treatments-hero">
        <div className="container treatments-hero__inner">
          <div className="treatments-hero__content fade-in">
            <span className="section-title__label">TRADITIONAL WELLNESS CARE</span>
            <h1>Natural Herbal Treatment</h1>
            <p className="tamil-text treatments-hero__tamil">இயற்கையின் அரவணைப்பில் பாரம்பரிய சிகிச்சை</p>
            <p>
              Thoughtful, traditional care rooted in nature, offered with patience, respect and a
              focus on your everyday wellbeing.
            </p>
            <div className="treatments-hero__actions">
              <a
                href="https://wa.me/919876543210?text=Hello%20Eesa%20Organics%2C%20I%20would%20like%20to%20book%20a%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Book a Treatment
              </a>
              <a href="#treatments" className="btn btn--outline">
                Explore Treatments
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="treatments-hero__image fade-in fade-in--delay">
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1100&q=85"
              alt="Herbal leaves and natural wellness treatment setting"
            />
            <div className="treatments-hero__badge">
              <Leaf size={18} aria-hidden="true" />
              <span>Pure &amp; Traditional</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section treatments-intro">
        <div className="container treatments-intro__inner">
          <div className="treatments-intro__mark" aria-hidden="true"><Leaf size={28} /></div>
          <div>
            <SectionTitle label="WELCOME TO EESA ORGANICS" title="Natural care, guided by tradition" />
            <div className="tamil-copy">
              <h2 className="tamil-text">ஈசா ஆர்கானிக்ஸ் &amp; இயற்கை சிகிச்சை மையம்</h2>
              <p className="tamil-text">
                ஈசா ஆர்கானிக்ஸ் &amp; இயற்கை சிகிச்சை மையத்தில் இயற்கை மற்றும் மூலிகை சார்ந்த பொருட்கள்,
                உணவுப் பொருட்கள், அழகு சாதனப் பொருட்கள் மற்றும் பாரம்பரிய மூலிகை தயாரிப்புகள்
                வழங்கப்படுகின்றன.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section treatments-list" id="treatments">
        <div className="container">
          <SectionTitle
            label="OUR SERVICES"
            title="Traditional Natural Treatments"
            subtitle="Explore supportive traditional care, provided with a calm and personal approach."
          />
          <div className="treatment-grid">
            {treatments.map((treatment) => (
              <article className="treatment-card" key={treatment.name}>
                <div className="treatment-card__image">
                  <img src={treatment.image} alt={treatment.name} loading="lazy" />
                  <span className="treatment-card__icon"><HeartPulse size={18} aria-hidden="true" /></span>
                </div>
                <div className="treatment-card__body">
                  <p className="treatment-card__tamil tamil-text">{treatment.tamil}</p>
                  <h3>{treatment.name}</h3>
                  <p>{treatment.description}</p>
                  <button type="button" className="treatment-card__link" onClick={() => openTreatmentEnquiry(treatment)}>
                    Enquire Now <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="treatments-cta">
        <div className="container treatments-cta__inner">
          <div>
            <Sparkles size={24} aria-hidden="true" />
            <h2>Begin your natural wellness journey</h2>
            <p>Speak with our team to understand the right treatment and available timings for you.</p>
          </div>
          <div className="treatments-cta__actions">
            <a
              href="https://wa.me/919876543210?text=Hello%20Eesa%20Organics%2C%20I%20would%20like%20to%20enquire%20about%20your%20treatments."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
            <Link to="/products" className="btn btn--white">
              Explore Products <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="treatments-cta__detail"><CalendarCheck size={20} aria-hidden="true" /> Personal consultations available</div>
        </div>
      </section>
    </>
  );
}