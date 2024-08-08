import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <section className='contacts'>
            <div className='container contacts__container'>
                <h2 className={styles.contacts__title}>
                    Contact us
                </h2>
                <div className={styles.contacts__info}>
                    <h3 className={styles.contacts__company}>Ornamentico Group company</h3>
                    <p>Koprivnik v Bohinju 5<br />Bohinjska Bistrica<br />4264 Slovenia</p>
                    <a href="https://wa.me/yourwhatsappnumber" className={styles.contacts__whatsapp}>
                        <img src='/icons/whatsapp.png' alt='WhatsApp' className={styles.contacts__whatsappIcon}/>
                        WhatsApp
                    </a>
                </div>
                <div className={styles.contacts__directions}>

                    <h3 className={styles.contacts__heading}>How to find our place: </h3>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d88200.21940963875!2d13.983924!3d46.3047361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a929aa82be933%3A0x7a4caf6419c728df!2sApart%20hotel%20Villa%20Manja!5e0!3m2!1sen!2sua!4v1723109697728!5m2!1sen!2sua'
                        width='600'
                        height='450'
                        style={{border: 0, width: '100%', height: '450px', marginBottom: '1.5rem'}}
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'>
                    </iframe>

                    <h3 className={styles.contacts__heading}>How to find us:</h3>
                    <p className={styles.contacts__paragraph}>
                        After you turn from the highway towards Bled you need to go through Bled city and continue to
                        move
                        on the road 209 toward Bohinj Lake. In Bitnje village you need to take right turn (following
                        signs
                        Pokljujka/Srednja Vas/Jereka) and more upwards with light mountain road 633 until you reach
                        Jereka
                        village. There you need to take right turn following signs Pokljuka/Koprivnik/Jereka. Continue
                        on
                        this road 905 for another 6 km (real mountain road) you will reach up our village. Turn into
                        Koprivnik village, and you can see our house being first from the entrance.
                        <br/><br/>
                        If you use Google Maps or MapsMe, simply type: Villa Manja, and it will build you the route
                        towards
                        our hotel.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contacts
