import { useEffect, useState } from "react";
import { Filters } from "./Filters"
import { Product, CartItem } from "../../Types/types";
import { getProducts } from "../../Services/product";
import { useCart } from "../../Hooks/useCartContext";
import { Toaster, toast } from "sonner";



export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products);
          
        }).catch((error) => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const {dispatch} = useCart()

    const addToCart = (product: Product) => {
        const item: CartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        }
        dispatch({type: "ADD_TO_CART", payload: item})
        toast.success("Product added to cart")
    }
 

   

    
    return (
       
            <div className="products-container-section flex flex-col items-center justify-center gap-4 mb-10">
                <Filters />
                <Toaster richColors />
                <div className="products-container__title w-full h-full flex justify-center items-center mb-4">

                <h1 className="products-container__title--title text-2xl font-bold text-center">Products</h1>

            </div>

            <div className="products-container__products grid grid-cols-4 gap-8 justify-center items-center">
            {loading && <p> Loading... </p>}
            {error && <p> Error... </p>}
                {products.map((product)  => (
                    <div key={product.id} className="products-container__products--product  h-[500px] flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 bg-gray-800">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="products-container__products--product-img object-cover h-48 w-full" 
                        />
                        <div className="info-product flex flex-col justify-between items-center gap-2 p-4 flex-grow">
                            <h2 className="info-product__title text-md font-bold text-center text-white line-clamp-2 ">{product.title}</h2>
                            <p className="info-product__category text-sm text-center text-white font-bold">{product.category}</p>
                            <p className="info-product__description text-sm text-center text-white line-clamp-3">{product.description}</p>
                            <p className="info-product__price text-lg font-bold text-center text-white">Price: ${product.price}</p>
                           
                            <button className="info-product__button bg-gray-400 text-white px-4 py-2 cursor-pointer hover:bg-gray-500 transition-all duration-300 hover:font-bold w-full mt-auto" 
                            onClick={() => addToCart(product)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="products-container__button bg-gray-400 text-white px-4 py-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 hover:font-bold rounded-md">Load more</button>
        </div>
    )
}
