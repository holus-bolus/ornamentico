'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import { OnChangeValue, ActionMeta } from 'react-select'
import './Header.css'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLanguageChange = (newValue: OnChangeValue<{ value: string; label: JSX.Element }, boolean>, actionMeta: ActionMeta<{ value: string; label: JSX.Element }>) => {
        if (newValue && !Array.isArray(newValue)) {
            // @ts-ignore
            console.log(`Selected language: ${newValue.value}`)
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='header'>
            <div className='header__top-container'>
                <div className='container header__logo-container'>
                    <div className='header__logo'>
                        <Image src='/images/Ornamentico_logo.webp' alt='Ornamentico logo' width={375} height={45} />
                    </div>
                    <LanguageSelector onChange={handleLanguageChange} />
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
                        <li className='header__item'><Link href='#' className='header__link'>Home</Link></li>
                        <li className='header__item'><Link href='#' className='header__link'>Apart Hotel Villa Manja</Link></li>
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
