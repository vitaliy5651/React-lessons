export enum ActionType{
    Add_To_Cart = 'Add_To_Cart',
}

export type AddToCartAction = {
    type: ActionType.Add_To_Cart,
    payload: any
}




export type CartAction = AddToCartAction