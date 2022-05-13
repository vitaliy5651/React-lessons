import React from "react";
import Form from "../FormComponent";
import styles from './Admin.css'
import SingleItem from "../ShowItems/SingleItem";
import GetButton from "../Mybutton";
import { useSelector } from "react-redux";


const Admin = (props) =>{
const products = useSelector((state) => state.fetchProductsReducer)
    return (
        <div className="Admin">
            {<div className="PostProducts" style={styles}>
            <Form isCreate = {products.items.flag} />
            </div>}
            <GetButton />
            <SingleItem isAdmin = {props.isAdmin} />
        </div>
    )
}

export default Admin