import { Phone } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const instagramLink = 'https://www.instagram.com/greater__africa_org?igsh=a3FpcWtvZG5xdHQ%3D&utm_source=qrdeogratius';

const teamMembers = [
  {
    name: 'Benita Kaija',
    role: 'C.E.O',
    image: '/images/benita.png',
    instagram: instagramLink,
  },
  {
    name: 'Wei Belle',
    role: 'Project Manager & Co Admin',
    image: '/images/wei.png',
    contact: '+256 778 892 356',
    instagram: instagramLink,
  },
];

const Team = () => {
  return (
    <div className="inner-page team-page">
      <section className="page-hero team-hero">
        <img src="/images/mockup_hands.png" alt="Greater Africa Organisation team" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <div>
            <p className="eyebrow eyebrow--light">MEET THE TEAM</p>
            <h1>The people behind Greater Africa Organisation.</h1>
            <p>
              Meet the leadership and project team coordinating our mission, partnerships, and community support.
            </p>
          </div>
        </div>
        <div className="brush-edge" aria-hidden="true" />
      </section>

      <section className="team-page-section">
        <div className="container">
          <div className="team-page-heading">
            <p className="eyebrow">MEET THE TEAM</p>
            <h2>Leadership with purpose, care, and action.</h2>
          </div>

          <div className="team-profile-grid">
            {teamMembers.map((member) => (
              <article className="team-profile-card" key={member.name}>
                <div className="team-profile-card__image">
                  <img src={member.image} alt={member.name} loading="eager" decoding="sync" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="team-profile-card__links">
                  {member.contact && (
                    <a href={`tel:${member.contact.replaceAll(' ', '')}`}>
                      <Phone size={18} />
                      {member.contact}
                    </a>
                  )}
                  <a href={member.instagram} target="_blank" rel="noreferrer" aria-label={`${member.name} Instagram`}>
                    <FaInstagram size={34} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
