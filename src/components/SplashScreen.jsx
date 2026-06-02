const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src="/images/mockup_hero.png" alt="" aria-hidden="true" />
      <div className="splash-screen__overlay" />
      <div className="splash-screen__card" role="status" aria-live="polite">
        <img className="splash-screen__logo" src="/images/image.png" alt="Greater Africa Organisation logo" />
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
