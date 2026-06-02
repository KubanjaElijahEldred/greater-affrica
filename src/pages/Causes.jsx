import { Apple, ArrowRight, Droplet, GraduationCap, HeartPulse, Home, ShieldCheck } from 'lucide-react';

const causes = [
  {
    icon: GraduationCap,
    title: 'Education Support',
    image: '/images/mockup_hero.png',
    text: 'School fees, scholastic materials, mentoring, and learning resources for children who need a stronger start.',
  },
  {
    icon: Apple,
    title: 'Feeding the Hungry',
    image: '/images/feeding_the_hungry.png',
    text: 'Food relief and nutrition support for children, families, and vulnerable households across local communities.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Access',
    image: '/images/mockup_hands.png',
    text: 'Community health support, wellness outreach, and practical help for families facing medical hardship.',
  },
  {
    icon: Droplet,
    title: 'Clean Water',
    image: '/images/hero_banner.png',
    text: 'Safe water projects and hygiene education that help communities stay healthier and more resilient.',
  },
  {
    icon: ShieldCheck,
    title: 'Girl Child Support',
    image: '/images/girl_child_support.png',
    text: 'Protection, education, dignity support, and encouragement for girls to keep learning and growing.',
  },
  {
    icon: Home,
    title: 'Fighting Poverty',
    image: '/images/fighting_poverty.png',
    text: 'Household support, community empowerment, and practical pathways toward stability and self-reliance.',
  },
];

const Causes = () => {
  return (
    <div className="inner-page causes-page">
      <section className="page-hero">
        <img src="/images/feeding_the_hungry.png" alt="Children supported by Greater Africa Organisation" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <div>
            <p className="eyebrow eyebrow--light">OUR CAUSES</p>
            <h1>Practical help for real community needs.</h1>
            <p>
              We focus on the causes that shape everyday life: education, food, healthcare, clean water, protection, and poverty relief.
            </p>
          </div>
        </div>
        <div className="brush-edge" aria-hidden="true" />
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">WHAT WE SUPPORT</p>
              <h2 className="heading-main">Our causes are built around dignity and lasting change.</h2>
            </div>
            <p className="section-copy">
              Every program is designed to answer an immediate need while helping families and communities build toward a stronger future.
            </p>
          </div>

          <div className="cause-grid">
            {causes.map((cause) => (
              <article className="cause-card" key={cause.title}>
                <img src={cause.image} alt="" aria-hidden="true" />
                <div>
                  <span>
                    <cause.icon size={30} />
                  </span>
                  <h3>{cause.title}</h3>
                  <p>{cause.text}</p>
                  <a href="/get-involved">
                    Support this cause <ArrowRight size={17} />
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

export default Causes;
