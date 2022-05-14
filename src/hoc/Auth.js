
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = () => {
    const user = useSelector((state) => state.ProfileReducer)

    if(user.isAuth === true) {
        <Navigate to = {'/'} />
    }
}

export default Auth