import React from "react";
import { useAppDispatch } from "../hooks";
import { allProducts } from "../thunk/products.thunk";



const GetButton = () => {
 
  const dispatch = useAppDispatch()
  const handleGetProducts = () => {
    dispatch(allProducts())
  };
  return (
    <button className="Get_items" onClick={handleGetProducts}>
      {'Получить все товары'}
    </button>
  );
};

export default GetButton;
