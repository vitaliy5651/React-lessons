import React, { useState } from "react";
import { UpdateUser } from "../../actions/users.action";
import { useAppDispatch } from "../../hooks";
import InputProfile from "./InputProfile";

export interface IUser {
  name: string,
  surname: string,
  cartNumber: string
}
const FormProfile = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cartNumber, setCartNumber] = useState('');
  const dispatch = useAppDispatch()


  const updateUser = (e: any) => {
    e.preventDefault();
    const user: IUser = { name, surname, cartNumber };
    dispatch(UpdateUser(user));
  }


  return (
    <form className="update_profile">
      <InputProfile
        placeholder = 'Введите новое имя'
        name={name}
        setValue = {setName}
      />
      <InputProfile
        placeholder = 'Введите новую фамилию'
        isSurname = {true}
        surname={surname}
        setValue = {setSurname}
      />
      <InputProfile
        placeholder = 'Введите новый номер карты'
        isCartNumber={true}
        cartNumber = {cartNumber}
        setValue = {setCartNumber}
        />
      <button className="btn_submit" onClick={updateUser}>
        Изменить данные
      </button>
    </form>
  );
};

export default FormProfile;
