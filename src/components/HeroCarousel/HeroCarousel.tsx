import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './HeroCarousel.module.css'

type Image = {
    src: string
    title: string
    description?: string
}

type HeroCarouselProps = {
    images: Image[]
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images }) => {
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const openFullscreen = (index: number) => {
        setCurrentIndex(index)
        setIsFullscreen(true)
    }

    const closeFullscreen = () => {
        setIsFullscreen(false)
    }

    return (
        <>
            <div className={styles.inlineCarousel}>
                <Carousel
                    selectedItem={currentIndex}
                    onChange={setCurrentIndex}
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                >
                    {images.map((image, index) => (
                        <div key={index} className={styles.imageContainer} onClick={() => openFullscreen(index)}>
                            <img src={image.src} alt={image.title} />
                            <div className={styles.descriptionContainer}>
                                <h2>{image.title}</h2>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {isFullscreen && (
                <div className={styles.backdrop}>
                    <div className={styles.carouselContainer}>
                        <button className={styles.closeButton} onClick={closeFullscreen}>Close</button>
                        <Carousel
                            selectedItem={currentIndex}
                            onChange={setCurrentIndex}
                            showArrows={true}
                            autoPlay={false}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                        >
                            {images.map((image, index) => (
                                <div key={index} className={styles.imageContainer}>
                                    <img src={image.src} alt={image.title} />
                                    <div className={styles.descriptionContainer}>
                                        <h2>{image.title}</h2>
                                        <p>{image.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </>
    )
}

export default HeroCarousel
