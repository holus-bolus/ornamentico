'use client'
import React, { useState } from 'react'
import './Apartment5.css'
import '../globals.css'
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel"

const images = [
    { src: '/images/apartment5/1st.webp', title: 'Entrance to apartment 5', description: 'Entrance to apartment 5' },
    { src: '/images/apartment5/2nd.webp', title: 'Hallway', description: 'Hallway' },
    { src: '/images/apartment5/3rd.webp', title: 'Master Bedroom', description: 'Master Bedroom' },
    { src: '/images/apartment5/4th.webp', title: 'Second Bedroom', description: 'Second Bedroom' },
    { src: '/images/apartment5/5th.webp', title: 'Living Room', description: 'Living Room' },
    { src: '/images/apartment5/6th.webp', title: 'Kitchen', description: 'Kitchen' },
    { src: '/images/apartment5/7th.webp', title: 'Dining Area', description: 'Dining Area' },
    { src: '/images/apartment5/8th.webp', title: 'Bathroom', description: 'Bathroom' },
    { src: '/images/apartment5/10th.webp', title: 'Exterior View', description: 'Exterior View' },
    { src: '/images/apartment5/11th.webp', title: 'Balcony', description: 'Balcony' },
    { src: '/images/apartment5/12th.webp', title: 'Garden', description: 'Garden' },
    { src: '/images/apartment5/13th.webp', title: 'Play Area', description: 'Play Area' },
    { src: '/images/apartment5/14th.webp', title: 'Garden', description: 'Garden' },
    { src: '/images/apartment5/15th.webp', title: 'Play Area', description: 'Play Area' },
]

const Apartment5 = () => {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openCarousel = (index:React.SetStateAction<number>) => {
        setCurrentIndex(index)
        setIsCarouselOpen(true)
    }

    const closeCarousel = () => {
        setIsCarouselOpen(false)
    }

    return (
        <section className={'apartment3'}>
            <div className={`container apartment3__container`}>
                <div className={'apartment3__textWrapper'}>
                    <h1 className={'apartment3__header'}>Apartment No. 5 <br/>
                        "Tulips and Mint"
                    </h1>
                    <p className={'apartment3__text'}>Apartment for four people with separate beds</p>
                    <p className='apartment3__family-apart'>
                        Family apartment for four persons at 57 sq.m. Apartment includes:
                    </p>
                    <ul className={'apartment3__list'}>
                        <li>Bedroom with two separate beds 90×200 cm with orthopedic mattresses</li>
                        <li>Living room with foldable sofa 160×200 cm</li>
                        <li>Fully equipped kitchen (cooking panel, oven, fridge, dish-washing machine, kettle, coffee machine, toaster, kitchenware)</li>
                        <li>Bathroom with shower cabin, heated towel dryer, and washing machine</li>
                    </ul>
                    <p className={'apartment3__desc'}>
                        In the apartment, there are as well iron, an ironing board, a fan, and other useful stuff for comfortable staying.
                    </p>
                    <p className={'apartment3__desc'}>
                        The apartment has an independent entrance from the street, it is located on the second floor, which you can reach by stairs. Free parking is available near our apartments hotel Villa Manja.
                    </p>
                    <p className={'apartment3__desc'}>
                        Free Wi-Fi is available.
                    </p>
                    <button className={'apartment3__button'}>Check availability</button>
                </div>
                <div className='images__wrapper'>
                    <div className={'apartment3__imageGrid'}>
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src.src}
                                alt={src.title}
                                className={'apartment3__image'}
                                onClick={() => openCarousel(index)}
                            />
                        ))}
                    </div>
                    <div className="responsive-iframe">
                        <iframe
                            src='https://www.youtube.com/embed/ZPieLBFKvg0'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            {isCarouselOpen && <ImageCarousel currentIndex={currentIndex} onClose={closeCarousel} images={images} />}
        </section>
    )
}

export default Apartment5
