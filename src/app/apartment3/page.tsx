'use client'
import React, { useState } from 'react'
import styles from './Apartment3.module.css'
import '../globals.css'
import ApartmentCarousel from "@/components/ApartmenCarousel/ApartmentCarousel";

const images = [
    '/images/apartment3/1st.webp',
    '/images/apartment3/2nd.webp',
    '/images/apartment3/3rd.webp',
    '/images/apartment3/4th.webp',
    '/images/apartment3/5th.webp',
    '/images/apartment3/6th.webp',
    '/images/apartment3/7th.webp',
    '/images/apartment3/8th.webp',
    '/images/apartment3/10th.webp',
    '/images/apartment3/11th.webp',
    '/images/apartment3/12th.webp',
    '/images/apartment3/13th.webp',
    '/images/apartment3/14th.webp',
    '/images/apartment3/15th.webp',
    '/images/apartment3/16th.webp',
    '/images/apartment3/17th.webp',
    '/images/apartment3/18th.webp',
    '/images/apartment3/19th.webp',
    '/images/apartment3/20th.webp',
    '/images/apartment3/21st.webp',
    '/images/apartment3/22nd.webp',
    '/images/apartment3/23rd.webp',
    '/images/apartment3/24th.webp',
]



const Apartment3 = () => {
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
        <section className={styles.apartment3}>
            <div className={`container ${styles.apartment3__container}`}>
                <div className={styles.apartment3__textWrapper}>
                    <h1 className={styles.apartment3__header}>Apartment №3 <br/>
                        "Birds & Flowers"
                    </h1>
                    <p className={styles.apartment3__text}>Family apartment</p>
                    <p>
                        Big family apartment for four persons of 65 sq.m. Apartment includes:
                    </p>
                    <ul className={styles.apartment3__list}>
                        <li>Master bedroom with queen-size bed with orthopedic mattress</li>
                        <li>Second bedroom with transformed bed (single, double and twin)</li>
                        <li>Additional foldable bed for a kid</li>
                        <li>Fully equipped kitchen (cooking panel, oven, fridge, dish-washing machine, cattle, coffee
                            machine, toaster, kitchenware)
                        </li>
                        <li>Bathroom with shower cabin, heated towel dryer, and washing machine</li>
                        <li>Feeding chair for our smallest guests</li>
                    </ul>
                    <p>
                        In apartment, there are also iron, an ironing board, a fan, and other useful stuff for
                        comfortable
                        staying.
                    </p>
                    <p>
                        This apartment has an independent entrance from the street, it is located on the first floor,
                        which
                        you can reach by stairs. Free parking is available near our apartments hotel Villa Manja.
                    </p>
                    <button className={styles.apartment3__button}>Check availability</button>
                </div>
                <div className={styles.apartment3__imageGrid}>
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className={styles.apartment3__image}
                            onClick={() => openCarousel(index)}
                        />
                    ))}
                </div>
            </div>
            {isCarouselOpen && <ApartmentCarousel currentIndex={currentIndex} onClose={closeCarousel}/>}
        </section>
    )
}

export default Apartment3
