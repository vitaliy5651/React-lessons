import React from "react";
import CartButtons from "./CartButtons";
import styles from './Cart.css'
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { SetCount } from "../../actions/cart.actions";
import { AddRating } from "../../actions/products.actions";

export interface ICartItems{
    title: string,
}
const Cart = () => {
const CartProduct = useAppSelector((state) => state.CartItemsReducer)
const dispatch = useAppDispatch()
    return( 
    <div className="Cart_component" style={styles}>
        {CartProduct.CartItems.map((el) =>  {
            console.log(el.count)
            return el.title && <div className="panel" key={uuidv4()}>
            {el.title}
            <div className="Cart_actions">
            <CartButtons value = {'+'} className = {'AddOne'} onClick = {() => {
                dispatch(SetCount({id: el.id, title: el.title, count: el.count + 1}))
                dispatch(AddRating({title: el.title, Rating: 1}))
                }}/>
            {el.count}
            <CartButtons value = {'-'} className = {'RemoveOne'} onClick = {() => {
                dispatch(SetCount({id: el.id, title: el.title, count: el.count - 1}))
                dispatch(AddRating({title: el.title, Rating: -1}))
                }}/>
            </div>
        </div>})}
    </div>
    )
}

export default Cart