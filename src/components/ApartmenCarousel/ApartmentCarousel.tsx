import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './ApartmentCarousel.module.css'

const images = [
    { src: '/images/apartment3/1st.webp', title: 'Image 1 Title', description: 'Description for image 1' },
    { src: '/images/apartment3/2nd.webp', title: 'Image 2 Title', description: 'Description for image 2' },
    { src: '/images/apartment3/3rd.webp', title: 'Image 3 Title', description: 'Description for image 3' },
    { src: '/images/apartment3/4th.webp', title: 'Image 4 Title', description: 'Description for image 4' },
    { src: '/images/apartment3/5th.webp', title: 'Image 5 Title', description: 'Description for image 5' },
    { src: '/images/apartment3/6th.webp', title: 'Image 6 Title', description: 'Description for image 6' },
    { src: '/images/apartment3/7th.webp', title: 'Image 7 Title', description: 'Description for image 7' },
    { src: '/images/apartment3/8th.webp', title: 'Image 8 Title', description: 'Description for image 8' },
    { src: '/images/apartment3/10th.webp', title: 'Image 10 Title', description: 'Description for image 10' },
    { src: '/images/apartment3/11th.webp', title: 'Image 11 Title', description: 'Description for image 11' },
    { src: '/images/apartment3/12th.webp', title: 'Image 12 Title', description: 'Description for image 12' },
    { src: '/images/apartment3/13th.webp', title: 'Image 13 Title', description: 'Description for image 13' },
    { src: '/images/apartment3/14th.webp', title: 'Image 14 Title', description: 'Description for image 14' },
    { src: '/images/apartment3/15th.webp', title: 'Image 15 Title', description: 'Description for image 15' },
    { src: '/images/apartment3/16th.webp', title: 'Image 16 Title', description: 'Description for image 16' },
    { src: '/images/apartment3/17th.webp', title: 'Image 17 Title', description: 'Description for image 17' },
    { src: '/images/apartment3/18th.webp', title: 'Image 18 Title', description: 'Description for image 18' },
    { src: '/images/apartment3/19th.webp', title: 'Image 19 Title', description: 'Description for image 19' },
    { src: '/images/apartment3/20th.webp', title: 'Image 20 Title', description: 'Description for image 20' },
    { src: '/images/apartment3/21st.webp', title: 'Image 21 Title', description: 'Description for image 21' },
    { src: '/images/apartment3/22nd.webp', title: 'Image 22 Title', description: 'Description for image 22' },
    { src: '/images/apartment3/23rd.webp', title: 'Image 23 Title', description: 'Description for image 23' },
    { src: '/images/apartment3/24th.webp', title: 'Image 24 Title', description: 'Description for image 24' }
]

const ApartmentCarousel = ({ currentIndex }: { currentIndex: number }) => {
    const [index, setIndex] = useState(currentIndex)

    const handleChange = (index: number) => {
        setIndex(index)
    }

    return (
        <div className={styles.carouselContainer}>
            <Carousel
                selectedItem={index}
                showArrows={true}
                autoPlay={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
                onChange={handleChange}
            >
                {images.map((image, idx) => (
                    <div key={idx} className={styles.imageContainer}>
                        <img src={image.src} alt={`Slide ${idx + 1}`} />
                    </div>
                ))}
            </Carousel>
            <div className={styles.descriptionContainer}>
                <h2>{images[index].title}</h2>
                <p>{images[index].description}</p>
            </div>
        </div>
    )
}

export default ApartmentCarousel
