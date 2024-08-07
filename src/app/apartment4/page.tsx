'use client'
import React, { useState } from 'react'
import './Apartment4.css'
import '../globals.css'
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel"

const images = [
    { src: '/images/apartment4/1st.webp', title: 'Entrance to apartment 4', description: 'Entrance to apartment 4' },
    { src: '/images/apartment4/2nd.webp', title: 'Hallway', description: 'Hallway' },
    { src: '/images/apartment4/3rd.webp', title: 'Master Bedroom', description: 'Master Bedroom' },
    { src: '/images/apartment4/4th.webp', title: 'Second Bedroom', description: 'Second Bedroom' },
    { src: '/images/apartment4/5th.webp', title: 'Living Room', description: 'Living Room' },
    { src: '/images/apartment4/6th.webp', title: 'Kitchen', description: 'Kitchen' },
    { src: '/images/apartment4/7th.webp', title: 'Dining Area', description: 'Dining Area' },
    { src: '/images/apartment4/8th.webp', title: 'Bathroom', description: 'Bathroom' },
    { src: '/images/apartment4/10th.webp', title: 'Exterior View', description: 'Exterior View' },
    { src: '/images/apartment4/11th.webp', title: 'Balcony', description: 'Balcony' },
    { src: '/images/apartment4/12th.webp', title: 'Garden', description: 'Garden' },
    { src: '/images/apartment4/13th.webp', title: 'Play Area', description: 'Play Area' },
]

const Apartment4 = () => {
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
                    <h1 className={'apartment3__header'}>Apartment No. 4 <br/>
                        "Sunny Nest"
                    </h1>
                    <p className={'apartment3__text'}>Apartment for two people</p>
                    <p className='apartment3__family-apart'>
                        Cozy apartment for a maximum of two persons of 35 sq.m. Apartment includes:
                    </p>
                    <ul className={'apartment3__list'}>
                        <li>Bedroom with one big bed 160×200 cm with orthopedic mattress</li>
                        <li>Living room</li>
                        <li>Fully equipped kitchen (cooking panel, oven, fridge, dish-washing machine, kettle, coffee machine, toaster, kitchenware)</li>
                        <li>Bathroom with shower cabin</li>
                        <li>Separate toilet</li>
                    </ul>
                    <p className={'apartment3__desc'}>
                        In apartment, there are also iron, an ironing board, a fan, and other useful stuff for comfortable staying.
                    </p>
                    <p className={'apartment3__desc'}>
                        This apartment has an independent entrance from the street, it is located on the first floor, which you can reach by stairs. Free parking is available near our apartments hotel Villa Manja.
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
                            src='https://www.youtube.com/embed/1a81aV0DdPQ'
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

export default Apartment4
