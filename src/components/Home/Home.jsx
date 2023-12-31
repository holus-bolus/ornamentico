import React from 'react';
import Gallery from '../Gallery/Gallery.jsx';

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
    </div>
  );
};

export default Home;
