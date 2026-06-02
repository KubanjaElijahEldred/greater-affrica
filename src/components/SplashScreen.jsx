import { Heart, Map } from 'lucide-react';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src="/images/mockup_hero.png" alt="" aria-hidden="true" />
      <div className="splash-screen__overlay" />
      <div className="splash-screen__card" role="status" aria-live="polite">
        <span className="splash-screen__mark" aria-hidden="true">
          <Map size={72} fill="currentColor" strokeWidth={1} />
          <Heart size={26} fill="currentColor" strokeWidth={0} />
        </span>
        <div>
          <strong>GREATER AFRICA</strong>
          <strong>ORGANISATION</strong>
          <small>Hope. Empowerment. Transformation.</small>
        </div>
        <span className="splash-screen__loader" aria-hidden="true" />
      </div>
    </div>
  );
};

export default SplashScreen;
