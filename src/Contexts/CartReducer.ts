import { CartAction, CartState } from "../Types/types"



export const initialState = {
    cartItems: []
}

export const cartReducer = (state: CartState, action: CartAction) => {  

   

    switch(action.type) {
        case 'ADD_TO_CART': {
                const {id} = action.payload
               
                //check if the item is already in the cart
                const existingItem = state.cartItems.find((item) => item.id === id)
                if(existingItem) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map((item) => item.id === id ? {...existingItem, quantity: existingItem.quantity + 1} : item)
                    }
                } else {
                    return {
                        ...state,
                        cartItems: [...state.cartItems, {...action.payload, quantity: 1}]
                    }
                }
                
            }
        case 'REMOVE_FROM_CART': {
            const {id: removingItemId} = action.payload

            const itemToRemove = state.cartItems.find((item) => item.id === removingItemId)

            if(itemToRemove?.quantity === 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== removingItemId)
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === removingItemId ? {...item, quantity: item.quantity - 1} : item)
                }
            }
        }
        
        default: {
            return state
        }
        
    }
}
