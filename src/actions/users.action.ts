//export const SetUsers = (data) => {return {type: 'Set_Users', data}}

import { IUser } from "../Components/Profile/formProfile"

export enum ActionType{
    Update_Action = 'Update_Action',
    Change_Role = 'Change_Role',
    Change_Role_User = 'Change_Role_User'
}

export type UpdateAction = {
    type: ActionType.Update_Action,
    payload: IUser
}

export type ChangeRoleAction = {
    type: ActionType.Change_Role
    payload: boolean
}

export type ChangeRoleActionUser = {
    type: ActionType.Change_Role_User
    payload: boolean
}


export const UpdateUser: (user: IUser) => UpdateAction = (user) => {return {type: ActionType.Update_Action, payload: user}}

export const ChangeRole: (role: boolean) => ChangeRoleAction = (role) => {return {type: ActionType.Change_Role, payload: role}}

export const ChangeRoleUser: (role: boolean) => ChangeRoleActionUser = (role) => {return {type: ActionType.Change_Role_User, payload: role}}

export type UsersActions = UpdateAction | ChangeRoleAction | ChangeRoleActionUser