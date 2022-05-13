import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import GetButton from "../Mybutton";
import FormProfile from "./formProfile";
import styles from "./ProfileUser.css"


const Profile = () => {
    const getUsers = useSelector((state) => state.ProfileReducer)
return(
    <div className="Profile" style={styles}>
    <FormProfile />
    <GetButton isProduct = {false}/>
    {getUsers.users.map((el) => {return(
    <div className="user_data" key={uuidv4('')}>
        <div className="user_name">{el.name}</div>
        <div className="user_username">{el.username}</div>
        <div className="user_email">{el.email}</div>
    </div>
    )})}
    </div>
)
}

export default Profile