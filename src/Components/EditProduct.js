import React, { useContext, useState } from "react";
import styles from '../Components/CreateItems/CreateItems.css'
import { ProductContext } from "../App";


const Edit = () =>{
    const productContext = useContext(ProductContext)
const [title, setTitle ] = useState(productContext.productsState.el.title);
const [description, setDescription] = useState(productContext.productsState.el.description);
const [ imgPath, setImgPath] = useState(productContext.productsState.el.urlToImg);
function updateProduct(e) {
    e.preventDefault();
    const result = { id: productContext.productsState.el.id, title, description, urlToImg: imgPath };
    productContext.productsDispatch({type: 'Update_product', result})
}
return(
<div className="PostProduct" style={styles}>
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
        <button className="btn_submit" onClick={updateProduct}>
            Изменить товар
        </button>
    </form>
</div>
)
}

export default Edit