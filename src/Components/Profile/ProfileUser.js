import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../thunk/users.thunk";
import FormProfile from "./formProfile";
import styles from "./ProfileUser.css"


const Profile = () => {
    const getUsers = useSelector((state) => state.ProfileReducer)
    const dispatch = useDispatch()
    useEffect(() =>
    {
        dispatch(allUsers())
    }, [dispatch])
return(
    <div className="Profile" style={styles}>
    <FormProfile />
    <div className="user_data">
        <div className="user_name">{getUsers.users.name}</div>
        <div className="user_username">{getUsers.users.username}</div>
        <div className="user_email">{getUsers.users.email}</div>
    </div>
    </div>
)
}

export default Profile