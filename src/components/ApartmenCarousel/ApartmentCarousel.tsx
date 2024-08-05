import React, { useEffect, useRef } from 'react'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
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
    const glideRef = useRef(null)

    useEffect(() => {
        const glide = new Glide(glideRef.current, {
            startAt: currentIndex,
            type: 'carousel',
            perView: 1,
            focusAt: 'center',
            gap: 0,
            autoplay: 3000
        })

        glide.mount()

        return () => {
            glide.destroy()
        }
    }, [currentIndex])

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.carouselContainer} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className="glide" ref={glideRef}>
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {images.map((image, index) => (
                                <li className={`glide__slide ${styles.imageContainer}`} key={index}>
                                    <img src={image.src} alt={`Slide ${index + 1}`} />
                                    <div className={styles.legendContainer}>
                                        <div className={styles.legend}>{image.title}</div>
                                        <div className="glide__bullets" data-glide-el="controls[nav]">
                                            {images.map((_, index) => (
                                                <button key={index} className="glide__bullet" data-glide-dir={`=${index}`}></button>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">‹</button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">›</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApartmentCarousel
