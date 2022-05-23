export interface Item{
    title: string,
    count: number,
    id: string
}
export enum ActionType{
    Add_To_Cart = 'Add_To_Cart',
    Set_Count = 'Set_Count'
}

export type AddToCartAction = {
    type: ActionType.Add_To_Cart,
    payload: Item
}

export type SetCountProduct = {
    type: ActionType.Set_Count
    payload: Item
}

export const AddProductToCart: (el: Item) => AddToCartAction = (el) => {return {type: ActionType.Add_To_Cart, payload: el}}

export const SetCount: (el: Item) => SetCountProduct = (el) => {return {type: ActionType.Set_Count, payload: el}}


export type CartAction = AddToCartAction | SetCountProduct