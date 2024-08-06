'use client'
import React, { useState } from 'react'
import './Apartment5.css'
import '../globals.css'
import ApartmentCarousel from "@/components/ApartmenCarousel/ApartmentCarousel"

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

const Apartment5 = () => {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openCarousel = (index: React.SetStateAction<number>) => {
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
                        <li>Fully equipped kitchen (cooking panel, oven, fridge, dish-washing machine, cattle, coffee machine, toaster, kitchenware)</li>
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
                                alt={`Image ${index + 1}`}
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
            {isCarouselOpen && <ApartmentCarousel currentIndex={currentIndex} onClose={closeCarousel} images={images} />}
        </section>
    )
}

export default Apartment5
