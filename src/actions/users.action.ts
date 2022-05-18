//export const SetUsers = (data) => {return {type: 'Set_Users', data}}

import { IUser } from "../Components/Profile/formProfile"

export enum ActionType{
    Update_Action = 'Update_Action'
}

export type UpdateAction = {
    type: ActionType.Update_Action,
    payload: IUser
}




export const UpdateUser: (user: IUser) => UpdateAction = (user) => {return {type: ActionType.Update_Action, payload: user}}

export type UsersActions = UpdateAction