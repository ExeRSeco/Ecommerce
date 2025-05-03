import { useCart } from "../../Hooks/useCartContext"
import { useCheckout } from "../../Contexts/CheckoutContext"
import { useModalContext } from "../../Contexts/ModalContext"
import { Link } from "react-router-dom"
import { CartItem } from "../../Types/types"

export const CartTable = () => {
    const {state, dispatch} = useCart()
    const { isCheckout } = useCheckout()
    const { setState: setModalState } = useModalContext()

    const total = () => {
        const total = state.cartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity,0)
        return total
    }
    
    const handleCheckout = () => {
        setModalState(false)
    }
   
    const clearCart = () => {
        dispatch({type: "CLEAR_CART", payload: {} as CartItem})     
    }
    
    return (
        <div className={`cart-table-container ${isCheckout ? 'bg-white shadow-lg rounded-lg' : ''}`}>
            <table className="w-full">
                <thead className={`${isCheckout ? 'bg-white' : 'bg-gray-900'} text-gray-900 p-4 rounded-t-md`}>
                    <tr className="text-center text-sm">
                        <th className="p-4">Name</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Delete</th>
                        <th className="p-4">Quantity</th>
                        <th className="p-4">Add</th>
                    </tr>
                </thead>
                <tbody className="border-b border-gray-700 text-sm">
                    {state.cartItems.map((item) => (
                        <tr key={item.id} className={`border-b ${isCheckout ? 'border-gray-200 hover:bg-gray-100' : 'border-gray-700 hover:bg-blue-500 hover:text-white'} text-center transition-all duration-300 cursor-pointer`}>
                            <td className="p-4">
                                <img src={item.image} alt={item.title} className="w-10 h-10 rounded-full" />
                            </td>
                            <td className="p-4">
                                <p>{item.price}</p>
                            </td>
                            <td className="p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-all duration-300 cursor-pointer" onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: item})}>-1</button>
                            </td>
                            <td className="p-4">
                                <p>{item.quantity}</p>
                            </td>
                            <td className="p-4">
                                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-all duration-300 cursor-pointer" onClick={() => dispatch({type: 'ADD_TO_CART', payload: item})}>+1</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={`flex justify-between items-center ${isCheckout ? 'bg-white border-t border-gray-200 shadow-lg' : 'bg-gray-900  text-white'} p-4 rounded-b-md`}>
                <p className="text-lg font-bold">Total: ${total()}</p>
                <div className="flex gap-4">
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-all duration-300 cursor-pointer" onClick={clearCart}>Clear Cart</button>
                    {!isCheckout && state.cartItems.length > 0 && (
                        <Link to="/checkout" onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all duration-300 cursor-pointer">Checkout</Link>
                    )}
                    
                </div>
            </div>
        </div>
    )
}
