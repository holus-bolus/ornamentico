import React, {useState} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './ImageCarousel.module.css'

const images = [
    {
        src: '/images/1stcarousel.webp',
        title: 'Apartments hotel Villa Manja. Front view of apartments hotel Villa Manja Slovenia in winter time Slovenia, Europe.',
        description: 'Front view of apartments hotel Villa Manja Slovenia in winter time',
    },
    {
        src: '/images/2ndcarousel.webp',
        title: 'Bohinj area nature. You can enjoy with amazing views and silence',
        description: 'You can enjoy with amazing views and silence',
    },
    {
        src: '/images/3rdcarousel.webp',
        title: 'Bohinj area nature',
        description: 'Koprivnik v Bohinju is a small village located in the Julian Alps. There are several hiking paths starting almost from our house',
    },
    {
        src: '/images/4thcarousel.webp',
        title: 'Front view of apartments hotel Villa Manja Slovenia in winter time. Aparthotel Villa Manja Slovenia',
        description: 'Front view of apartments hotel Villa Manja Slovenia in winter time',
    },
    {
        src: '/images/5thcarousel.webp',
        title: 'Bohinj area nature',
        description: 'You can enjoy local nature!',
    },
    {
        src: '/images/6thcarousel.webp',
        title: 'Apartments hotel Villa Manja Slovenia',
        description: 'Apartments hotel Villa Manja in Bohinj, winter time',
    },
    {
        src: '/images/7thcarousel.webp',
        title: 'Apartments hotel Villa Manja Slovenia',
        description: 'Apartments hotel Villa Manja in Bohinj, winter time',
    },
]

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleChange = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index)
    }

    return (
        <div className={styles.carouselContainer}>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
                onChange={handleChange}
            >
                {images.map((image, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={image.src} alt={`Slide ${index + 1}`}/>
                    </div>
                ))}
            </Carousel>
            <div className={styles.descriptionContainer}>
                <h2>{images[currentIndex].title}</h2>
                <p>{images[currentIndex].description}</p>
            </div>
        </div>
    )
}

export default ImageCarousel
