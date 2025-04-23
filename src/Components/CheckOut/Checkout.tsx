import { CartTable } from "../CartTable/Table"

export const Checkout = () => {
    return (
        <div className="checkout-container ">
          <h2 className="checkout-container__title">Checkout</h2>
          <CartTable />
        </div>
    )
}
