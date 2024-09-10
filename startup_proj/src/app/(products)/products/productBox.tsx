'use client';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import ProductStyle from './PLP.module.css';
import { useRouter } from 'next/navigation';
import { ProductProps } from '@/types/types';
import { useBasketStore } from '@/app/zustands/useBasketStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// Internal function to display product details 
export default function _ProductBox({ id, title, price }: ProductProps) {
    const [product, setProduct] = useState<ProductProps | null>(null);
    const router = useRouter();
    const addToBasket = useBasketStore((state) => state.addToBasket);

    // fetch product based on id
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productData: ProductProps = await response.json();
                setProduct(productData);
            } catch (error) {
                console.error("Error fetching product", error);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (!product) {
        return <p>Produktet kunne ikke hentes!</p>;
    }

    // Navigate to PDP
    const handleProductDetails = () => {
        router.push(`/product/${id}`);
    };

    // Add product to basket
    const handleAddToBasket = () => {
        addToBasket(product);
        alert('Produkt tilføjet!');
    };

    return (
        <div key={id} className={ProductStyle.product}>
            <h2>{title}</h2>
            <p>Pris: {price}</p>
            {/* Navigate to PDP or add product*/}
            <div className={ProductStyle.buttonContainer}>
                <button className={ProductStyle.detailsBtn} onClick={handleProductDetails}>Læs mere</button>
                <button className={ProductStyle.addToBasketBtn} onClick={() => handleAddToBasket()}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Tilføj til kurv
                </button>
            </div>
        </div>
    );
};
