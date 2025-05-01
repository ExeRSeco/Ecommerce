import { useReducer, useEffect } from "react"
import { cartReducer, initialState } from "./CartReducer"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    // Cargar el estado inicial desde localStorage
    const loadInitialState = () => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : initialState
    }

    const [state, dispatch] = useReducer(cartReducer, loadInitialState())

    // Guardar en localStorage cada vez que cambie el estado
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state))
    }, [state])

    return (
        <CartContext.Provider value={{state, dispatch}}> 
            {children}
        </CartContext.Provider>
    )
}
