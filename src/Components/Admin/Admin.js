import React from "react";
import CreateItem from "../CreateItems/CreateItems";
import SingleItem from "../ShowItems/SingleItem";

const Admin = () =>{

    return (
        <div className="Admin">
            <CreateItem />
            <SingleItem/>
        </div>
    )
}

export default Admin