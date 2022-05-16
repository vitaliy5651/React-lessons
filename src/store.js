import { legacy_createStore, combineReducers } from "redux";
import fetchNewsReducer from "./reducers/news.reducer";

export const rootReducer = combineReducers({
    fetchNewsReducer
})
const store = legacy_createStore(rootReducer)
export default store