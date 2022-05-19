import { ActionType, CartAction } from "../actions/cart.actions"

export const initialState = {
    item: {},
    CartItems: []
}


export default function CartItemsReducer(state = initialState,  action: CartAction){
    switch (action.type) {
        case ActionType.Add_To_Cart:
            return {...state}
        default: 
            return state
        }
}