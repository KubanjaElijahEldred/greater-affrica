import {
  Apple,
  ChevronRight,
  Droplet,
  Gift,
  GraduationCap,
  HandHeart,
  Handshake,
  Heart,
  HeartPulse,
  Play,
  Share2,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const missionCards = [
  {
    icon: GraduationCap,
    title: 'EDUCATION',
    text: 'Providing quality education and learning resources for a better tomorrow.',
  },
  {
    icon: HeartPulse,
    title: 'HEALTHCARE',
    text: 'Improving access to healthcare services and promoting healthy communities.',
  },
  {
    icon: Apple,
    title: 'FOOD SECURITY',
    text: 'Fighting hunger by providing food support and promoting sustainable farming.',
  },
  {
    icon: Droplet,
    title: 'CLEAN WATER',
    text: 'Bringing clean and safe water to communities for a healthier life.',
  },
];

const impactStats = [
  { icon: Users, number: '10,000+', text: 'Lives Impacted' },
  { icon: GraduationCap, number: '150+', text: 'Children Educated' },
  { icon: HeartPulse, number: '25+', text: 'Health Programs' },
  { icon: Droplet, number: '40+', text: 'Water Projects' },
];

const involvementActions = [
  { icon: HandHeart, label: 'DONATE', sub: 'Every donation makes an impact.' },
  { icon: Handshake, label: 'VOLUNTEER', sub: 'Give your time and skills.' },
  { icon: Share2, label: 'SHARE', sub: 'Help us spread the word.' },
  { icon: Gift, label: 'FUNDRAISE', sub: 'Start a fundraiser in your community.' },
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-reference">
        <img className="hero-reference__image" src="/images/mockup_hero.png" alt="Smiling children in a Ugandan village" />
        <div className="hero-reference__shade" />
        <div className="container hero-reference__content">
          <div>
            <p className="eyebrow eyebrow--light">
              <Heart size={18} fill="currentColor" />
              HOPE FOR TODAY, CHANGE FOR TOMORROW
            </p>
            <h1>
              TOGETHER, WE CAN
              <span>CHANGE LIVES</span>
            </h1>
            <p className="hero-reference__copy">
              Greater Africa Organisation is dedicated to improving the lives of those in need in Uganda through various charitable causes.
            </p>
            <div className="hero-reference__actions">
              <Link className="btn btn-orange" to="/get-involved">
                DONATE NOW <Heart size={17} fill="currentColor" />
              </Link>
              <Link className="btn btn-outline-white" to="/about">
                LEARN MORE <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="brush-edge" aria-hidden="true" />
      </section>

      <section className="mission-section">
        <div className="container mission-grid">
          <div>
            <p className="eyebrow">OUR MISSION</p>
            <h2 className="heading-main">
              Building a Better Uganda <span>Together</span>
              <Heart className="heading-heart" size={40} color="var(--accent-orange)" />
            </h2>
            <p className="section-copy">
              We focus on sustainable development and community empowerment to create lasting change. From education and healthcare to food security and clean water, we are committed to a brighter future for communities in need.
            </p>
            <Link className="btn btn-green" to="/about">
              ABOUT US <ChevronRight size={18} />
            </Link>
          </div>

          <div className="mission-cards">
            {missionCards.map((item) => (
              <article className="mission-card" key={item.title}>
                <item.icon size={56} fill="currentColor" strokeWidth={1.7} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-band">
        <img src="/images/hero_banner.png" alt="" aria-hidden="true" />
        <div className="impact-band__overlay" />
        <div className="container impact-band__content">
          <p className="eyebrow">OUR IMPACT</p>
          <h2>Changing Lives Across Uganda</h2>
          <div className="impact-stats">
            {impactStats.map((stat) => (
              <article key={stat.text}>
                <stat.icon size={46} fill="currentColor" strokeWidth={1.7} />
                <strong>{stat.number}</strong>
                <span>{stat.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="involved-section">
        <div className="container involved-grid">
          <div className="video-card">
            <img src="/images/mockup_hands.png" alt="Hands stacked together in support" />
            <button className="play-button" aria-label="Play video">
              <Play size={34} fill="currentColor" />
            </button>
          </div>

          <div className="involved-content">
            <p className="eyebrow">GET INVOLVED</p>
            <h2 className="heading-main">
              Be the Change <span>They Need</span>
              <Heart className="heading-heart" size={40} color="var(--accent-orange)" />
            </h2>
            <p className="section-copy">
              Your support can make a real difference. There are many ways you can get involved and help us create a better future for communities in Uganda.
            </p>
            <div className="involvement-actions">
              {involvementActions.map((item) => (
                <article key={item.label}>
                  <span>
                    <item.icon size={28} />
                  </span>
                  <strong>{item.label}</strong>
                  <p>{item.sub}</p>
                </article>
              ))}
            </div>
            <Link className="btn btn-orange" to="/get-involved">
              GET INVOLVED <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
