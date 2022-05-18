import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { AddProducts, UpdateProduct } from "../actions/products.actions";
import { useAppSelector } from "../hooks";


export interface IResult {
  id: string,
  title: string,
  description: string,
  urlToImg: string
}

interface IForm{
  isCreate: boolean
}

const Form: React.FC<IForm> = (props) => {
  const products = useAppSelector((state) => state.fetchProductsReducer)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgPath, setImgPath] = useState('');

  function createProduct(e: any) {
    e.preventDefault();
    const result: IResult = {id: uuidv4(), title, description, urlToImg: imgPath };
    dispatch(AddProducts(result));
  }

  function updateProduct(e: any) {
    e.preventDefault();
    const result = {
      id: products.el.id,
      title,
      description,
      urlToImg: imgPath,
    };
    dispatch(UpdateProduct(result))
  }

  useEffect(() => {
    setTitle(
      products.el.title === ""
        ? ""
        : products.el.title
    );
    setDescription(
      products.el.description === ""
        ? ""
        : products.el.description
    );
    setImgPath(
      products.el.urlToImg === ""
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