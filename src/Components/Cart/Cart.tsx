import React from "react";
import CartButtons from "./CartButtons";
import styles from './Cart.css'
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { SetCount } from "../../actions/cart.actions";

export interface ICartItems{
    title: string,
}
const Cart = () => {
const CartProduct = useAppSelector((state) => state.CartItemsReducer)
const dispatch = useAppDispatch()
    return( 
    <div className="Cart_component" style={styles}>
        {CartProduct.CartItems.map((el) =>  {
            return el.title && <div className="panel" key={uuidv4()}>
            {el.title}
            <div className="Cart_actions">
            <CartButtons value = {'+'} className = {'AddOne'} onClick = {() => {dispatch(SetCount({title: el.title, count: el.count + 1}))}}/>
            {el.count}
            <CartButtons value = {'-'} className = {'RemoveOne'} onClick = {() => {dispatch(SetCount({title: el.title, count: el.count - 1}))}}/>
            </div>
        </div>})}
        <div className="Cart_info"></div>
    </div>
    )
}

export default Cart