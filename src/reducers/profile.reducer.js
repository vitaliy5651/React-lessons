export const initialState = {
    user:{
            name: 'Елена',
            surname: 'Шапошникова',
            cartNumber: 8888888888888
        }
}

export default function ProfileReducer(state = initialState, action){
    switch(action.type){
        case 'Update_user':
            return{user: action.result}
        default: 
        return state
    }
}

