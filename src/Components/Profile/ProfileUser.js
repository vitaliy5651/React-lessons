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
        <div className="user_name">{getUsers.users.name}</div>
        <div className="user_username">{getUsers.users.surname}</div>
        <div className="user_email">{getUsers.users.cartNumber}</div>
    </div>
    </div>
)
}

export default Profile