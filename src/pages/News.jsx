import { ArrowRight, CalendarDays } from 'lucide-react';

const posts = [
  {
    title: 'Community food support reaches more families',
    date: 'May 18, 2026',
    image: '/images/feeding_the_hungry.png',
    text: 'Our team continues to support vulnerable households with food relief and dignity-centered care.',
  },
  {
    title: 'Education support for children in need',
    date: 'April 26, 2026',
    image: '/images/mockup_hero.png',
    text: 'School materials and mentoring support help children stay focused, hopeful, and ready to learn.',
  },
  {
    title: 'Volunteers join hands for local outreach',
    date: 'March 30, 2026',
    image: '/images/mockup_hands.png',
    text: 'Volunteers are helping us extend compassion, practical service, and awareness across communities.',
  },
];

const News = () => {
  return (
    <div className="inner-page news-page">
      <section className="page-hero">
        <img src="/images/hero_banner.png" alt="Greater Africa Organisation community activity" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <div>
            <p className="eyebrow eyebrow--light">NEWS</p>
            <h1>Stories, updates, and community moments.</h1>
            <p>
              Follow the latest work, field updates, volunteer activity, and program stories from Greater Africa Organisation.
            </p>
          </div>
        </div>
        <div className="brush-edge" aria-hidden="true" />
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">LATEST UPDATES</p>
              <h2 className="heading-main">What is happening in our communities.</h2>
            </div>
            <p className="section-copy">
              These updates keep supporters close to the real people, programs, and progress behind the mission.
            </p>
          </div>

          <div className="news-grid">
            {posts.map((post) => (
              <article key={post.title}>
                <img src={post.image} alt="" aria-hidden="true" />
                <div>
                  <span>
                    <CalendarDays size={16} />
                    {post.date}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                  <a href="/contact">
                    Read more <ArrowRight size={17} />
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

export default News;
