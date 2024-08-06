import React from 'react'
import ImageGallery, { ReactImageGalleryItem as BaseReactImageGalleryItem } from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import styles from './ApartmentCarousel.module.css'

interface ReactImageGalleryItem extends BaseReactImageGalleryItem {
    title?: string
}

type Image = {
    src: string
    title: string
    description?: string
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
        title: image.title,
        description: image.description,
        originalClass: 'custom-slide',
        thumbnailClass: 'custom-thumbnail'
    }))

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    const renderItem = (item: ReactImageGalleryItem) => (
        <div className={styles.imageGalleryItem}>
            <img src={item.original} alt={item.title as string} />
            <div className={styles.caption}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
            </div>
        </div>
    )

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
                    renderItem={renderItem}
                />
            </div>
        </div>
    )
}

export default ApartmentCarousel
