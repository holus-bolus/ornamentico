import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './ImageCarousel.module.css'

type Image = {
    src: string
    title: string
    description?: string
}

type ImageCarouselProps = {
    images: Image[]
    currentIndex: number
    onClose: () => void
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, currentIndex, onClose }) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(currentIndex)

    const handleChange = (index: number) => {
        setSelectedIndex(index)
    }

    return (
        <div className={styles.backdrop}>
            <div className={styles.carouselContainer}>
                <button className={styles.closeButton} onClick={onClose}>&#10006;</button>
                <Carousel
                    selectedItem={selectedIndex}
                    onChange={handleChange}
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
    )
}

export default ImageCarousel
