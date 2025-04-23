import { Product } from "../Types/types";

const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async (): Promise<Product[]> => {    
    try {
        const response = await fetch(`${BASE_URL}/products`);

        if(!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        return data;
       
    } catch (error) {
       throw new Error('Network response was not ok');
    }
}







