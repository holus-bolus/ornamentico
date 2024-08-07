'use client'
import './Hero.css'
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel'
import {useState} from "react";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";

const images = [
    {src: '/images/1stcarousel.webp', title: 'Front view of apartments hotel Villa Manja Slovenia in winter time',},
    {src: '/images/2ndcarousel.webp', title: 'Bohinj area nature. You can enjoy with amazing views and silence'},
    {src: '/images/3rdcarousel.webp', title: 'Koprivnik v Bohinju is a small village located in the Julian Alps. There are several hiking paths starting almost from our house'},
    {src: '/images/4thcarousel.webp', title: 'Bohinj lake view from 1456 m. above sea level'},
    {src: '/images/5thcarousel.webp', title: 'Front view of apartments hotel Villa Manja Slovenia in winter time'},
    {src: '/images/6thcarousel.webp', title: 'Bohinj area nature'},
    {src: '/images/7thcarousel.webp', title: 'Apartments hotel Villa Manja in Bohinj, winter time'},
]


const Hero = () => {

    const [isCarouselOpen, setIsCarouselOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openCarousel = (index: number) => {
        setCurrentIndex(index)
        setIsCarouselOpen(true)
    }

    const closeCarousel = () => {
        console.log('closeCarousel')
        setIsCarouselOpen(false)
    }
    return (
        <section>
            <div className='container hero__container'>
                <h1 className='hero__title'>
                    Rent your apartments in Slovenia at<br/> Apart Hotel Villa Manja
                </h1>
                <p className='hero__description'>
                    Apartments in Bohinj area, Slovenia
                </p>
                <HeroCarousel images={images} />
                <p className='hero__text'>
                    Our cozy Apart Hotel Villa Manja, located in the Triglav National Park,
                    is waiting for you in the most beautiful area of Slovenia - Bohinj, located in the Julian Alps.
                    Not far from us, there are two main attractions of Slovenia: the beautiful Lake Bled and Lake
                    Bohinj.
                    Each apartment is individually designed and fully equipped for a comfortable stay. You can rent your
                    apartments for comfortable staying.
                </p>
                <p className='hero__text'>
                    Our specialty is making unique handmade jewelry from different materials,
                    such as wood, embroidery, and beads. We often incorporate motifs from various cultures around the
                    world.
                    Each piece of jewelry is one-of-a-kind. We also offer embroidered paintings, patchwork quilts, and
                    other woven items to decorate your home.
                    You can browse our portfolio on <a href='https://cosyhome.studio' target='_blank'
                                                       rel='noopener noreferrer' className='hero__link'>our
                    page</a> or <a href='https://ornamentico.shop' target='_blank' rel='noopener noreferrer'
                                   className='hero__link'>shop online</a>.
                </p>
            </div>
        </section>
    )
}

export default Hero;
