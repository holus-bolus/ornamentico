'use client';
import React, {useState} from 'react';
import '../globals.css';
import styles from './SeeNearby.module.css';
import Modal from '@/components/Modal/Modal';


const SeeNearby = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);

    const openModal = (src: string, alt: string) => {
        setSelectedImage({src, alt});
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <section className='see-nearby'>
            <div className={`container`}>
                <h2 className={styles.seeNearby__title}>
                    What to see near our Apart Hotel Villa Manja
                </h2>
                <p className={styles.seeNearby__text}>
                    The closest points of interest
                </p>
                <div className={styles.seeNearby__points}>
                    <div className={styles.seeNearby__point}>
                        <img
                            src='/images/nearby/1st.webp'
                            alt='Vodnikov razglednik'
                            className={styles.seeNearby__pointImage}
                            onClick={() => openModal('/images/nearby/1st.webp', 'Vodnikov razglednik')}
                        />
                        <div className={styles.seeNearby__pointText}>
                            <p className={styles.seeNearby__pointDescription}>
                                Just a 15-minute walk from our house is a view point called Vodnikov razglednik. It is
                                named in memory of Valentin Vodnik, a Slovenian poet and enlightener who lived in our
                                village. They say that he loved visiting this place. And it can be understood: from an
                                altitude of 1017 meters above sea level, an amazing panorama opens onto the valley of
                                Lake Bohinj and the peaks of the Julian Alps. </p>
                        </div>
                    </div>
                </div>
                <div className={styles.seeNearby__points}>
                    <div className={styles.seeNearby__point}>
                        <div className={styles.seeNearby__pointText}>
                            <p className={styles.seeNearby__pointDescription}>
                                Lake Bohinj is the largest glacial lake in Slovenia. It will not only amaze you with its
                                beauty, but also provide an opportunity to engage in various water sports: swimming,
                                SUP, canoeing, kayaking, surfing, rowing boats. You can also fish on Lake Bohinj (this
                                option can be arranged through travel agencies located along the lake). Near the lake
                                there is a beautiful bike path with a length of about 17 km.
                            </p>
                        </div>
                        <img
                            src='/images/nearby/2nd.webp'
                            alt='Lake Bohinj'
                            className={styles.seeNearby__pointImage}
                            onClick={() => openModal('/images/nearby/2nd.webp', 'Lake Bohinj')}
                        />
                    </div>
                </div>
                <div className={styles.seeNearby__points}>
                    <div className={styles.seeNearby__point}>
                        <img
                            src='/images/nearby/3rd.webp'
                            alt='Savica Waterfall'
                            className={styles.seeNearby__pointImage}
                            onClick={() => openModal('/images/nearby/3rd.webp', 'Savica Waterfall')}
                        />
                        <div className={styles.seeNearby__pointText}>
                            <p className={styles.seeNearby__pointDescription}>
                                Savica Waterfall is located near Lake Bohinj. For parking and access to the falls during
                                the summer months you need to pay (5 and 10 euros, respectively). Ascent to the
                                waterfall requires basic walking skills (about 500 steps up). But this climb is worth
                                it, as these species are breathtaking. From here begins the Sava River.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.seeNearby__points}>
                    <div className={styles.seeNearby__point}>
                        <div className={styles.seeNearby__pointText}>
                            <p className={styles.seeNearby__pointDescription}>
                                Mount Vogel is not only a ski resort, but also a place from which numerous hiking trails
                                of various complexity begin. Having risen to the first mark in a telescope at an
                                altitude of 1535 meters above sea level, you can enjoy beautiful views of the valley of
                                Lake Bohinj. At this mark are a cafe, restaurant, playground for very young travellers.
                                Older children and adults can ride the Zip Line - a descent on a safety device along a
                                rope laid over a small gorge.
                            </p>
                        </div>
                        <img
                            src='/images/nearby/4th.webp'
                            alt='Mount Vogel'
                            className={styles.seeNearby__pointImage}
                            onClick={() => openModal('/images/nearby/4th.webp', 'Mount Vogel')}
                        />
                    </div>
                </div>
                <div className={styles.seeNearby__points}>
                    <div className={styles.seeNearby__point}>
                        <img
                            src='/images/nearby/5th.webp'
                            alt='Lake Bled'
                            className={styles.seeNearby__pointImage}
                            onClick={() => openModal('/images/nearby/5th.webp', 'Lake Bled')}
                        />
                        <div className={styles.seeNearby__pointText}>
                            <p className={styles.seeNearby__pointDescription}>
                                The lake and the city of Bled is perhaps the most popular tourist destination in
                                Slovenia. It is no coincidence that people from all over the world strive here: the blue
                                water of the lake fascinates and does not let you go. Climbing to Bled Castle, you can
                                appreciate the beauty of the panoramic view. Definitely, you need to go here. </p>
                        </div>
                    </div>
                </div>
                <div className={styles.seeNearby__points}>
                    <div className={styles.seeNearby__point}>
                        <div className={styles.seeNearby__pointText}>
                            <p className={styles.seeNearby__pointDescription}>
                                Six kilometres from the city of Bled is the Vintgar Gorge. The Radovna River flows
                                between steep cliffs. A pedestrian route has been laid along the river, it is simple,
                                its length is about 1600 meters in one direction. The depth of the gorge is about 250
                                meters, which is why we recommend visiting on a hot day - it is cool and pleasant there.
                                Note that the route is not intended for any wheeled vehicles, including baby prams.
                            </p>
                        </div>
                        <img
                            src='/images/nearby/6th.webp'
                            alt='Vintgar Gorge'
                            className={styles.seeNearby__pointImage}
                            onClick={() => openModal('/images/nearby/6th.webp', 'Vintgar Gorge')}
                        />
                    </div>
                </div>
            </div>
            {isModalOpen && selectedImage && (
                <Modal image={selectedImage.src} alt={selectedImage.alt} onClose={closeModal}/>
            )}
        </section>
    );
};

export default SeeNearby;
