'use client'
import React, { useState } from 'react'
import './Apartment4.css'
import '../globals.css'
import ApartmentCarousel from "@/components/ApartmenCarousel/ApartmentCarousel"
import ShareButton from "@/components/ShareButton/ShareButton"

const images = [
    { src: '/images/apartment4/1st.webp', title: 'Entrance to apartment 4' },
    { src: '/images/apartment4/2nd.webp', title: 'Hallway' },
    { src: '/images/apartment4/3rd.webp', title: 'Master Bedroom' },
    { src: '/images/apartment4/4th.webp', title: 'Second Bedroom' },
    { src: '/images/apartment4/5th.webp', title: 'Living Room' },
    { src: '/images/apartment4/6th.webp', title: 'Kitchen' },
    { src: '/images/apartment4/7th.webp', title: 'Dining Area' },
    { src: '/images/apartment4/8th.webp', title: 'Bathroom' },
    { src: '/images/apartment4/10th.webp', title: 'Exterior View' },
    { src: '/images/apartment4/11th.webp', title: 'Balcony' },
    { src: '/images/apartment4/12th.webp', title: 'Garden' },
    { src: '/images/apartment4/13th.webp', title: 'Play Area' },
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
                    <p>
                        Cozy apartment for a maximum of two persons of 35 sq.m. Apartment includes:
                    </p>
                    <ul className={'apartment3__list'}>
                        <li>Bedroom with one big bed 160×200 cm with orthopedic mattress </li>
                        <li>Living room </li>
                        <li>Fully equipped kitchen (cooking panel, oven, fridge, dish-washing machine, cattle, coffee
                            machine, toaster, kitchenware)
                        </li>
                        <li>Bathroom with shower cabin </li>
                        <li>Separate toilet</li>
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
                            src={src.src}
                            alt={`Image ${index + 1}`}
                            className={'apartment3__image'}
                            onClick={() => openCarousel(index)}
                        />
                    ))}
                </div>
            </div>
            {isCarouselOpen && <ApartmentCarousel currentIndex={currentIndex} onClose={closeCarousel} images={images} />}
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

export default Apartment4
