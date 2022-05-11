import { legacy_createStore, combineReducers } from "redux";
import fetchProductsReducer from "./reducers/products.reducers";

export const rootReducer = combineReducers({
    fetchProductsReducer
})
const store = legacy_createStore(rootReducer)
export default store