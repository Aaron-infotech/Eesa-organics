import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, MessageCircle, Search, ShoppingBag, X } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import { LOGO_SRC } from '../config/brand';
import { useCart } from '../context/CartContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement-bar">
        <p>Pure • Natural • Herbal &nbsp;|&nbsp; Free Shipping on Orders Above ₹999</p>
      </div>

      <header className="navbar">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img src={LOGO_SRC} alt="Eesa Organics" className="navbar__logo-img" />
          </Link>

          <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`} aria-label="Main navigation">
            <ul className="navbar__links">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__utilities">
            <Link to="/products" className="navbar__utility-btn" aria-label="Search products">
              <Search size={20} />
            </Link>
            
            <Link to="/cart" className="navbar__utility-btn navbar__cart" aria-label={`Cart, ${totalItems} items`}>
              <ShoppingBag size={20} />
              {totalItems > 0 && <span className="navbar__cart-count">{totalItems}</span>}
            </Link>
          </div>

          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && <div className="navbar__overlay" onClick={closeMenu} aria-hidden="true" />}
      </header>
    </>
  );
}
