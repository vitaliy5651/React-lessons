

const initialState = {
    initialNews: [],
    news: [],
    error: null,
    isLoaded: false
}

export default function fetchNewsReducer(state = initialState, action){
    switch (action.type){
        case 'fetch_error':
            return {error: action.error}
        case 'fetch_success':
            return {news: action.promise, isLoaded: !state.isLoaded, initialNews: [...action.promise]}
        case 'Reverse_News':
            return {...state, news: action.result.reverse()}
        case 'Return_initialState':
            return {...state, news: state.initialNews}
        case 'Success_Search':
            return {...state, news: state.news.filter((el) => el.title.toLowerCase().includes(action.searchNew.toLowerCase()))}
        case 'ADD_NEW':
            return {...state, news: [action.result,...state.news]}
        default:
            return state
    }
}