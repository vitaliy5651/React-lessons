import React from "react";
import { useSelector } from "react-redux";
import FormProfile from "./formProfile";
import styles from "./ProfileUser.css"


const Profile = () => {
    const getUsers = useSelector((state) => state.ProfileReducer)
return(
    <div className="Profile" style={styles}>
    <FormProfile />
    <div className="user_data">
        <p className="user_info">Данные пользователя</p>
        <p className="user_info">Имя:</p>
        <div className="user_name">{getUsers.users.name}</div>
        <p className="user_info">Фамилия:</p>
        <div className="user_username">{getUsers.users.surname}</div>
        <p className="user_info">Номер карты:</p>
        <div className="user_email">{getUsers.users.cartNumber}</div>
    </div>
    </div>
)
}

export default Profile