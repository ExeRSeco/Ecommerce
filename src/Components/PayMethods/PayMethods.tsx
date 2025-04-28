import PaymentInputs from "./PayInputs";
import { Transfer } from "./Transfer";
    

export const PayMethods = () => {
   
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-2xl font-bold text-center">Pay Methods</h1>
            <div className="flex flex-col gap-4 items-center justify-center">
               <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="text-sm text-gray-900 font-bold">Credit Card</label>
               </div>
               <PaymentInputs />
               
               <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="text-sm text-gray-900 font-bold">Transfer</label>
               </div>
               <Transfer />
               <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="text-sm text-gray-900 font-bold">Mercado Pago</label>
                
               </div>
               <button className="bg-blue-500 text-white p-2 rounded-md w-[300px] mb-2 hover:bg-blue-600 transition-all duration-300 cursor-pointer font-bold" >Pay</button>
            </div>

        </div>
    )
}
