import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'}>
          Main
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navigation-menu navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to={'https://www.villa-manja.com/'}
                target={'_blank'}
              >
                Aparthotel Villa Manja
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={'https://ornamentico.shop/'}
                target={'_blank'}
              >
                Online Store
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={'https://cosyhome.studio/'}
                target={'_blank'}
              >
                Interior Design
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/blog'}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/contacts'}>
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/privacy-policy'}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
