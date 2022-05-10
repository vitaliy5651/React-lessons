

const initialState = {
    news: [],
    error: null,
    isLoaded: false
}

export default function fetchNewsReducer(state = initialState, action){
    switch (action.type){
        case 'fetch_error':
            return {error: action.error}
        case 'fetch_success':
            return {news: action.promise, isLoaded: !initialState.isLoaded}
        default:
            return state
    }
}