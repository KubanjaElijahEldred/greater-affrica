import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Causes', href: '/causes' },
  { label: 'Impact', href: '/impact' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
];
const causes = ['Education', 'Healthcare', 'Food Security', 'Clean Water', 'Community Development'];
const socials = [FaFacebookF, FaTwitter, FaInstagram, FaYoutube];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/images/image.png" alt="Greater Africa Organisation logo" />
              <strong>
                GREATER AFRICA
                <b>ORGANISATION</b>
              </strong>
            </div>
            <p>
              We are committed to improving lives and building stronger communities in Uganda through compassion, empowerment, and sustainable solutions.
            </p>
            <div className="social-links">
              {socials.map((Icon, index) => (
                <a key={index} href="#" aria-label="Social profile">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>QUICK LINKS</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>OUR CAUSES</h3>
            <ul>
              {causes.map((cause) => (
                <li key={cause}>
                  <a href="/causes">{cause}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>CONTACT US</h3>
            <ul className="contact-list">
              <li><MapPin size={16} />Kampala, Uganda</li>
              <li><Phone size={16} />+256 700 123 456</li>
              <li><Mail size={16} />info@greaterafricaorganisation.org</li>
            </ul>
            <h3>STAY UPDATED</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button className="btn btn-orange" type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Greater Africa Organisation. All Rights Reserved.</p>
          <p>
            Together, we can build a better Uganda.
            <Heart size={14} fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
