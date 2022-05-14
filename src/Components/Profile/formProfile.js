import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateUser } from "../../actions/users.action";




const FormProfile = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [cartNumber, setCartNumber] = useState('')
    const dispatch = useDispatch()
    function updateUser (e){
        e.preventDefault();
        const result = { name, surname, cartNumber };
        dispatch(UpdateUser(result))
    }
    return(
<form className="update_profile">
        <input
            className="input"
            type="text"
            placeholder="Введите другое имя"
            onChange={(e) => {setName(e.target.value)}}
        />
        <input
            className="input"
            type="text"
            placeholder="Введите другую фамилию"
            onChange={(e) => {setSurname(e.target.value)}}
        />
        <input
            className="input"
            type="text"
            placeholder="Введите другой номер карточки"
            onChange={(e) => {setCartNumber(e.target.value)}}
        ></input>
        <button className="btn_submit" onClick={updateUser}>
            Изменить данные
        </button>
    </form>
    )
}

export default FormProfile