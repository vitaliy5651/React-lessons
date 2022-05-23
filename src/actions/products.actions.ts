import { IResult } from "../Components/FormComponent"
import { IElement } from "../Components/ShowItems/SingleItem"
import IData from "../thunk/products.thunk"



interface IRating{
    title: string,
    Rating: number,
}
export enum ActionType{
    Set_Action = 'Set_Action',
    Delete_Action = 'Delete_Action',
    Update_Action = 'Update_Action',
    Send_To_Update_Action = 'Send_To_Update_Action',
    Add_Action = 'Add_Action',
    Search_Action = 'Search_Action',
    AddRating = 'Add_Rating',
    FilterTopSell = 'Filter_Top_Sell',
    FilterBadSell = 'Filter_Bad_Sell'
}

export type SetAction = {
    type: ActionType.Set_Action,
    payload: IData[]
}

export type DeleteAction = {
    type: ActionType.Delete_Action,
    payload: IElement
}

export type SendToUpdateAction = {
    type: ActionType.Send_To_Update_Action,
    payload: IElement
}

export type AddAction = {
    type: ActionType.Add_Action,
    payload: IResult
}

export type UpdateAction = {
    type: ActionType.Update_Action,
    payload: IResult
}

export type SearchAction = {
    type: ActionType.Search_Action,
    payload: string
}

export type AddRatingAction = {
    type: ActionType.AddRating,
    payload: IRating
}
export type TopSellAction = {
    type: ActionType.FilterTopSell
}
export type BadSellAction = {
    type: ActionType.FilterBadSell
}


export const SetProducts: (data: IData[]) => SetAction = (data) => { return {type: ActionType.Set_Action, payload: data}}

export const DeleteProducts: (el: IElement) => DeleteAction = (el) => { return {type: ActionType.Delete_Action, payload: el} }

export const  SendProductToUpdate: (el: IElement) => SendToUpdateAction = (el) => { return {type:ActionType.Send_To_Update_Action, payload: el} }

export const  AddProducts: (result: IResult) => AddAction = (result) => { return {type:ActionType.Add_Action, payload: result} }

export const UpdateProduct: (result: IResult) => UpdateAction = (result) => { return {type:ActionType.Update_Action, payload: result} }

export const SearchProduct: (item: string) => SearchAction = (item) => {return {type: ActionType.Search_Action, payload: item}}

export const AddRating: (Rating: IRating) => AddRatingAction = (Rating) => {return {type: ActionType.AddRating, payload: Rating}}

export const TopSell: () => TopSellAction = () => {return {type: ActionType.FilterTopSell}}

export const BadSell: () => BadSellAction = () => {return {type: ActionType.FilterBadSell}}

export type ProductsAction = 
SetAction | DeleteAction | 
AddAction | UpdateAction |
SendToUpdateAction | SearchAction | AddRatingAction | TopSellAction | BadSellAction