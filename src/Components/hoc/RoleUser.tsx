import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../hooks"


const RoleUser = ({children}: any) => {
    const profile = useAppSelector((state) => state.ProfileReducer)

    if(profile.roleIsUser === false){
        return <Navigate to={'/'} />
    }
return children
}

export default RoleUser