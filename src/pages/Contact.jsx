import { MapPin, Phone, Send } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const contactItems = [
  { icon: MapPin, label: 'Visit us', value: 'Kampala, Uganda' },
  { icon: Phone, label: 'Main contact', value: '+256 771 964 723', href: 'tel:+256771964723' },
  { icon: Phone, label: 'Project contact', value: '+256 778 892 356', href: 'tel:+256778892356' },
  { icon: FaInstagram, label: 'Instagram', value: '@greater__africa_org', href: 'https://www.instagram.com/greater__africa_org?igsh=a3FpcWtvZG5xdHQ%3D&utm_source=qrdeogratius' },
];

const Contact = () => {
  return (
    <div className="inner-page contact-page">
      <section className="page-hero">
        <img src="/images/mockup_hands.png" alt="Community hands joined together" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <div>
            <p className="eyebrow eyebrow--light">CONTACT</p>
            <h1>Let us build something good together.</h1>
            <p>
              Reach out to donate, volunteer, partner, ask a question, or learn more about our work in Uganda.
            </p>
          </div>
        </div>
        <div className="brush-edge" aria-hidden="true" />
      </section>

      <section className="page-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">CONTACT US</p>
            <h2 className="heading-main">We would love to hear from you.</h2>
            <p className="section-copy">
              Send us a message and our team will follow up. You can also use the details below for direct contact.
            </p>

            <div className="contact-info-grid">
              {contactItems.map((item) => (
                <article key={item.label}>
                  <span>
                    <item.icon size={24} />
                  </span>
                  <div>
                    <strong>{item.label}</strong>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <form className="contact-form">
            <div>
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="How can we help?" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6" placeholder="Write your message" />
            </div>
            <button className="btn btn-orange" type="submit">
              SEND MESSAGE <Send size={17} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
