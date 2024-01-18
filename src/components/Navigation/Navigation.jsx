import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="custom-navbar">
      <div className="container">
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navigation-menu">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to={'/'}
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to={'https://www.villa-manja.com/'}
                target={'_blank'}
              >
                Aparthotel Villa Manja
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to={'https://ornamentico.shop/'}
                target={'_blank'}
              >
                Online Store
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to={'https://cosyhome.studio/'}
                target={'_blank'}
              >
                Interior Design
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to={'/blog'}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to={'/contacts'}
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to={'/privacy-policy'}
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
