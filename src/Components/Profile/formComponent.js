import React, { useReducer, useState } from "react";
import ProfileReducer, { initialState } from "../../reducers/profile.reducer";


const Form = () => {
    const [ profile , dispatch] = useReducer(ProfileReducer, initialState)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [cartNumber, setCartNumber] = useState()

    function updateUser (e){
        e.preventDefault();
        const result = { name, surname, cartNumber };
        dispatch({type: 'Update_user', result})
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