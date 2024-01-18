import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul className="d-flex justify-content-between align-items-center list-unstyled">
          <li>
            <a
              href={'https://www.facebook.com/Ornamentico/'}
              target={'_blank'}
              className={'custom-NavLink'}
            >
              <img
                src="/facebook-svgrepo-com.svg"
                alt="A Facebook icon"
                className={'footer-icon'}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ornamentico_slovenia/"
              target={'_blank'}
              className={'custom-NavLink'}
            >
              <img
                src="/instagram-1-svgrepo-com.svg"
                alt="An Instagram icon"
                className={'footer-icon'}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@villamanja_slovenia"
              target={'_blank'}
              className={'custom-NavLink'}
            >
              <img
                src="/youtube-color-svgrepo-com.svg"
                alt="A YouTube icon"
                className={'footer-icon'}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com/Ornamenticoshop/"
              target={'_blank'}
              className={'custom-NavLink'}
            >
              <img
                src="/pinterest-1-svgrepo-com.svg"
                alt="A Pinterest icon"
                className={'footer-icon'}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.NavLinkedin.com/company/ornamenticogroup/"
              target={'_blank'}
              className={'custom-NavLink'}
            >
              <img
                src="/linkedin-svgrepo-com.svg"
                alt="A NavLinkedIn icon"
                className={'footer-icon'}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={'contacts-container'}>
        <div className="contact-info">
          <ul>
            <li className="contacts-item">Contacts: Ornamentico Group |</li>
            <li className="contacts-item">www.ornamentico.com |</li>
            <li className="contacts-item">
              Koprivnik v Bohinju 5, 4264, Bohinjska Bistrica, Slovenia |
            </li>
            <li className="contacts-item">
              <a className="custom-NavLink" href="mailto:hello@ornamentico.com">
                hello🐶ornamentico.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2016 Ornamentico Group</p>
        <p>Koprivnik v Bohinju 5, Bohinjska Bistrica, 4264, Slovenia</p>
      </div>
    </footer>
  );
};

export default Footer;
