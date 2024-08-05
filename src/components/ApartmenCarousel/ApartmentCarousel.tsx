import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import styles from './ApartmentCarousel.module.css'

type Image = {
    src: string
    title: string
}

type ApartmentCarouselProps = {
    currentIndex: number
    onClose: () => void
    images: Image[]
}

const ApartmentCarousel: React.FC<ApartmentCarouselProps> = ({ currentIndex, onClose, images }) => {
    const imageGalleryItems = images.map(image => ({
        original: image.src,
        thumbnail: image.src,
        description: image.title,
    }))

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.carouselContainer} onClick={handleImageClick}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <ImageGallery
                    items={imageGalleryItems}
                    startIndex={currentIndex}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                />
            </div>
        </div>
    )
}

export default ApartmentCarousel
