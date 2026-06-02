import { ArrowRight, Gift, HandHeart, Handshake, Heart, Phone, Share2 } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const ways = [
  {
    icon: HandHeart,
    title: 'Donate',
    text: 'Give once or regularly to support education, meals, healthcare, and community programs.',
  },
  {
    icon: Handshake,
    title: 'Volunteer',
    text: 'Offer your time, skills, and compassion to help programs reach more people.',
  },
  {
    icon: Share2,
    title: 'Share',
    text: 'Help spread the word so more friends, partners, and supporters can join the mission.',
  },
  {
    icon: Gift,
    title: 'Fundraise',
    text: 'Start a community fundraiser for school supplies, food support, water, or health outreach.',
  },
];

const GetInvolved = () => {
  return (
    <div className="inner-page get-involved-page">
      <section className="page-hero">
        <img src="/images/mockup_hands.png" alt="Hands joined together in support" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <div>
            <p className="eyebrow eyebrow--light">GET INVOLVED</p>
            <h1>Be the change they need.</h1>
            <p>
              Your support helps us reach more children, families, and communities with practical care and long-term hope.
            </p>
          </div>
        </div>
        <div className="brush-edge" aria-hidden="true" />
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">WAYS TO HELP</p>
              <h2 className="heading-main">Every person can play a part.</h2>
            </div>
            <p className="section-copy">
              Whether you give, volunteer, fundraise, or simply share the mission, your action moves the work forward.
            </p>
          </div>

          <div className="involvement-page-grid">
            {ways.map((way) => (
              <article key={way.title}>
                <span>
                  <way.icon size={34} />
                </span>
                <h3>{way.title}</h3>
                <p>{way.text}</p>
                <a href="/contact">
                  Start now <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="donation-band">
        <div className="container donation-band__inner">
          <Heart size={46} fill="currentColor" />
          <div>
            <p className="eyebrow eyebrow--light">DONATE NOW</p>
            <h2>Help us build a better Uganda, one family at a time.</h2>
            <div className="donation-contacts">
              <a href="tel:+256771964723">
                <Phone size={18} />
                Benita Kaija: +256 771 964 723
              </a>
              <a href="tel:+256778892356">
                <Phone size={18} />
                Deogratius Wiyacungu: +256 778 892 356
              </a>
              <a href="https://www.instagram.com/greater__africa_org?igsh=a3FpcWtvZG5xdHQ%3D&utm_source=qrdeogratius" target="_blank" rel="noreferrer">
                <FaInstagram size={18} />
                @greater__africa_org
              </a>
            </div>
          </div>
          <a className="btn btn-orange" href="/contact">CONTACT US</a>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
