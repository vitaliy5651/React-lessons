import React, { useContext, useState } from "react";
import { ProductContext } from "../../App";
import { v4 as uuidv4 } from 'uuid';
import styles from './CreateItems.css'


const CreateItem = () => {
const productContext = useContext(ProductContext)
const [title, setTitle ] = useState("");
const [description, setDescription] = useState("");
const [ imgPath, setImgPath] = useState("");

function createProduct(e) {
    e.preventDefault();
    const result = { id: uuidv4(), title, description, urlToImg: imgPath };
    productContext.productsDispatch({type: 'Add_products', result})
}
return(
    <div className="PostProducts" style={styles}>
    <form className="create_product">
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
        <button className="btn_submit" onClick={createProduct}>
            Добавить товар
        </button>
    </form>
</div>
)
}

export default CreateItem