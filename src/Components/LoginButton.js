import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginButton = () => {
    const user = useSelector((state) => state.ProfileReducer)
const dispatch = useDispatch()
function checkAuth(){
    dispatch({type: 'Check_Auth', isAuth: user.isAuth})
}
return(
    <button className="login" onClick={checkAuth}>
        {!user.isAuth ? 'Войти' : 'Выйти'}
    </button>
)
}

export default LoginButton