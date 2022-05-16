import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateUser } from "../../actions/users.action";
import InputProfile from "./InputProfile";

const FormProfile = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cartNumber, setCartNumber] = useState("");
  const dispatch = useDispatch();


  const updateUser = (e) => {
    e.preventDefault();
    const result = { name, surname, cartNumber };
    dispatch(UpdateUser(result));
  }


  return (
    <form className="update_profile">
      <InputProfile
        isName = {true}
        name={name}
        setValue = {setName}
      />
      <InputProfile
        isSurname = {true}
        surname={surname}
        setValue = {setSurname}
      />
      <InputProfile
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
