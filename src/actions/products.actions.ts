import { IResult } from "../Components/FormComponent"
import { IElement } from "../Components/ShowItems/SingleItem"
import IData from "../thunk/products.thunk"

export enum ActionType{
    Set_Action = 'Set_Action',
    Delete_Action = 'Delete_Action',
    Update_Action = 'Update_Action',
    Send_To_Update_Action = 'Send_To_Update_Action',
    Add_Action = 'Add_Action',
    Search_Action = 'Search_Action'
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

export const SetProducts: (data: IData[]) => SetAction = (data) => { return {type: ActionType.Set_Action, payload: data}}

export const DeleteProducts: (el: IElement) => DeleteAction = (el) => { return {type: ActionType.Delete_Action, payload: el} }

export const  SendProductToUpdate: (el: IElement) => SendToUpdateAction = (el) => { return {type:ActionType.Send_To_Update_Action, payload: el} }

export const  AddProducts: (result: IResult) => AddAction = (result) => { return {type:ActionType.Add_Action, payload: result} }

export const UpdateProduct: (result: IResult) => UpdateAction = (result) => { return {type:ActionType.Update_Action, payload: result} }

export const SearchProduct: (item: string) => SearchAction = (item) => {return {type: ActionType.Search_Action, payload: item}}

export type ProductsAction = 
SetAction | DeleteAction | 
AddAction | UpdateAction |
SendToUpdateAction | SearchAction 