import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from "./reducers/profile.reducer";
import fetchProductsReducer from "./reducers/products.reducer";
import CartItemsReducer from './reducers/cartItems.reducer'
import thunk from "redux-thunk"; 


export const rootReducer = combineReducers({
    fetchProductsReducer,
    ProfileReducer,
    CartItemsReducer
})
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch