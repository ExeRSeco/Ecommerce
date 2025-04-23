
import { useCart } from "../../Hooks/useCartContext"



export const CartTable = () => {
  
 

    const {state, dispatch} = useCart()

    const total = () => {
        const total = state.cartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity,0)
        return total
    }



    
    return (
        <div className="cart-table-container">
        <table className="w-full">
        <thead className="bg-gray-900 text-white p-4 rounded-t-md">
            <tr className="text-center text-sm" >
                <th className="p-4">Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Delete</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Add</th>
            </tr>

        </thead>
        <tbody className="border-b border-gray-700 text-sm">
            {state.cartItems.map((item) => (
            <tr className="border-b border-gray-700 text-center hover:bg-blue-500 transition-all duration-300 cursor-pointer hover:text-white">
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
                    <button className="bg-green-600 text-white px-s4 py-2 rounded-md hover:bg-green-800 transition-all duration-300 cursor-pointer" onClick={() => dispatch({type: 'ADD_TO_CART', payload: item})}>+1</button>
                </td>
                
            </tr>
            ))}
        </tbody>
    </table>
            <div className="cart-modal-footer flex justify-between items-center bg-gray-900 text-white p-4 rounded-b-md ">
                <p className="text-lg font-bold" >Total: ${total()}</p>
        <div className="flex gap-4">
        <a className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-all duration-300 cursor-pointer">Clear Cart</a>
        {state.cartItems.length > 0 && (
        <a href="/checkout" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all duration-300 cursor-pointer">Checkout</a>
        )}
        </div>
    </div>
    </div>
    )
}
