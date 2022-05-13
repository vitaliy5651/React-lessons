export const initialState = {
    users:[]
}

export default function ProfileReducer(state = initialState, action){
    switch(action.type){
        case 'Set_Users':
            return {users: action.data}
        case 'Update_User':
            return { users: action.result}
        default: 
        return state
    }
}

