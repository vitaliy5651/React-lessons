import React, { useContext } from "react";
import { ProductContext } from "../../App";
import CreateItem from "../CreateItem";
import Edit from "../EditItem";
import SingleItem from "../ShowItems/SingleItem";

const Admin = (props) =>{
    const productContext = useContext(ProductContext)
    return (
        <div className="Admin">
            {productContext.productsState.flag ? <CreateItem /> : <Edit />}
            <SingleItem isAdmin = {props.isAdmin} />
        </div>
    )
}

export default Admin