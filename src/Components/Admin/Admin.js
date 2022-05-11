import React, { useContext } from "react";
import { ProductContext } from "../../App";
import CreateItem from "../CreateItems/CreateItems";
import Edit from "../EditProduct";
import SingleItem from "../ShowItems/SingleItem";

const Admin = () =>{
    const productContext = useContext(ProductContext)
    return (
        <div className="Admin">
            {productContext.productsState.flag ? <CreateItem /> : <Edit />}
            <SingleItem/>
        </div>
    )
}

export default Admin