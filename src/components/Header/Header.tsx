'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import './Header.css'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleLanguageChange = (language: { code: string; name: string }) => {}

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <header className='header'>
            <div className='header__top-container'>
                <div className='container header__logo-container'>
                    <div className='header__logo'>
                       <Link href='/'>
                           <Image src='/images/Ornamentico_logo.webp' alt='Ornamentico logo' width={375} height={45} />
                       </Link>
                    </div>
                    <div className="header__language-selector">
                        <LanguageSelector onChange={handleLanguageChange} />
                    </div>
                    <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                </div>
            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <div className='container nav__container'>
                    <ul className={`header__list ${isMenuOpen ? 'open' : ''}`}>
                        <li className='header__item'><Link href='/' className='header__link'>Home</Link></li>
                        <li className='header__item' onClick={toggleDropdown}>
                            <a className='header__link'>Apart Hotel Villa Manja</a>
                            <ul className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                <li><Link href='/apartment3'>Apartment 3 Birds & Flowers</Link></li>
                                <li><Link href='/apartment4'>Apartment 4 Sunny Nest</Link></li>
                                <li><Link href='/apartment5'>Apartment 5 Tulips and Mint</Link></li>
                                <li><Link href='#'>Apartment 6 Lavender and Chamomile</Link></li>
                            </ul>
                        </li>
                        <li className='header__item'><Link href='#' className='header__link'>Booking</Link></li>
                        <li className='header__item'><Link href='#' className='header__link'>What to see nearby</Link></li>
                        <li className='header__item'><Link href='#' className='header__link'>Contacts</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
