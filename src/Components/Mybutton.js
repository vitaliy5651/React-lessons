import React from "react";
import { useDispatch} from "react-redux";
import { allProducts } from "../thunk/products.thunk";
import { allUsers } from "../thunk/users.thunk";



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
