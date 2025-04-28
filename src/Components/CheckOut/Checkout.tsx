import { CheckoutProvider } from "../../Contexts/CheckoutContext"
import { CartTable } from "../CartTable/Table"
import { CreditCard } from "../CreditCard/CreditCard"

export const Checkout = () => {
//   TODO: Add a form to checkout
    return (
        <CheckoutProvider>
            <div className="container mx-auto p-4 min-h-screen pb-20">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-900">Checkout</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-4 rounded-lg min-h-[500px] mb-8">
                    <div className="order-2 md:order-1 overflow-y-auto max-h-[800px]">
                        <CartTable />
                    </div>
                    <div className="order-1 md:order-2 overflow-y-auto max-h-[800px]">
                        <CreditCard />
                    </div>
                </div>
            </div>
        </CheckoutProvider>
    )
}
