import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import SectionTitle from '../components/SectionTitle';
import { CONTACT_INFO } from '../config/contact';

export default function ContactUs() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Get in touch with Eesa Organics. Order via WhatsApp, call us, or send an enquiry."
      />

      <section className="page-hero">
        <div className="container">
          <SectionTitle
            title="Contact Us"
            subtitle="We'd love to hear from you. Reach out for orders, enquiries, or support."
          />
        </div>
      </section>

      <section className="section contact-page">
        <div className="container contact-page__grid">
          <div className="contact-info contact-info--panel">
            <h2>Get in Touch</h2>

            <div className="contact-info__item">
              <Phone size={20} aria-hidden="true" />
              <div>
                <strong>Phone</strong>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>{CONTACT_INFO.phone}</a>
              </div>
            </div>

            <div className="contact-info__item">
              <MessageCircle size={20} aria-hidden="true" />
              <div>
                <strong>WhatsApp</strong>
                <a href={CONTACT_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer">
                  {CONTACT_INFO.whatsapp}
                </a>
              </div>
            </div>

            <div className="contact-info__item">
              <Mail size={20} aria-hidden="true" />
              <div>
                <strong>Email</strong>
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
            </div>

            <div className="contact-info__item">
              <MapPin size={20} aria-hidden="true" />
              <div>
                <strong>Address</strong>
                <p>{CONTACT_INFO.address}</p>
              </div>
            </div>

            <a
              href={CONTACT_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-map contact-map--panel">
            <div className="contact-map__header">
              <div>
                <span className="contact-map__eyebrow">Visit Us</span>
                <h2>Find Eesa Organics</h2>
              </div>
              <MapPin size={22} aria-hidden="true" />
            </div>
            <p className="contact-map__address">{CONTACT_INFO.address}</p>
            <iframe
              title="Eesa Organics location on Google Maps"
              src={CONTACT_INFO.mapEmbedUrl}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
