'use client'
import React, { useState } from 'react'
import './Apartment3.css'
import '../globals.css'
import ApartmentCarousel from "@/components/ApartmenCarousel/ApartmentCarousel";
import ShareButton from "@/components/ShareButton/ShareButton";


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
        <section className={'apartment3'}>
            <div className={`container apartment3__container`}>
                <div className={'apartment3__textWrapper'}>
                    <h1 className={'apartment3__header'}>Apartment №3 <br/>
                        "Birds & Flowers"
                    </h1>
                    <p className={'apartment3__text'}>Family apartment</p>
                    <p>
                        Big family apartment for four persons of 65 sq.m. Apartment includes:
                    </p>
                    <ul className={'apartment3__list'}>
                        <li>Master bedroom with queen-size bed with orthopedic mattress</li>
                        <li>Second bedroom with transformed bed (single, double and twin)</li>
                        <li>Additional foldable bed for a kid</li>
                        <li>Fully equipped kitchen (cooking panel, oven, fridge, dish-washing machine, cattle, coffee
                            machine, toaster, kitchenware)
                        </li>
                        <li>Bathroom with shower cabin, heated towel dryer, and washing machine</li>
                        <li>Feeding chair for our smallest guests</li>
                    </ul>
                    <p className={'apartment3__desc'}>
                        In apartment, there are also iron, an ironing board, a fan, and other useful stuff for
                        comfortable
                        staying.
                    </p>
                    <p className={'apartment3__desc'}>
                        This apartment has an independent entrance from the street, it is located on the first floor,
                        which
                        you can reach by stairs. Free parking is available near our apartments hotel Villa Manja.
                    </p>
                    <button className={'apartment3__button'}>Check availability</button>
                </div>
                <div className={'apartment3__imageGrid'}>
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className={'apartment3__image'}
                            onClick={() => openCarousel(index)}
                        />
                    ))}
                </div>
            </div>
            {isCarouselOpen && <ApartmentCarousel currentIndex={currentIndex} onClose={closeCarousel}/>}
            <footer className='footer'>
                <div className='container footer__container'>
                    <div className='footer__top-container'>
                        <div className='footer__social-apart'>
                            <div className='footer__social-icons-wrapper-apartment'>
                                <a href='https://www.facebook.com/villamanjaslovenia/' target='_blank'
                                   rel='noopener noreferrer'
                                   aria-label='Facebook' className='apartment3__footer-social-icon'>
                                    <img src='/icons/facebook.png' alt='A Facebook icon' className={'footer__icon-apartment'}/>
                                </a>
                                <a href='https://www.instagram.com/villamanjaslovenia/' target='_blank'
                                   rel='noopener noreferrer'
                                   aria-label='Instagram' className='apartment3__footer-social-icon'>
                                    <img src='/icons/instagram.png' alt='An Instagram icon'  className={'footer__icon-apartment'}/>
                                </a>
                                <a href='https://www.youtube.com/@villamanja_slovenia?sub_confirmation=1'
                                   target='_blank'
                                   rel='noopener noreferrer' aria-label='Twitter' className='apartment3__footer-social-icon'>
                                    <img src='/icons/youtube.png' alt='A Youtube icon'  className={'footer__icon-apartment'}/>
                                </a>
                            </div>
                            <ShareButton/>
                        </div>
                        <div className='footer__apartmentcopy'>
                            <p className='footer__copy-desc footer__group'>Ornamentico Group d.o.o. </p>
                            <p className='footer__copy-desc'>
                                Privacy policy
                            </p>
                        </div>
                    </div>
                    <div className='footer__apartmentpolicy'>
                        <a href='#' className='footer__policy-page-link'>
                            Koprivnik v Bohinju 5, 4264 Bohinjska Bistrica,
                            Slovenia
                        </a>
                        <div className='footer__policy-address'>
                            <p className='footer__policy-year'>©2017 Ornamentico Group, Apart Hotel Villa Manja</p>
                        </div>

                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Apartment3
