import React from "react";
import Form from "../FormComponent";
import styles from './Admin.css'
import SingleItem from "../ShowItems/SingleItem";
import GetButton from "../Mybutton";
import Loader from "../loader/loader";
import { useAppSelector } from "../../hooks";

interface IAdmin{
    isAdmin: boolean
}

const Admin: React.FC<IAdmin> = ({isAdmin}: IAdmin) =>{
const products = useAppSelector((state) => state.fetchProductsReducer)


    return (
        <div className="Admin">
            {<div className="PostProducts" style={styles}>
            <Form isCreate = {products.flag} />
            </div>}
            {products.btnFlag && <GetButton />}
            {products.isLoad ? <Loader/> : <SingleItem isAdmin = {isAdmin} /> }
        </div>
    )
}

export default Admin