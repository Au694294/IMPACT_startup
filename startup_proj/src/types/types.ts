export type ProductProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    stock: number;
    brand: string;
    shippingInformation: string;
    reviews: Review[];
}

export type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

export type BasketContextProps = {
    basket: ProductProps[];
    addToBasket: (product: ProductProps) => void; 
    removeFromBasket: (productId: number) => void;
}
