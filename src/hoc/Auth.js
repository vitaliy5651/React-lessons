
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({children}) => {
    const user = useSelector((state) => state.ProfileReducer)
    if(user.isAuth === false) {
        return <Navigate to = {'/'} />
    }
    return children
}

export default Auth