'use client'
import React, { useState } from 'react'
import './Apartment3.css'
import '../globals.css'

import ShareButton from "@/components/ShareButton/ShareButton";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

const images = [
    { src: '/images/apartment3/1st.webp', title: 'Entrance to apartment 3', description: 'Entrance to apartment 3' },
    { src: '/images/apartment3/2nd.webp', title: 'Hallway', description: 'Hallway' },
    { src: '/images/apartment3/3rd.webp', title: 'Master Bedroom', description: 'Master Bedroom' },
    { src: '/images/apartment3/4th.webp', title: 'Second Bedroom', description: 'Second Bedroom' },
    { src: '/images/apartment3/5th.webp', title: 'Living Room', description: 'Living Room' },
    { src: '/images/apartment3/6th.webp', title: 'Kitchen', description: 'Kitchen' },
    { src: '/images/apartment3/7th.webp', title: 'Dining Area', description: 'Dining Area' },
    { src: '/images/apartment3/8th.webp', title: 'Bathroom', description: 'Bathroom' },
    { src: '/images/apartment3/10th.webp', title: 'Exterior View', description: 'Exterior View' },
    { src: '/images/apartment3/11th.webp', title: 'Balcony', description: 'Balcony' },
    { src: '/images/apartment3/12th.webp', title: 'Garden', description: 'Garden' },
    { src: '/images/apartment3/13th.webp', title: 'Play Area', description: 'Play Area' },
    { src: '/images/apartment3/14th.webp', title: 'Nearby Attractions', description: 'Nearby Attractions' },
    { src: '/images/apartment3/15th.webp', title: 'Parking Area', description: 'Parking Area' },
    { src: '/images/apartment3/16th.webp', title: 'Master Bedroom Closeup', description: 'Master Bedroom Closeup' },
    { src: '/images/apartment3/17th.webp', title: 'Kitchen Appliances', description: 'Kitchen Appliances' },
    { src: '/images/apartment3/18th.webp', title: 'Dining Area Decor', description: 'Dining Area Decor' },
    { src: '/images/apartment3/19th.webp', title: 'Living Room Decor', description: 'Living Room Decor' },
    { src: '/images/apartment3/20th.webp', title: 'Bathroom Amenities', description: 'Bathroom Amenities' },
    { src: '/images/apartment3/21st.webp', title: 'Apartment Exterior', description: 'Apartment Exterior' },
    { src: '/images/apartment3/22nd.webp', title: 'Street View', description: 'Street View' },
    { src: '/images/apartment3/23rd.webp', title: 'Nearby Nature', description: 'Nearby Nature' },
    { src: '/images/apartment3/24th.webp', title: 'Local Attractions', description: 'Local Attractions' },
]

const Apartment3 = () => {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openCarousel = (index:number) => {
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
                    <h1 className={'apartment3__header'}>Apartment №3 <br/>
                        "Birds & Flowers"
                    </h1>
                    <p className={'apartment3__text'}>Family apartment</p>
                    <p className='apartment3__family-apart'>
                        Big family apartment for four persons of 65 sq.m. Apartment includes:
                    </p>
                    <ul className={'apartment3__list'}>
                        <li>Master bedroom with queen-size bed with orthopedic mattress</li>
                        <li>Second bedroom with transformed bed (single, double and twin)</li>
                        <li>Additional foldable bed for a kid</li>
                        <li>Fully equipped kitchen (cooking panel, oven, fridge, dish-washing machine, kettle, coffee machine, toaster, kitchenware)</li>
                        <li>Bathroom with shower cabin, heated towel dryer, and washing machine</li>
                        <li>Feeding chair for our smallest guests</li>
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
                            src='https://www.youtube.com/embed/c9zG2EiiaqY'
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

export default Apartment3
