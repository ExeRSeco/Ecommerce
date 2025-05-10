import { toast, Toaster } from "sonner";
import { useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { CartItem } from "../../Types/types";
import { useCart } from "../../Hooks/useCartContext";
import { getProducts } from "../../Services/product";
import { useFilters } from "../../Context/FilterContext";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image?: string;
    thumbnail?: string;
    images?: string[];
}
interface FiltersProps {
    onFilterChange: (hasFilters: boolean) => void;
}

export const ProductsFiltered = ({ onFilterChange }: FiltersProps) => {
    const { minPrice, maxPrice, selectedCategory, setMinPrice, setMaxPrice, setSelectedCategory } = useFilters();
    const [page, setPage] = useState(1);
    const [accumulatedProducts, setAccumulatedProducts] = useState<Product[]>([]);

    const { data, isLoading, error, isFetching } = useQuery<Product[], Error>({
        queryKey: ['products', page],
        queryFn: () => getProducts(page),
        staleTime: 1000 * 60 * 5, // 5 minutos
        placeholderData: keepPreviousData,
        retry: 1,
    });

    useEffect(() => {
        if (data) {
            setAccumulatedProducts(prev => {
                const newProducts = data.filter(newProduct => 
                    !prev.some(existingProduct => existingProduct.id === newProduct.id)
                );
                return [...prev, ...newProducts];
            });
        }
    }, [data]);

    // Filtrar productos
    const filteredProducts = accumulatedProducts.filter((product: Product) => {
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesPrice && matchesCategory;
    });

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

   

    useEffect(() => {
        const hasActiveFilters = minPrice > 0 || maxPrice < 1000 || selectedCategory !== 'all';
        onFilterChange(hasActiveFilters);
    }, [minPrice, maxPrice, selectedCategory, onFilterChange]);

    const categories = accumulatedProducts 
        ? [...new Set(accumulatedProducts.map((p: Product) => p.category))]
        : [];

    return (
        <div className="products-container-section flex flex-col items-center justify-center gap-4 mb-10">
            <Toaster richColors />
            <div className="products-container__title w-full h-full flex justify-center items-center mb-4">
                <h1 className="products-container__title--title text-2xl font-bold text-center">Products</h1>
            </div>
            <div className="filters-container w-full max-w-4xl mb-6 p-4 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="filter-group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Precio Mínimo</label>
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="w-full p-2 border rounded-md"
                        min="0"
                    />
                </div>
                <div className="filter-group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Precio Máximo</label>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full p-2 border rounded-md"
                        min="0"
                    />
                </div>
                <div className="filter-group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="all">Todas las categorías</option>
                         {categories?.map((category) => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
            <div className="products-container__products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center items-center">
                {isLoading && page === 1 && (
                    <div className="col-span-4 text-center">
                        <p className="text-xl font-semibold">Cargando productos...</p>
                    </div>
                )}
                
                {error && (
                    <div className="col-span-4 text-center">
                        <p className="text-red-500 text-xl font-semibold">
                            Error: {error.message}
                        </p>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Intentar de nuevo
                        </button>
                    </div>
                )}
                
                {filteredProducts.map((product: Product) => ( 
                    <div key={product.id} className="products-container__products--product flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 bg-white h-[500px]">
                        <div className="relative h-48 w-full overflow-hidden">
                            <img 
                                src={product.image || product.thumbnail || (product.images && product.images[0]) || 'https://via.placeholder.com/300x200?text=No+Image'}
                                alt={product.title} 
                                className="products-container__products--product-img object-cover h-full w-full bg-white" 
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                    target.onerror = null;
                                }}
                            />
                        </div>
                        <div className="info-product flex flex-col justify-between items-center gap-2 p-4 flex-grow">
                            <h2 className="info-product__title text-md font-bold text-center text-gray-900 line-clamp-2">{product.title}</h2>
                            <p className="info-product__category text-sm text-center text-gray-900 font-bold">{product.category}</p>
                            <p className="info-product__description text-sm text-center text-gray-900 line-clamp-3">{product.description}</p>
                            <p className="info-product__price text-lg font-bold text-center text-gray-900">Precio: ${product.price}</p>
                            <p className="info-product__category text-sm text-center text-gray-900">Categoría: {product.category}</p>
                           
                            <button 
                                className="info-product__button bg-blue-400 text-white px-4 py-2 cursor-pointer hover:bg-blue-500 transition-all duration-300 hover:font-bold w-full mt-auto rounded-md" 
                                onClick={() => addToCart(product)}
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                className="products-container__button bg-gray-400 text-white px-4 py-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 hover:font-bold rounded-md"
                onClick={() => setPage(page + 1)}
                disabled={isFetching}
            >
                {isFetching ? 'Cargando...' : 'Cargar más'}
            </button>
        </div>
    );
}
