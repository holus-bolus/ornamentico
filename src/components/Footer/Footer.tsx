import React from 'react';
import './Footer.css';
import ShareButton from "@/components/ShareButton/ShareButton";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer__container'>
                <div className='footer__top-container'>
                    <div className='footer__social'>
                        <div className='footer__social-icons-wrapper'>
                            <a href='https://www.facebook.com/villamanjaslovenia/' target='_blank'
                               rel='noopener noreferrer'
                               aria-label='Facebook'>
                                <img src='/icons/facebook.png' alt='A Facebook icon' className='footer__icon'/>
                            </a>
                            <a href='https://www.instagram.com/villamanjaslovenia/' target='_blank'
                               rel='noopener noreferrer'
                               aria-label='Instagram'>
                                <img src='/icons/instagram.png' alt='An Instagram icon' className='footer__icon'/>
                            </a>
                            <a href='https://www.youtube.com/@villamanja_slovenia?sub_confirmation=1' target='_blank'
                               rel='noopener noreferrer' aria-label='Twitter'>
                                <img src='/icons/youtube.png' alt='A Youtube icon' className='footer__icon'/>
                            </a>
                        </div>
                        <ShareButton/>
                    </div>
                    <div className='footer__copy'>
                        <p className='footer__copy-desc'>Ornamentico Group d.o.o. </p>
                        <p className='footer__copy-desc'> Apart Hotel Villa Manja </p>
                        <a href='https://www.villa-manja.com' className='footer__copy-desc' target='_blank'
                           rel='noopener noreferrer'> www.villa-manja.com </a>
                        <p className='footer__copy-desc'>Koprivnik v Bohinju 5, 4264 Bohinjska Bistrica, Slovenia</p>
                    </div>
                </div>
                <div className='footer__policy'>
                    <div className='footer__policy-address'>
                        <a className='footer__policy-desc'>Koprivnik v Bohinju, 5, Bohinjska Bistrica, 4264,
                            Slovenia</a>
                        <p className='footer__policy-year'>©2017 Ornamentico Group, Apart Hotel Villa Manja</p>
                    </div>
                    <a href='#' className='footer__policy-page-link'>
                        Privacy policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
