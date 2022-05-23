import { ActionType, UsersActions } from "../actions/users.action"

export const initialState = {
    users:{
        name: 'Григорий',
        surname: 'Кандратьевич',
        cartNumber: '1234567891234567'
    },
    role: 'User'
}

export default function ProfileReducer(state = initialState, action: UsersActions){
    switch(action.type){
        case ActionType.Change_Role:
            return {
                ...state,
                role: action.payload
            }
        case ActionType.Update_Action:
            return {
                ...state,
                users: action.payload
            }
        default: 
        return state
    }
}

