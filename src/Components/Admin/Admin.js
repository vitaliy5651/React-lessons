import React, { useContext } from "react";
import { ProductContext } from "../../App";
import Form from "../FormComponent";
import styles from './Admin.css'
//import CreateItem from "../CreateItem";
//import Edit from "../EditItem";
import SingleItem from "../ShowItems/SingleItem";

const Admin = (props) =>{
    const productContext = useContext(ProductContext)
    return (
        <div className="Admin">
            {<div className="PostProducts" style={styles}>
            <Form isCreate = {productContext.productsState.flag} />
            </div>}
            <SingleItem isAdmin = {props.isAdmin} />
        </div>
    )
}

export default Admin