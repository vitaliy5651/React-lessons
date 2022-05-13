import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const products = useSelector((state) => state.fetchProductsReducer)
  const dispatch = useDispatch()
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imgPath, setImgPath] = useState();

  function createProduct(e) {
    e.preventDefault();
    const result = { id: uuidv4(), title, description, urlToImg: imgPath };
    dispatch({ type: "Add_products", result });
  }

  function updateProduct(e) {
    e.preventDefault();
    const result = {
      id: products.el.id,
      title,
      description,
      urlToImg: imgPath,
    };
    dispatch({ type: "Update_product", result });
  }

  useEffect(() => {
    setTitle(
      products.el === ""
        ? ""
        : products.el.title
    );
    setDescription(
      products.el === ""
        ? ""
        : products.el.description
    );
    setImgPath(
      products.el === ""
        ? ""
        : products.el.urlToImg
    );
  }, [products.el]);

  return (
    <form className="update_product">
      <input
        value={title || ''}
        className="input"
        type="text"
        placeholder="Введите название товара"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={description || ''}
        className="input"
        type="text"
        placeholder="Введите описание товара"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        value={imgPath || ''}
        className="input"
        type="text"
        placeholder="Вставьте ссылку на картинку вашего товара"
        onChange={(e) => setImgPath(e.target.value)}
      ></input>
      <button
        className="btn_submit"
        onClick={props.isCreate ? createProduct : updateProduct}
      >
        {props.isCreate ? "Добавить товар" : "Изменить товар"}
      </button>
    </form>
  );
};

export default Form;