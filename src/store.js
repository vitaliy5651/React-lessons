import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from "./reducers/profile.reducer";
import fetchProductsReducer from "./reducers/products.reducer";

export const rootReducer = combineReducers({
    fetchProductsReducer,
    ProfileReducer
})
const store = legacy_createStore(rootReducer, applyMiddleware())
export default store