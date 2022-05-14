import React from "react";
import { useDispatch} from "react-redux";
import { allProducts } from "../thunk/products.thunk";



const GetButton = (props) => {

  const dispatch = useDispatch()
  const handleGetProducts = () => {
    dispatch(allProducts());
  };
  return (
    <button className="Get_items" onClick={handleGetProducts}>
      Получить все товары
    </button>
  );
};

export default GetButton;
