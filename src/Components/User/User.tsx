import React, { useState } from "react";
import { SearchProduct } from "../../actions/products.actions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Loader from "../loader/loader";
import GetButton from "../Mybutton";
import SingleItem from "../ShowItems/SingleItem";
import styles from "./User.css"

interface UserPropsType {
    isAdmin: boolean
}
const User: React.FC<UserPropsType> = (props) => {
    const [ item, setItem ] = useState('')
    const products = useAppSelector((state) => state.fetchProductsReducer)
    const dispatch = useAppDispatch()

    return(
    <div className="User" style={styles}>
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

