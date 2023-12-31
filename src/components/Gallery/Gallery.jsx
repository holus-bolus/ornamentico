import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import image1 from '../../assets/gallery-images/1st.webp';
import image2 from '../../assets/gallery-images/2nd.webp';
import image3 from '../../assets/gallery-images/3rd.webp';

const images = [
  {
    original: image1,
    description: 'Apart Hotel Villa Manja Slovenia',
  },
  {
    original: image2,
    description: 'Image 2 Description',
  },
  {
    original: image3,
    description: 'Image 2 Description',
  },
];

const GalleryComponent = () => {
  return (
    <div className="gallery-container">
      <Gallery items={images} autoPlay={true} showBullets={true} />
    </div>
  );
};

export default GalleryComponent;
