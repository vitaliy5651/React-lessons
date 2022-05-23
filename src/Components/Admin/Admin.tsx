import React from "react";
import Form from "../FormComponent";
import styles from './Admin.css'
import SingleItem from "../ShowItems/SingleItem";
import GetButton from "../Mybutton";
import Loader from "../loader/loader";
import { useAppDispatch, useAppSelector } from "../../hooks";
import ButtonsFilter from "./FilterButton";
import { BadSell, TopSell } from "../../actions/products.actions";

interface IAdmin{
    isAdmin: boolean
}

const Admin: React.FC<IAdmin> = ({isAdmin}: IAdmin) =>{
const products = useAppSelector((state) => state.fetchProductsReducer)

const dispatch = useAppDispatch()

    return (
        <div className="Admin">
            {<div className="PostProducts" style={styles}>
            <Form isCreate = {products.flag} />
            </div>}
            {products.btnFlag && <GetButton />}
            <ButtonsFilter value = {'Отфильтровать от самых продаваемых'} onClick = {() => {dispatch(TopSell())}}></ButtonsFilter>
            <ButtonsFilter value = {'Отфильтровать от самых непродаваемых'} onClick =  {() => {dispatch(BadSell())}}></ButtonsFilter>
            {products.isLoad ? <Loader/> : <SingleItem isAdmin = {isAdmin} /> }
        </div>
    )
}

export default Admin