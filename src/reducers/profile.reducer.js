export const initialState = {
    users:[],
    err: null,
    isAuth: false
}

export default function ProfileReducer(state = initialState, action){
    switch(action.type){
        case 'Set_Err':
            return {
                ...state,
                err: action.data
            }
        case 'Set_Users':
            return {
                ...state,
                users: action.data
            }
        case 'Update_User':
            return {
                ...state,
                users: action.result
            }
        case 'Check_Auth':
            return {
                ...state,
                isAuth: !action.isAuth
            }
        default: 
        return state
    }
}

