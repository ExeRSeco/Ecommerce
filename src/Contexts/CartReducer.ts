import { CartAction, CartState } from "../Types/types"



export const initialState = {
    cartItems: []
}

export const cartReducer = (state: CartState, action: CartAction) => {  

   

    switch(action.type) {
        case 'CLEAR_CART': {
            return {
                ...state,
                cartItems: []
            }
        }
        case 'ADD_TO_CART': {
            const {id} = action.payload
           
            //check if the item is already in the cart
            const existingItem = state.cartItems.find((item) => item.id === id)

            if(existingItem) {
                const updatedItems = state.cartItems.map((item) => 
                    item.id === id 
                        ? {...existingItem, quantity: existingItem.quantity + 1} 
                        : item
                );
                return {
                    ...state,
                    cartItems: updatedItems
                }
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                    image: action.payload.image || 'https://via.placeholder.com/300x200?text=No+Image'
                }
                const updatedItems = [...state.cartItems, newItem];
                return {
                    ...state,
                    cartItems: updatedItems
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
