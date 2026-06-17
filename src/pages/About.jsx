import { BookOpen, Heart, Phone, ShieldCheck, Sprout, Users } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const values = [
  { icon: Heart, label: 'Compassion', text: 'We meet urgent needs with care, dignity, and practical support.' },
  { icon: Sprout, label: 'Sustainability', text: 'We invest in community-led solutions that can keep growing.' },
  { icon: ShieldCheck, label: 'Trust', text: 'We work transparently with partners, families, and volunteers.' },
];

const teamMembers = [
  {
    name: 'Benita Kaija',
    role: 'Founder',
    image: '/images/benita.png',
    contact: '+256 771 964 723',
    instagram: 'https://www.instagram.com/greater__africa_org?igsh=a3FpcWtvZG5xdHQ%3D&utm_source=qrdeogratius',
  },
  {
    name: 'Wiyacungu Deogratius',
    role: 'Project Manager & Co Admin',
    image: '/images/wei.png',
    whatsapp: '+256 778 892 356',
    instagram: 'https://www.instagram.com/greater__africa_org?igsh=a3FpcWtvZG5xdHQ%3D&utm_source=qrdeogratius',
  },
];

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <img src="/images/hero_banner.png" alt="Ugandan community working together" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <div>
            <p className="eyebrow eyebrow--light">ABOUT US</p>
            <h1>Hope. Empowerment. Transformation.</h1>
            <p>
              Greater Africa Organisation works to improve lives in Uganda through education, healthcare, food security, clean water, and community development.
            </p>
          </div>
        </div>
        <div className="brush-edge" aria-hidden="true" />
      </section>

      <section className="about-story">
        <div className="container about-story__grid">
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2 className="heading-main">
              Building a Better Uganda <span>Together</span>
            </h2>
            <p className="section-copy">
              Inspired by a life-changing event, Greater Africa Organisation was established in 2020 in Uganda. With dedicated work and local partnerships, we aim to become one of the most trusted and effective charitable foundations serving people in need.
            </p>
            <p className="section-copy">
              We work every day to support our charity recipients through causes that include feeding children, housing vulnerable families, funding education, fighting for the girl child, and reducing poverty.
            </p>
          </div>

          <div className="about-photo-stack">
            <img src="/images/mockup_hero.png" alt="Smiling child in a village" />
            <div>
              <Users size={34} />
              <strong>10,000+</strong>
              <span>Lives Impacted</span>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <p className="eyebrow">WHAT GUIDES US</p>
          <div className="values-grid">
            {values.map((value) => (
              <article key={value.label}>
                <value.icon size={42} />
                <h3>{value.label}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">MEET THE TEAM</p>
              <h2 className="heading-main">The people helping move the mission forward.</h2>
            </div>
            <p className="section-copy">
              Our team and partners coordinate community support, project planning, communication, and direct outreach.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-card__photo">
                  <img src={member.image} alt={member.name} loading="eager" decoding="sync" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="team-card__links">
                  {member.whatsapp ? (
                    <a href={`https://wa.me/${member.whatsapp.replaceAll(' ', '').replace('+', '')}`} target="_blank" rel="noreferrer">
                      <FaWhatsapp size={18} />
                      {member.whatsapp}
                    </a>
                  ) : member.contact ? (
                    <a href={`tel:${member.contact.replaceAll(' ', '')}`}>
                      <Phone size={17} />
                      {member.contact}
                    </a>
                  ) : null}
                  <a href={member.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram size={18} />
                    Instagram
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mission-band">
        <div className="container about-mission-band__inner">
          <BookOpen size={52} />
          <div>
            <p className="eyebrow eyebrow--light">OUR MISSION</p>
            <h2>To create lasting change through practical support and community empowerment.</h2>
          </div>
          <Heart size={44} fill="currentColor" />
        </div>
      </section>
    </div>
  );
};

export default About;
