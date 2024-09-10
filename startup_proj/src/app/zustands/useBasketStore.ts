import { BasketContextProps } from '@/types/types'
import { create } from "zustand";

// Basket store for adding products to basket
export const useBasketStore = create<BasketContextProps>((set) => ({
    basket: [],
    addToBasket: (product) => set((state) => ({
        basket: [...state.basket, product],
    })),
    removeFromBasket: (productId: number) => set((state) => ({
        basket: state.basket.filter((product) => product.id !== productId),
    })),
}));


