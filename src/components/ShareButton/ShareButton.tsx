'use client'
import React from 'react'
import { FacebookShareButton } from 'react-share'
import styles from './ShareButton.module.css'

const ShareButton = () => {
    const shareUrl = 'https://www.villa-manja.com'
    const title = 'Check out this amazing page!'

    return (
        <div className={styles.shareButtonContainer}>
            <FacebookShareButton url={shareUrl} title={title} className={styles.shareButton}>
                <img src='/icons/facebook-share-button.svg' alt='Share button' className={styles.shareIcon} />
            </FacebookShareButton>
        </div>
    )
}

export default ShareButton
