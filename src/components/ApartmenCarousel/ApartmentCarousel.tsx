import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './ApartmentCarousel.module.css'

const images = [
    { src: '/images/apartment3/1st.webp', title: 'Entrance to apartment 3' },
    { src: '/images/apartment3/2nd.webp', title: 'Hallway' },
    { src: '/images/apartment3/3rd.webp', title: 'Master Bedroom' },
    { src: '/images/apartment3/4th.webp', title: 'Second Bedroom' },
    { src: '/images/apartment3/5th.webp', title: 'Living Room' },
    { src: '/images/apartment3/6th.webp', title: 'Kitchen' },
    { src: '/images/apartment3/7th.webp', title: 'Dining Area' },
    { src: '/images/apartment3/8th.webp', title: 'Bathroom' },
    { src: '/images/apartment3/10th.webp', title: 'Exterior View' },
    { src: '/images/apartment3/11th.webp', title: 'Balcony' },
    { src: '/images/apartment3/12th.webp', title: 'Garden' },
    { src: '/images/apartment3/13th.webp', title: 'Play Area' },
    { src: '/images/apartment3/14th.webp', title: 'Nearby Attractions' },
    { src: '/images/apartment3/15th.webp', title: 'Parking Area' },
    { src: '/images/apartment3/16th.webp', title: 'Master Bedroom Closeup' },
    { src: '/images/apartment3/17th.webp', title: 'Kitchen Appliances' },
    { src: '/images/apartment3/18th.webp', title: 'Dining Area Decor' },
    { src: '/images/apartment3/19th.webp', title: 'Living Room Decor' },
    { src: '/images/apartment3/20th.webp', title: 'Bathroom Amenities' },
    { src: '/images/apartment3/21st.webp', title: 'Apartment Exterior' },
    { src: '/images/apartment3/22nd.webp', title: 'Street View' },
    { src: '/images/apartment3/23rd.webp', title: 'Nearby Nature' },
    { src: '/images/apartment3/24th.webp', title: 'Local Attractions' },
]

type ApartmentCarouselProps = {
    currentIndex: number
    onClose: () => void
}

const ApartmentCarousel: React.FC<ApartmentCarouselProps> = ({ currentIndex, onClose }) => {
    const [selectedItem, setSelectedItem] = useState(currentIndex)

    const handleChange = (index: number) => {
        setSelectedItem(index)
    }

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.carouselContainer} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <Carousel
                    selectedItem={selectedItem}
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    interval={3000}
                    onChange={handleChange}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" className={`${styles.controlArrow} ${styles.controlPrev}`} onClick={onClickHandler} title={label}>
                                &lt;
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" className={`${styles.controlArrow} ${styles.controlNext}`} onClick={onClickHandler} title={label}>
                                &gt;
                            </button>
                        )
                    }
                >
                    {images.map((image, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <img src={image.src} alt={`Slide ${index + 1}`} />
                            <p className={styles.legend}>{image.title}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default ApartmentCarousel
