// GET request to get product data for PLP component
export async function getProducts(limit = 5, skip = 0) {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`);
    const data = await res.json();
    return data.products;
}
