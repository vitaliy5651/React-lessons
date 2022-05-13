import React from "react";
import Form from "../FormComponent";
import styles from './Admin.css'
import SingleItem from "../ShowItems/SingleItem";
import GetButton from "../Mybutton";
import { useSelector } from "react-redux";
import Loader from "../loader/loader";


const Admin = (props) =>{
const products = useSelector((state) => state.fetchProductsReducer)
    return (
        <div className="Admin">
            {<div className="PostProducts" style={styles}>
            <Form isCreate = {products.flag} />
            </div>}
            {products.btnFlag && <GetButton isProduct = {true} />}
            {products.isLoad ? <Loader/> : <SingleItem isAdmin = {props.isAdmin} /> }
        </div>
    )
}

export default Admin