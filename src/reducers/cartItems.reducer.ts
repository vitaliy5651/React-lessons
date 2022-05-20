import { ActionType, CartAction, Item } from "../actions/cart.actions"


interface ICartState {
    item: Item,
    CartItems: Array<Item>,
}
export const initialState: ICartState = {
    item: {title: '', count: 0},
    CartItems: [],
}


export default function CartItemsReducer(state = initialState,  action: CartAction): ICartState {
    switch (action.type) {
        case ActionType.Add_To_Cart:
            return {...state, item: action.payload, CartItems: [...state.CartItems, action.payload]}
        case ActionType.Set_Count:
            return {...state, CartItems: state.CartItems.map((el) => {
                if(el.title === action.payload.title){
                    el.count = action.payload.count
                }if(el.count === 0){
                    el.title = ''
                }
                return el
            })}
        default: 
            return state
        }
}