import { useCart } from "../../Hooks/useCartContext"
import { useCheckout } from "../../Contexts/CheckoutContext"
import { useModalContext } from "../../Contexts/ModalContext"
import { Link } from "react-router-dom"
import { CartItem, Product } from "../../Types/types"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../Services/product"

export const CartTable = () => {
    const {state, dispatch} = useCart()
    const { isCheckout } = useCheckout()
    const { setState: setModalState } = useModalContext()

    const {data: products} = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts()
    })

    const cartItems = state.cartItems;
    const getProductInfo = (id: number) => products?.find((p: Product) => p.id === id);

    const getQuantity = (productId: number) => {
        const cartItem = state.cartItems.find((item: CartItem) => item.id === productId)
        return cartItem ? cartItem.quantity : 0
    }

    const total = () => {
        const total = state.cartItems.reduce((acc: number, item: CartItem) => {
            const price = Number(item.price) || 0;
            const quantity = Number(item.quantity) || 0;
            return acc + (price * quantity);
        }, 0);
        return total.toFixed(2);
    }
    
    const handleCheckout = () => {
        setModalState(false)
    }
   
    const clearCart = () => {
        dispatch({type: "CLEAR_CART", payload: {} as CartItem})     
    }
    
    return (
        <div className={`rounded-lg overflow-hidden ${isCheckout ? 'bg-white shadow-lg' : 'bg-gray-900'}`}>
            {/* Vista de escritorio */}
            <div className="hidden md:block">
                <table className="w-full">
                    <thead className={`${isCheckout ? 'bg-gray-50' : 'bg-gray-800'} text-gray-900`}>
                        <tr className="text-center text-sm text-white">
                            <th className="p-4 font-semibold">Name</th>
                            <th className="p-4 font-semibold">Price</th>
                            <th className="p-4 font-semibold">Delete</th>
                            <th className="p-4 font-semibold">Quantity</th>
                            <th className="p-4 font-semibold">Add</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-white">
                        {cartItems.map((item: CartItem) => {
                            const productInfo = getProductInfo(item.id);
                            return (
                                <tr key={item.id} className={`${isCheckout ? 'hover:bg-gray-50' : 'hover:bg-gray-800'} transition-colors duration-200`}>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center">
                                            <img 
                                                src={item.image || productInfo?.thumbnail} 
                                                alt={item.title} 
                                                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200" 
                                            />
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <p className="font-medium">${item.price}</p>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex justify-center">
                                            <button 
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md transition-colors duration-200"
                                                onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: item})}
                                            >
                                                -1
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="font-medium">{getQuantity(item.id)}</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex justify-center">
                                            <button 
                                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md transition-colors duration-200"
                                                onClick={() => dispatch({type: 'ADD_TO_CART', payload: item})}
                                            >
                                                +1
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Vista móvil */}
            <div className="md:hidden divide-y divide-gray-700">
                {cartItems.map((item: CartItem) => {
                    const productInfo = getProductInfo(item.id);
                    return (
                        <div key={item.id} className={`p-4 ${isCheckout ? 'bg-white' : 'bg-gray-800'}`}>
                            <div className="flex items-center gap-4 mb-4">
                                <img 
                                    src={item.image || productInfo?.thumbnail} 
                                    alt={item.title} 
                                    className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200" 
                                />
                                <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-lg font-medium">${item.price}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <button 
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md transition-colors duration-200"
                                        onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: item})}
                                    >
                                        -1
                                    </button>
                                    <span className="font-bold text-lg">{getQuantity(item.id)}</span>
                                    <button 
                                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md transition-colors duration-200"
                                        onClick={() => dispatch({type: 'ADD_TO_CART', payload: item})}
                                    >
                                        +1
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={`p-4 ${isCheckout ? 'bg-gray-50 border-t border-gray-200' : 'bg-gray-800'}`}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xl font-bold">Total: ${total()}</p>
                    <div className="flex gap-3">
                        <button 
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                        {!isCheckout && state.cartItems.length > 0 && (
                            <Link 
                                to="/checkout" 
                                onClick={handleCheckout} 
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
                            >
                                Checkout
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
