import React from "react";
import CartButtons from "./CartButtons";
import styles from './Cart.css'

export interface ICartItems{
    title: string,
    
}
const Cart = () => {

    return( 
    <div className="Cart_component" style={styles}>
        <div className="panel">Old name</div>
        <div className="Cart_info"></div>
        <div className="Cart_actions">
            <CartButtons className = {'AddOne'}/>
            <CartButtons className = {'RemoveOne'} />
        </div>
    </div>
    )
}

export default Cart