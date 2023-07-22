import React from "react";
import CartButtons from "./CartButtons";
import styles from './Cart.css'
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Item, SetCount } from "../../actions/cart.actions";
import { AddRating } from "../../actions/products.actions";

export interface ICartItems{
    title: string,
}
const Cart = () => {
const CartProduct = useAppSelector((state) => state.CartItemsReducer)
const dispatch = useAppDispatch()

    const handlerActions = (type: string, data: Item) => () => {
        switch (type) {
            case 'setCount':
                dispatch(SetCount({id: data.id, title: data.title, count: data.count + 1}))
                dispatch(AddRating({title: data.title, Rating: 1}))
                break;
            case 'removeCount':
                dispatch(SetCount({id: data.id, title: data.title, count: data.count - 1}))
                dispatch(AddRating({title: data.title, Rating: -1}))
                break;
            default:
                break;
        }
    }

    return( 
    <div className="Cart_component" style={styles}>
        {CartProduct.cartItems.map((el) =>  {
            return el.title && <div className="panel" key={uuidv4()}>
            {el.title}
            <div className="Cart_actions">
            <CartButtons value = {'+'} className = {'AddOne'} onClick = {handlerActions('setCount', el)}/>
            {el.count}
            <CartButtons value = {'-'} className = {'RemoveOne'} onClick = {handlerActions('removeCount', el)}/>
            </div>
        </div>})}
    </div>
    )
}

export default Cart