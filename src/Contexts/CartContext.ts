import {  CartAction, CartState } from "../Types/types";
import { createContext } from "react";

export const initialState: CartState = {
    cartItems: []
}

export const CartContext  = createContext<{
    state: CartState,
    dispatch: React.Dispatch<CartAction>
}>({
    state: initialState,
    dispatch: () => null
})


