import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Causes', path: '/causes' },
  { name: 'Impact', path: '/impact' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

const BrandLogo = () => (
  <Link className="brand-logo" to="/">
    <img className="brand-logo__image" src="/images/image.png" alt="Greater Africa Organisation logo" />
    <span className="brand-logo__text">
      <strong>GREATER AFRICA</strong>
      <strong>ORGANISATION</strong>
      <small>Hope. Empowerment. Transformation.</small>
    </span>
  </Link>
);

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const renderLinks = (className) => (
    <nav className={className} aria-label="Main navigation">
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.name}
            to={link.path}
            className={isActive ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandLogo />
        {renderLinks('site-nav')}
        <button className="btn btn-orange donate-nav">
          <Heart size={16} fill="currentColor" />
          DONATE NOW
        </button>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-panel">
          <div className="container">
            {renderLinks('mobile-nav')}
            <button className="btn btn-orange">
              <Heart size={16} fill="currentColor" />
              DONATE NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
