'use client'
import React from 'react'
import styles from './Apartment3.module.css'
import '../globals.css'
import ApartmentCarousel from "@/components/ApartmenCarousel/ApartmentCarousel";
const Apartment3 = () => {
    return (
        <section className={styles.apartment3}>
            <div className={`container ${styles.apartment3__container}`}>
                <div className={styles.apartment3__textWrapper}>
                    <h1 className={styles.apartment3__header}>Apartment №3 <br/>
                    "Birds & Flowers"
                    </h1>
                    <p>Family apartment</p>
                    <p>
                        Big family apartment for four persons of 65 sq.m. Apartment includes:
                    </p>
                    <ul>
                        <li>Master bedroom with queen-size bed with orthopedic mattress</li>
                        <li>Second bedroom with transformed bed (single, double and twin)</li>
                        <li>Additional foldable bed for a kid</li>
                        <li>Fully equipped kitchen (cooking panel, oven, fridge, dish-washing machine, cattle, coffee machine, toaster, kitchenware)</li>
                        <li>Bathroom with shower cabin, heated towel dryer, and washing machine</li>
                        <li>Feeding chair for our smallest guests</li>
                    </ul>
                    <p>
                        In apartment, there are also iron, an ironing board, a fan, and other useful stuff for comfortable
                        staying.
                    </p>
                    <p>
                        This apartment has an independent entrance from the street, it is located on the first floor, which
                        you can reach by stairs. Free parking is available near our apartments hotel Villa Manja.
                    </p>
                    <button className={styles.apartment3__button}>Check availability</button>
                </div>
                <ApartmentCarousel currentIndex='0' />
            </div>
        </section>
    )
}

export default Apartment3
