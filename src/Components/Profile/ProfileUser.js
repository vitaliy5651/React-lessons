import React, { useReducer } from "react";
import ProfileReducer, { initialState } from "../../reducers/profile.reducer";
import FormProfile from "./formProfile";
import styles from "./ProfileUser.css"

export const ProfileContext = React.createContext()
const Profile = () => {
    const [profile , dispatch] = useReducer(ProfileReducer, initialState)
return(
    <ProfileContext.Provider value={{profileState: profile, profileDispatch: dispatch}}>
    <div className="Profile" style={styles}>
    <FormProfile />
    <div className="user_data">
        <div className="user_name">{profile.user.name}</div>
        <div className="user_surname">{profile.user.surname}</div>
        <div className="user_cartNumber">{profile.user.cartNumber}</div>
    </div>
    </div>
    </ProfileContext.Provider>
)
}

export default Profile