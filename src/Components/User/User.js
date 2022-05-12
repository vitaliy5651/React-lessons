import React, { useContext, useState } from "react";
import { ProductContext } from "../../App";
import SingleItem from "../ShowItems/SingleItem";

const User = (props) => {
    const productContext = useContext(ProductContext)
    const [ item, setItem ] = useState('')

    return(
    <div className="User">
        <input
            className="search_product"
            type="text"
            placeholder="Введите название товара"
            onChange={(e) => {setItem(e.target.value)}}  >
        </input>
        <button className="btn_search" onClick={() => {productContext.productsDispatch({type: 'SearchProduct', item})}}>Найти товар</button>
        <SingleItem isAdmin = {props.isAdmin}/>
    </div>
    )
}

export default User