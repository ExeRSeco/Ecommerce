
import { useCart } from "../../Hooks/useCartContext";
import { CartItem } from "../../Types/types";
import { MercadoPago } from "./MercadoPago";
import { PayInputs } from "./PayInputs";
import { Transfer } from "./Transfer";
import { useState } from "react";
    

export const PayMethods = () => {
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
   
    const handleMethodChange = (method: string) => {
        setSelectedMethod(selectedMethod === method ? null : method);
    };

    const {dispatch} = useCart()

    const clearCart = () => {
        dispatch({type: "CLEAR_CART", payload: {} as CartItem})     
    }
    

    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-2xl font-bold text-center">Pay Methods</h1>
            <div className="flex flex-col gap-4 items-center justify-center">
               <div className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    checked={selectedMethod === 'creditCard'}
                    onChange={() => handleMethodChange('creditCard')}
                />
                <label className="text-sm text-gray-900 font-bold">Credit Card</label>
               </div>
               <div className={`transition-all duration-500 ease-in-out ${selectedMethod === 'creditCard' ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <PayInputs />
               </div>
               
               <div className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    checked={selectedMethod === 'transfer'}
                    onChange={() => handleMethodChange('transfer')}
                />
                <label className="text-sm text-gray-900 font-bold">Transfer</label>
               </div>
               <div className={`transition-all duration-500 ease-in-out ${selectedMethod === 'transfer' ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <Transfer />
               </div>
               
               <div className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    checked={selectedMethod === 'mercadoPago'}
                    onChange={() => handleMethodChange('mercadoPago')}
                />
                <label className="text-sm text-gray-900 font-bold">Mercado Pago</label>
               </div>
               <div className={`transition-all duration-500 ease-in-out ${selectedMethod === 'mercadoPago' ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <MercadoPago />
               </div>
               {selectedMethod && (
                <button className="bg-blue-500 text-white p-2 rounded-md w-[300px] mb-2 hover:bg-blue-600 transition-all duration-300 cursor-pointer font-bold" type="submit" onClick={clearCart} >Pay</button>
               )}
            </div>

        </div>
    )
}
