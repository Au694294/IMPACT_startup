'use client';

import { useBasketStore } from '@/app/zustands/useBasketStore';
import BasketStyle from './basket.module.css';
import { FaCheck, FaTrash } from 'react-icons/fa';

function BasketPage() {
    const basket = useBasketStore((state) => state.basket);
    const removeFromBasket = useBasketStore((state) => state.removeFromBasket); 
    console.log("Indhold af kurv:", basket);

    function handleRemoveFromBasket(id: number): void {
        removeFromBasket(id);
    }

    return (
        <div className={BasketStyle.container}>
            <h1 className={BasketStyle.title}>Din Kurv</h1>
            <p>Produkter i kurven: {basket.length}</p> 
            

            {basket.length > 0 ? (
                <ul>
                    { /* Loop through basket and display product details */ }
                    {basket.map((product, index) => (
                        <li key={index} className={BasketStyle.productContainer}>
                            <h2 className={BasketStyle.productTitle}>{product.title}</h2>
                            <p className={BasketStyle.detail}>Pris: {product.price}</p>
                            <p className={BasketStyle.detail}>Brand: {product.brand}</p>
                            <p className={BasketStyle.detail}>Beskrivelse: {product.description}</p>
                            <button className={BasketStyle.removeButton} onClick={() => handleRemoveFromBasket(product.id)}>
                                <FaTrash /> Fjern
                            </button>
                        </li>
                    ))}
                    <button className={BasketStyle.checkoutButton}>
                        <FaCheck /> Gå til betaling
                    </button>                
                </ul>
            ) : (
                <p className={BasketStyle.emptyBasket}>Kurven er tom...</p>
            )}
        </div>
    );
}

export default BasketPage;

