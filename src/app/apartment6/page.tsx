'use client'
import React, { useState } from "react";
import ApartmentCarousel from "@/components/ApartmenCarousel/ApartmentCarousel";

type Image = {
    src: string
    title: string
    description?: string
}

const images: Image[] = [
    { src: '/images/apartment6/1st.webp', title: 'Entrance to the apartment by stairs to the third floor' },
    {
        src: '/images/apartment6/2nd.webp',
        title: 'Entrance to the apartment ',
        description: 'General view from corridor'
    },
    { src: '/images/apartment6/3rd.webp', title: 'Entrance to the apartment ', description: 'Corridor of the apartment' },
    {
        src: '/images/apartment6/4th.webp',
        title: 'Bathroom',
        description: 'The bathroom has a shower, washbasin and washing machine'
    },
    {
        src: '/images/apartment6/5th.webp', title: 'Bathroom',
        description: 'The bathroom has a shower, washbasin and washing machine'
    },
    { src: '/images/apartment6/6th.webp', title: 'Corridor', description: 'View from the entrance to the kitchen' },
    {
        src: '/images/apartment6/7th.webp',
        title: 'Bedroom',
        description: 'The bedroom has a 160x200 cm bed and a wardrobe'
    },
    { src: '/images/apartment6/8th.webp', title: 'Bedroom', description: 'View from entrance' },
    {
        src: '/images/apartment6/10th.webp',
        title: 'Bedroom',
        description: 'Window in the bedroom'
    },
    {
        src: '/images/apartment6/11th.webp',
        title: 'Bedroom',
        description: 'The bedroom has a 160×200 cm bed and a wardrobe'
    },
    { src: '/images/apartment6/12th.webp', title: 'Kitchen', description: 'Fully equipped kitchen' },
    { src: '/images/apartment6/13th.webp', title: 'Kitchen', description: 'Fully equipped kitchen' },
    { src: '/images/apartment6/14th.webp', title: 'Living room with sofa', description: 'Folding sofa bed 160×200 cm' },
    { src: '/images/apartment6/15th.webp', title: 'Living room with sofa', description: 'Folding sofa bed 160×200 cm' },
    { src: '/images/apartment6/16th.webp', title: 'Main room', description: 'Extendable table for four guests' },
    { src: '/images/apartment6/17th.webp', title: 'Main room', description: 'Extendable table for four guests' },
]

const Apartment6 = () => {
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
                    <h1 className={'apartment3__header'}>Apartment No. 6
                        <br/>
                        "Lavender and Chamomile"
                    </h1>
                    <p className={'apartment3__text'}>Apartment for four people with queen-size bed</p>
                    <p className='apartment3__family-apart'>
                        Family apartment for four persons at 56 sq.m. Apartment includes:
                    </p>
                    <ul className={'apartment3__list'}>
                        <li>
                            Bedroom with queen-size bed 160×200 cm with orthopedic mattress
                        </li>
                        <li>Living room with foldable sofa 160×200 cm</li>
                        <li>Fully equipped kitchen (cooking panel, oven, fridge, dish-washing machine, cattle, coffee
                            machine, toaster, kitchenware)
                        </li>
                        <li>Bathroom with shower cabin, heated towel dryer, and washing machine</li>
                    </ul>
                    <p className={'apartment3__desc'}>
                        In the apartment, there are as well iron, an ironing board, a fan, and other useful stuff for
                        comfortable staying.
                    </p>
                    <p className={'apartment3__desc'}>
                        The apartment has an independent entrance from the street, it is located on the second floor,
                        which you can reach by stairs. Free parking is available near our apartments hotel Villa Manja.
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
                    <div className='responsive-iframe'>
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
            {isCarouselOpen && <ApartmentCarousel currentIndex={currentIndex} onClose={closeCarousel} images={images}/>}
        </section>
    )
};

export default Apartment6;
