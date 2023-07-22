import { ActionType, CartAction, Item } from "../actions/cart.actions"


interface ICartState {
    item: Item
    cartItems: Array<Item>,
}
export const initialState: ICartState = {
    item: {id: '', title: '', count:0},
    cartItems: [],
}


export default function CartItemsReducer(state = initialState,  action: CartAction): ICartState {
    switch (action.type) {
        case ActionType.Add_To_Cart:
            const matchItem = state.cartItems.find((item) => item.id === action.payload.id)
            if(matchItem){
                state.cartItems = state.cartItems.filter((item) => item.id !== matchItem.id)
                state.cartItems.push({...matchItem, count: matchItem.count + 1})
            }else{
                state.cartItems.push(action.payload)
            }
        return {...state}
        case ActionType.Set_Count:
            state.cartItems = state.cartItems.reduce((acc: Item[], curr: Item) => {
                if(action.payload.id === curr.id && action.payload.count === 0){
                    return acc
                }else if (action.payload.id === curr.id){
                    acc.push({...curr, count: action.payload.count})
                    return acc
                }else{
                    acc.push(curr)
                    return acc
                }
            }, [])
            return {...state}
        default: 
            return state
        }
}