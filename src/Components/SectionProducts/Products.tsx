import { Filters } from "./Filters"
import { Product, CartItem } from "../../Types/types";
import { getProducts } from "../../Services/product";
import { useCart } from "../../Hooks/useCartContext";
import { Toaster, toast } from "sonner";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Products = () => {

    const [page, setPage] = useState(1)
    console.log(page)

    const {data, isLoading, error, isFetching} = useQuery({
       queryKey: ['products', page],
       queryFn: () => getProducts(page),
       placeholderData: keepPreviousData,
       retry: 1,
       staleTime: 1000 * 60 * 5 // 5 minutos
    })


    const {dispatch} = useCart()

    const addToCart = (product: Product) => {
        const item: CartItem = {
            id: product.id,
            title: product.title,
            price: typeof product.price === 'number' ? product.price : 0,
            image: product.image || product.thumbnail || (product.images && product.images[0]) || 'https://via.placeholder.com/300x200?text=No+Image',
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
                {isLoading && (
                    <div className="col-span-4 text-center">
                        <p className="text-xl font-semibold">Loading products...</p>
                    </div>
                )}
                
                {error && (
                    <div className="col-span-4 text-center">
                        <p className="text-red-500 text-xl font-semibold">
                            Error: {error instanceof Error ? error.message : 'Failed to load products'}
                        </p>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Try Again
                        </button>
                    </div>
                )}
                
                {data?.map((product: Product) => ( 
                    <div key={product.id} className="products-container__products--product h-[500px] flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 bg-gray-900">
                        <div className="relative h-48 w-full overflow-hidden">
                            <img 
                                src={product.image || product.thumbnail || (product.images && product.images[0]) || 'https://via.placeholder.com/300x200?text=No+Image'}
                                alt={product.title} 
                                className="products-container__products--product-img object-cover h-full w-full bg-gray-100" 
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                    target.onerror = null;
                                }}
                            />
                        </div>
                        <div className="info-product flex flex-col justify-between items-center gap-2 p-4 flex-grow">
                            <h2 className="info-product__title text-md font-bold text-center text-white line-clamp-2">{product.title}</h2>
                            <p className="info-product__category text-sm text-center text-white font-bold">{product.category}</p>
                            <p className="info-product__description text-sm text-center text-white line-clamp-3">{product.description}</p>
                            <p className="info-product__price text-lg font-bold text-center text-white">Price: ${product.price}</p>
                           
                            <button 
                                className="info-product__button bg-gray-400 text-white px-4 py-2 cursor-pointer hover:bg-gray-500 transition-all duration-300 hover:font-bold w-full mt-auto" 
                                onClick={() => addToCart(product)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="products-container__button bg-gray-400 text-white px-4 py-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 hover:font-bold rounded-md"
             onClick={() => setPage(page + 1)}
             disabled={isFetching}
             >Load more</button>
        </div>
    )
}
