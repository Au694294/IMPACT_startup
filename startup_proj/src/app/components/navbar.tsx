'use client';

import Link from 'next/link';
import React from 'react';
import navbarStyles from './navbar.module.css';
import { mainRoutes } from '@/actions/getMainRoutes';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useBasketStore } from '@/app/zustands/useBasketStore';


export default function Navbar() {
    const basket = useBasketStore((state) => state.basket);
    // Get main routes from function
    const routes = mainRoutes();

    if (!routes) {
        console.error('Failed to fetch routes');
        notFound();
    }


    // Display navigation links
    return (
        <nav className={navbarStyles.navbar}>
            <ul>
                {routes.map((route) => (
                    <li key={route.id}>
                        <Link className={navbarStyles.link} href={route.relativePath}>
                            {route.displayName}
                        </Link>
                    </li>
                ))} 
            </ul>

            {/* Minibasket */}
            <Link href="/basket">
            <button className={navbarStyles.cartButton}>
                <span className={navbarStyles.cartText}>
                <FontAwesomeIcon className={navbarStyles.cartIcon} icon={faShoppingCart} />
                </span>
                <p className={navbarStyles.miniBasket}><strong>{basket.length}</strong></p>
            </button>
            </Link>
        </nav>
    );
}