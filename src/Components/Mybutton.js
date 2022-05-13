import React from "react";
import { useDispatch} from "react-redux";
import { allProducts } from "../thunk/products.thunk";
import { allUsers } from "../thunk/users.thunk";



const GetButton = (props) => {
 
  const dispatch = useDispatch()
  const handleGetProducts = () => {
    dispatch(allProducts());
  };
  const handleGetUsers = () => {
    dispatch(allUsers())
  }
  return (
    <button className="Get_items" onClick={props.isProducts ? handleGetProducts : handleGetUsers}>
      { props.isProducts ? 'Получить все товары' : 'Получить всех пользователей'}
    </button>
  );
};

export default GetButton;
