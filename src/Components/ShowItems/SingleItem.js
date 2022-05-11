import React, { useContext } from "react";
import { ProductContext } from "../../App";

import styles from './SingleItem.css'

//productContext.productsState.items
const SingleItem = () => {
    const productContext = useContext(ProductContext)

    function changeProduct(el){
        console.log(el)
    }
    return(
        productContext.productsState.items.map((el) => {
            return(
            <div className="single_item" key={el.id} style={styles}>
            <div className="item_title">{el.title}</div>
            <div className="item_image">
            <img alt="img" className="item_image" src={el.urlToImg}/>
            </div>
            <div className="item_description">{el.description}</div>
            <div className="btn">
            <button className="delete_item" onClick={() => {productContext.productsDispatch({type: 'delete_product', id: el.id})}}>delete</button>
            <button className="change_item" onClick={() => {changeProduct(el)}}>change</button>
            </div>
            </div>
            )
        }
        )
    )
}

export default SingleItem