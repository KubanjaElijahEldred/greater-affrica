import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, Search, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Causes', path: '/causes' },
  { name: 'Impact', path: '/impact' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Team', path: '/team' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

const searchItems = [
  { title: 'Home', path: '/', keywords: 'landing donate mission impact change lives' },
  { title: 'About Us', path: '/about', keywords: 'story mission values Benita Wei leadership' },
  { title: 'Our Causes', path: '/causes', keywords: 'education healthcare food security clean water poverty girl child' },
  { title: 'Impact', path: '/impact', keywords: 'lives impacted children educated health programs water projects' },
  { title: 'Get Involved', path: '/get-involved', keywords: 'donate volunteer share fundraise support contact' },
  { title: 'Team', path: '/team', keywords: 'Benita Kaija Wei Belle CEO project manager co admin' },
  { title: 'News', path: '/news', keywords: 'updates stories community articles' },
  { title: 'Contact', path: '/contact', keywords: 'phone instagram Kampala CEO project contact' },
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
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = searchTerm.trim()
    ? searchItems.filter((item) => {
        const haystack = `${item.title} ${item.keywords}`.toLowerCase();
        return haystack.includes(searchTerm.trim().toLowerCase());
      })
    : [];

  const clearSearch = () => setSearchTerm('');

  const renderSearch = (className) => (
    <div className={className}>
      <Search size={17} />
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search pages"
        aria-label="Search pages"
      />
      {filteredItems.length > 0 && (
        <div className="site-search__results">
          {filteredItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => { clearSearch(); setMenuOpen(false); }}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

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
        {renderSearch('site-search desktop-search')}
        {renderLinks('site-nav')}
        <Link className="btn btn-orange donate-nav" to="/get-involved">
          <Heart size={16} fill="currentColor" />
          DONATE NOW
        </Link>
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
            {renderSearch('site-search mobile-search')}
            {renderLinks('mobile-nav')}
            <Link className="btn btn-orange" to="/get-involved" onClick={() => setMenuOpen(false)}>
              <Heart size={16} fill="currentColor" />
              DONATE NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
