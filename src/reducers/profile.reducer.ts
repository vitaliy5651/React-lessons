import { ActionType, UsersActions } from "../actions/users.action"

export const initialState = {
    users:{
        name: 'Григорий',
        surname: 'Кандратьевич',
        cartNumber: '1234567891234567'
    }
}

export default function ProfileReducer(state = initialState, action: UsersActions){
    switch(action.type){
        /*case 'Set_Users':
            return {
                ...state,
                users: action.data
            }*/
        case ActionType.Update_Action:
            return {
                ...state,
                users: action.payload
            }
        default: 
        return state
    }
}

