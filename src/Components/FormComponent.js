import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ProductContext } from "../App";


const Form = (props) => {
    const productContext = useContext(ProductContext)
    const [title, setTitle ] = useState(productContext.productsState.el ? productContext.productsState.el.title : '');
    const [description, setDescription] = useState(productContext.productsState.el ? productContext.productsState.el.description : '');
    const [ imgPath, setImgPath] = useState(productContext.productsState.el ? productContext.productsState.el.urlToImg : '');
    function createProduct(e) {
        e.preventDefault();
        const result = { id: uuidv4(), title, description, urlToImg: imgPath };
        productContext.productsDispatch({type: 'Add_products', result})
        
    }
    function updateProduct(e) {
        e.preventDefault();
        const result = { id: productContext.productsState.el.id, title, description, urlToImg: imgPath };
        productContext.productsDispatch({type: 'Update_product', result})
    }
    return(
    <form className="update_product">
        <input
            value={title}
            className="input"
            type="text"
            placeholder="Введите название товара"
            onChange={(e) => {setTitle(e.target.value)}}
        />
        <input
            value={description}
            className="input"
            type="text"
            placeholder="Введите описание товара"
            onChange={(e) => {setDescription(e.target.value)}}
        />
        <input
            value={imgPath}
            className="input"
            type="text"
            placeholder="Вставьте ссылку на картинку вашего товара"
            onChange={(e) => setImgPath(e.target.value)}
        ></input>
        <button className="btn_submit" onClick={props.isCreate ? createProduct : updateProduct}>
            {props.isCreate ? 'Добавить товар' : 'Изменить товар'}
        </button>
    </form>
    )
}

export default Form