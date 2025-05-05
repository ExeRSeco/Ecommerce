import { Product } from "../Types/types";

const BASE_URL = 'https://dummyjson.com';

export const getProducts = async (page = 0): Promise<Product[]> => {    
    try {
        const response = await fetch(`${BASE_URL}/products?limit=12&skip=${page}`); 
        
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);
        
        if (!data.products || !Array.isArray(data.products)) {
            throw new Error('Invalid response format from API');
        }

        // Asegurarse de que los precios sean números
        return data.products.map((product: any) => ({
            ...product,
            price: Number(product.price) || 0,
            quantity: 0
        }));
       
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error(error instanceof Error ? error.message : 'Failed to fetch products');
    }
}







