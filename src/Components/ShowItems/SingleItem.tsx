import React, { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './SingleItem.css'
import { DeleteProducts, SendProductToUpdate } from "../../actions/products.actions";
import { useAppDispatch, useAppSelector } from "../../hooks";

export interface IElement{
    id: string,
    title: string,
    description: string,
    urlToImg: string
}

const SingleItem = ({isAdmin}: {isAdmin: boolean}) => {
    
    const products = useAppSelector((state) => state.fetchProductsReducer)
    const dispatch = useAppDispatch()

    return(
        <Fragment>
        {
        products.items.map((el: IElement) => {
            return(
            <div className="single_item" key={uuidv4()} style={styles}>
            <div className="item_title">{el.title}</div>
            <div className="item_image">
            <img alt="img" className="item_image" src={el.urlToImg}/>
            </div>
            <div className="item_description">{el.description}</div>
            {
            isAdmin && <div className="btn">
            <button className="param_item" onClick={() => {dispatch(DeleteProducts(el))}}>delete</button>
            <button className="param_item" onClick={() => {dispatch(SendProductToUpdate(el))}}>change</button>
            </div>
            }
            </div>
            )
        }
            )
        }
         </Fragment>
        )
}

export default SingleItem