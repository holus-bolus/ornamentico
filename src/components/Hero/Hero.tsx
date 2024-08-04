'use client'
import './Hero.css'
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel'

const Hero = () => {
    return (
        <section>
            <div className='container hero__container'>
                <h1 className='hero__title'>
                    Rent your apartments in Slovenia at<br /> Apart Hotel Villa Manja
                </h1>
                <p className='hero__description'>
                    Apartments in Bohinj area, Slovenia
                </p>
                <ImageCarousel />
                <p className='hero__text'>
                    Our cozy Apart Hotel Villa Manja, located in the Triglav National Park,
                    is waiting for you in the most beautiful area of Slovenia - Bohinj, located in the Julian Alps.
                    Not far from us, there are two main attractions of Slovenia: the beautiful Lake Bled and Lake Bohinj.
                    Each apartment is individually designed and fully equipped for a comfortable stay. You can rent your apartments for comfortable staying.
                </p>
                <p className='hero__text'>
                    Our specialty is making unique handmade jewelry from different materials,
                    such as wood, embroidery, and beads. We often incorporate motifs from various cultures around the world.
                    Each piece of jewelry is one-of-a-kind. We also offer embroidered paintings, patchwork quilts, and other woven items to decorate your home.
                    You can browse our portfolio on <a href='https://cosyhome.studio' target='_blank' rel='noopener noreferrer' className='hero__link'>our page</a> or <a href='https://ornamentico.shop' target='_blank' rel='noopener noreferrer' className='hero__link'>shop online</a>.
                </p>
            </div>
        </section>
    )
}

export default Hero;
