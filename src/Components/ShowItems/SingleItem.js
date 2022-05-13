import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";


import styles from './SingleItem.css'
import { DeleteProducts, SendProductToUpdate } from "../../actions/products.actions";

const SingleItem = (props) => {
    const products = useSelector((state) => state.fetchProductsReducer)
    const dispatch = useDispatch()

    return(
        products.items.map((el) => {
            return(
            <div className="single_item" key={uuidv4("")} style={styles}>
            <div className="item_title">{el.title}</div>
            <div className="item_image">
            <img alt="img" className="item_image" src={el.urlToImg}/>
            </div>
            <div className="item_description">{el.description}</div>
            {props.isAdmin && <div className="btn">
            <button className="delete_item" onClick={() => {dispatch(DeleteProducts(el))}}>delete</button>
            <button className="change_item" onClick={() => {dispatch(SendProductToUpdate(el))}}>change</button>
            </div>}
            </div>
            )
        }
        )
    )
}

export default SingleItem