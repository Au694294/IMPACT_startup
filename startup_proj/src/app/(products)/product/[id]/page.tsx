'use client';

import React, { useEffect, useState } from 'react';
import ProductStyle from './PDP.module.css';
import { ProductProps } from '@/types/types';
import { useParams } from 'next/navigation';
import { useBasketStore } from '@/app/zustands/useBasketStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams();
    const router = useRouter();
    const addToBasket = useBasketStore((state) => state.addToBasket);    

    const [product, setProduct] = useState<ProductProps | null>(null);

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

    const handleAddToBasket = () => {
        addToBasket(product);
        alert('Produkt tilføjet!');
        router.push('/basket');
    }


    return (
        <div className={ProductStyle.container}>
            <div className={ProductStyle.productContainer}>
                <h1 className={ProductStyle.title}>{product.title}</h1>
                <p className={ProductStyle.detail}><strong>Pris:</strong> {product.price}</p>
                <p className={ProductStyle.detail}><strong>Brand:</strong> {product.brand}</p>
                <p className={ProductStyle.detail}><strong>Levering:</strong> {product.shippingInformation}</p>
                <p className={ProductStyle.detail}><strong>Beskrivelse:</strong> {product.description}</p><br></br>
                
                <p className={`${ProductStyle.detail} ${product.stock < 5 ? ProductStyle.outOfStock : ''}`}> 
                    <strong>På lager:</strong> {product.stock < 5 ? 'Få tilbage' : product.stock}
                </p><br></br>

                <div className={ProductStyle.reviewsContainer}>
                    <h2>Anmeldelser</h2>
                    {product.reviews && product.reviews.length > 0 ? (
                        product.reviews.map((review, index) => (
                            <div key={index} className={ProductStyle.review}>
                                <p><strong>{review.reviewerName}</strong> ({new Date(review.date).toLocaleDateString()})</p> 
                                <p>Rating: {review.rating} / 5</p>
                                <p>{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p>Der er ikke angivet anmeldelser for dette produkt</p>
                    )}
                </div>

                <button
                    className={ProductStyle.button}
                    onClick={() => handleAddToBasket()}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> Tilføj til kurv
                </button>
            </div>
        </div>
    );
};

export default ProductDetailsPage;