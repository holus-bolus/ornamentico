import React from 'react';
import Gallery from '../Gallery/Gallery.jsx';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h2>Handmade jewelry workshop Ornamentico</h2>
      <h3>Aparthotel Villa Manja</h3>
      <p>Helping to realize your own design ideas</p>
      <Gallery />
      <p>
        Our cozy apartments hotel Villa Manja, located in the Triglav National
        Park, awaits you in the most beautiful region of Slovenia - Bohinj,
        located in the Julian Alps. Not far from us are two main attractions of
        Slovenia: the beautiful Lake Bled and Lake Bohinj. Each apartment is
        individually decorated and fully equipped for a comfortable stay. You
        can visit <a href={'www.villa-manja.com'}>web page</a> dedicated to
        hotel
      </p>
      <p>
        We also create unique pieces of handmade jewelry from a variety of
        materials such as wood, embroidery, and beads. Most often we use
        ornaments from different nations of the world.
      </p>
      <p>
        Custom-made jewelry is usually created in one copy. In addition to
        jewelry, we can create embroidered paintings, patchwork quilts, and
        other woven furnishings for you. Some items you can easily buy on our{' '}
        <a href={'ornamentico.shop'}>store</a>
      </p>
      <footer>
        <div className="container">
          <ul className="d-flex justify-content-between align-items-center list-unstyled">
            <li>
              <a
                href={'https://www.facebook.com/Ornamentico/'}
                target={'_blank'}
              >
                <img
                  src="../../../public/facebook-svgrepo-com.svg"
                  alt="A Facebook icon"
                  className={'footer-icon'}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ornamentico_slovenia/"
                target={'_blank'}
              >
                <img
                  src="../../../public/instagram-1-svgrepo-com.svg"
                  alt="An Instagram icon"
                  className={'footer-icon'}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@villamanja_slovenia"
                target={'_blank'}
              >
                <img
                  src="../../../public/youtube-color-svgrepo-com.svg"
                  alt="A YouTube icon"
                  className={'footer-icon'}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/Ornamenticoshop/"
                target={'_blank'}
              >
                <img
                  src="../../../public/pinterest-1-svgrepo-com.svg"
                  alt="A Pinterest icon"
                  className={'footer-icon'}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ornamenticogroup/"
                target={'_blank'}
              >
                <img
                  src="../../../public/linkedin-svgrepo-com.svg"
                  alt="A LinkedIn icon"
                  className={'footer-icon'}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <ul className="list-unstyled">
            <li className="row mb-2">
              <div className="col-12 col-md-auto">
                <span className="contacts-item">
                  Contacts: Ornamentico Group
                </span>
              </div>
              <div className="col-12 col-md-auto">
                <span className="contacts-item">www.ornamentico.com</span>
              </div>
              <div className="col-12 col-md-auto">
                <span className="contacts-item">
                  Koprivnik v Bohinju 5, 4264, Bohinjska Bistrica, Slovenia
                </span>
              </div>
              <div className="col-12 col-md-auto">
                <span className="contacts-item">
                  <a href={'mailto:hello@ornamentico.com'}>
                    hello🐶ornamentico.com
                  </a>
                </span>
              </div>
            </li>
          </ul>
          <div className="mt-3">
            <p>&copy; 2016 Ornamentico Group</p>
            <p>Koprivnik v Bohinju 5, Bohinjska Bistrica, 4264, Slovenia</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
