import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchProduct } from "../../actions/products.actions";
import Loader from "../loader/loader";
import GetButton from "../Mybutton";
import SingleItem from "../ShowItems/SingleItem";

const User = (props) => {
    const [ item, setItem ] = useState('')
    const products = useSelector((state) => state.fetchProductsReducer)
    const dispatch = useDispatch()

    return(
    <div className="User">
        <input
            className="search_product"
            type="text"
            placeholder="Введите название товара"
            onChange={(e) => {setItem(e.target.value)}}  >
        </input>
        <button className="btn_search" onClick={() => {dispatch(SearchProduct(item))}}>Найти товар</button>
        {products.btnFlag && <GetButton />}
        {products.isLoad ? <Loader/> : <SingleItem isAdmin = {props.isAdmin} /> }
    </div>
    )
}

export default User