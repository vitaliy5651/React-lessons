import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SingleItem from "../ShowItems/SingleItem";

const User = (props) => {
    const [ item, setItem ] = useState('')

    const dispatch = useDispatch()

    return(
    <div className="User">
        <input
            className="search_product"
            type="text"
            placeholder="Введите название товара"
            onChange={(e) => {setItem(e.target.value)}}  >
        </input>
        <button className="btn_search" onClick={() => {dispatch({type: 'SearchProduct', item})}}>Найти товар</button>
        <SingleItem isAdmin = {props.isAdmin}/>
    </div>
    )
}

export default User