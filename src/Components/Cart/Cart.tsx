
import { CartModal } from "../Modals/CartModal"
import { useModalContext } from "../../Contexts/ModalContext"
import { CartTable } from "../CartTable/Table"


export const Cart = () => {
    const {setState} = useModalContext()
   
    
  




    return (
        <CartModal >
            
                <div className="cart-modal-header flex justify-between items-center bg-gray-900 text-white p-4 rounded-t-md">
                    <h4 className="text-xl font-bold text-white">Cart</h4>
                    <button onClick={() => setState(false)} className="text-2xl font-bold text-gray-500 hover:text-blue-600 transition-all duration-300 cursor-pointer">X</button>
                </div>
                <CartTable />
               

        </CartModal>

        
    )
}
