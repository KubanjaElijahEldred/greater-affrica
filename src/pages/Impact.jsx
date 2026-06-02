import { Droplet, GraduationCap, HeartPulse, TrendingUp, Users } from 'lucide-react';

const stats = [
  { icon: Users, number: '10,000+', label: 'Lives Impacted' },
  { icon: GraduationCap, number: '150+', label: 'Children Educated' },
  { icon: HeartPulse, number: '25+', label: 'Health Programs' },
  { icon: Droplet, number: '40+', label: 'Water Projects' },
];

const milestones = [
  { year: '2020', title: 'Founded in Uganda', text: 'Greater Africa Organisation began with a commitment to serve vulnerable communities.' },
  { year: '2022', title: 'Expanded community support', text: 'Food, education, and household relief efforts reached more families in need.' },
  { year: '2024', title: 'Focused on sustainable change', text: 'Programs grew around education, health, clean water, and local empowerment.' },
];

const Impact = () => {
  return (
    <div className="inner-page impact-page">
      <section className="page-hero">
        <img src="/images/hero_banner.png" alt="Ugandan community working together" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <div>
            <p className="eyebrow eyebrow--light">IMPACT</p>
            <h1>Changing lives across Uganda.</h1>
            <p>
              Our work is measured in children supported, families strengthened, communities reached, and futures made brighter.
            </p>
          </div>
        </div>
        <div className="brush-edge" aria-hidden="true" />
      </section>

      <section className="page-section impact-detail-section">
        <div className="container">
          <div className="impact-detail-grid">
            <div>
              <p className="eyebrow">BY THE NUMBERS</p>
              <h2 className="heading-main">Every act of support becomes part of a bigger story.</h2>
              <p className="section-copy">
                We combine direct relief with long-term community development so that help today can become opportunity tomorrow.
              </p>
            </div>
            <div className="stat-card-grid">
              {stats.map((stat) => (
                <article key={stat.label}>
                  <stat.icon size={36} />
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="story-panel-section">
        <div className="container story-panel">
          <img src="/images/mockup_hero.png" alt="Smiling child supported by community programs" />
          <div>
            <p className="eyebrow">COMMUNITY STORY</p>
            <h2>Support that reaches the household, the classroom, and the future.</h2>
            <p>
              When a child receives school support, a family receives food relief, or a community gains access to clean water, the result is more than a single intervention. It is a step toward confidence, safety, and possibility.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <p className="eyebrow">OUR PROGRESS</p>
          <div className="timeline-grid">
            {milestones.map((item) => (
              <article key={item.year}>
                <span>{item.year}</span>
                <TrendingUp size={28} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
