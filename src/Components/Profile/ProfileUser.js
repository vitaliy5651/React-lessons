import React, { useReducer } from "react";
import ProfileReducer, { initialState } from "../../reducers/profile.reducer";
import Form from "./formComponent";
import styles from "./ProfileUser.css"


const Profile = () => {
    const [ profile ] = useReducer(ProfileReducer, initialState)
return(
    <div className="Profile" style={styles}>
    <Form />
    <div className="user_data">
        <div className="user_name">{profile.user.name}</div>
        <div className="user_surname">{profile.user.surname}</div>
        <div className="user_cartNumber">{profile.user.cartNumber}</div>
    </div>
    </div>
)
}

export default Profile