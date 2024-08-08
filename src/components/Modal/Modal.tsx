import React from 'react'
import styles from './Modal.module.css'

interface ModalProps {
    image: string
    alt: string
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({image, alt, onClose}) => {
    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <img src={image} alt={alt} className={styles.modalImage}/>
            </div>
        </div>
    )
}

export default Modal
