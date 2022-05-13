import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from "./reducers/profile.reducer";
import fetchProductsReducer from "./reducers/products.reducer";
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
    fetchProductsReducer,
    ProfileReducer
})
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export default store