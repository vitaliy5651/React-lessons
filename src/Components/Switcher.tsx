import React from "react";
import { ChangeRole} from "../actions/users.action";
import { useAppDispatch, useAppSelector } from "../hooks";

const Switcher = () => {
const profile = useAppSelector((state) => state.ProfileReducer)
const dispatch = useAppDispatch()

const roleParam = (e: string) => {
    if(profile.role === 'User'){
        dispatch(ChangeRole('Admin'))
    }else{
        dispatch(ChangeRole('User'))
    }
}
return (
        <label className="switch">
        <input type="radio" onChange={(e: React.FormEvent<HTMLInputElement>) => roleParam(e.currentTarget.value)}/>
        <span className="slider round"></span>
        </label>
    )
}

export default Switcher