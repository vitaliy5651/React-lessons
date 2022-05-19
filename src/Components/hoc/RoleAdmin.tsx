import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../hooks"


const RoleAdmin = ({children}: any) => {
const profile = useAppSelector((state) => state.ProfileReducer)


if(profile.roleIsAdmin === false){
    return <Navigate to={'/'}/>
}
return children
}

export default RoleAdmin