import { Product } from "../Types/types";

const BASE_URL = 'https://dummyjson.com';
const ITEMS_PER_PAGE = 12;

export const getProducts = async (page = 1): Promise<Product[]> => {    
    try {
        const skip = (page - 1) * ITEMS_PER_PAGE;
        console.log(`Fetching products - Page: ${page}, Skip: ${skip}, Limit: ${ITEMS_PER_PAGE}`);
        
        const response = await fetch(`${BASE_URL}/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`); 
        
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Received ${data.products?.length || 0} products from API`);
        
        if (!data.products || !Array.isArray(data.products)) {
            throw new Error('Invalid response format from API');
        }

        // Asegurarse de que los precios sean números
        const processedProducts = data.products.map((product: any) => ({
            ...product,
            price: Number(product.price) || 0,
            quantity: 0
        }));

        console.log(`Processed ${processedProducts.length} products`);
        return processedProducts;
       
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error(error instanceof Error ? error.message : 'Failed to fetch products');
    }
}







