'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import ProductStyle from './PLP.module.css';
import { getProducts } from '@/app/api/products/getProducts';
import { ProductProps } from '@/types/types';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Lazy load PLP component for CSR
const _PLPBox = dynamic(() => import('./productBox'));

// Function to display products on page
export default function ProductPage() {
    const [products, setProducts] = useState<ProductProps[]>([]);   
    const [ProductsCount, setProductsCount] = useState(5);    
    const [loading, setLoading] = useState(false);  
    const router = useRouter();


    // Fetch products when component mounts and when ProductsCount changes
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const allProducts = await getProducts(ProductsCount);
                setProducts(allProducts);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchProducts();
    }, [ProductsCount]); 




    // Function to load more products
    const loadMoreProducts = async () => {
        setLoading(true);
        try {
            const loadNewProducts = await getProducts(5, products.length);  // Load 5 more products from the last product in the list 
            setProducts(prevProducts => [...prevProducts, ...loadNewProducts]);
        } catch (error) {
            console.error("Error loading more products", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={ProductStyle.container}>
            <h1 className={ProductStyle.title}>Vores Produkter</h1>

            {/* Display products in a list format */}
            <div className={ProductStyle.listOfProducts}>
                <Suspense fallback={<div>Loading...</div>}> {/* Suspense to display loading message while products are being fetched */}
                    {
                        // Map through products and display each product
                        products.map(({ id, title, price, description, stock, brand, shippingInformation, reviews }: ProductProps) => (
                            <_PLPBox key={id} id={id} title={title} price={price} stock={stock} description={description} brand={brand} shippingInformation={shippingInformation} reviews={reviews} /> 
                        ))
                    }
                </Suspense> 
            </div>

            
            {/* While products being fetched */}
            {loading && <div>Loading more products...</div>}

            {/* Display load more button if there are more products to load */}
            {products.length > 0 && (
                <button className={ProductStyle.loadMoreBtn} onClick={loadMoreProducts} disabled={loading}> 
                    {loading ? 'Loading...' : 'Indlæs flere'} 
                </button>
            )}
        </div>
    );
}