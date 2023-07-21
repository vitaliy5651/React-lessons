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
            const cartItems = state.cartItems.reduce((acc: Item[], curr: Item) => {
                console.log(action.payload)
                if(action.payload.id === curr.id){
                    curr = {...curr, count: curr.count++}
                }else{
                    acc.push(action.payload)
                }
                return acc
            }, [])
            console.log(state)
        return {...state, cartItems}
        case ActionType.Set_Count:
            return {...state, cartItems: state.cartItems.map((el) => {
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