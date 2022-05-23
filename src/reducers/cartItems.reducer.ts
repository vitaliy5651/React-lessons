import { isTemplateExpression } from "typescript"
import { ActionType, CartAction, Item } from "../actions/cart.actions"


interface ICartState {
    item: Item
    CartItems: Array<Item>,
}
export const initialState: ICartState = {
    item: {id: '', title: '', count:0},
    CartItems: [],
}


export default function CartItemsReducer(state = initialState,  action: CartAction): ICartState {
    switch (action.type) {
        case ActionType.Add_To_Cart:
            if(state.CartItems.length === 0){
                state.CartItems.push(action.payload)
            }else{
                state.CartItems.map((el) => {
                    console.log(el)
                    if(el.id === action.payload.id){
                        el.count +=action.payload.count
                        return el
                    }else{
                        return state.CartItems.push(action.payload)
                }})
            }
        return {...state, CartItems: state.CartItems}
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