import React, { useContext, useState } from "react";
import { ProfileContext } from "./ProfileUser";



const Form = () => {
    const profileContext = useContext(ProfileContext)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [cartNumber, setCartNumber] = useState()
    function updateUser (e){
        e.preventDefault();
        const result = { name, surname, cartNumber };
        profileContext.profileDispatch({type: 'Update_User', result})
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

export default Form