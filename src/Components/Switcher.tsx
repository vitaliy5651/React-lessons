import React from "react";
import { ChangeRole, ChangeRoleUser } from "../actions/users.action";
import { useAppDispatch, useAppSelector } from "../hooks";

const Switcher = () => {
const profile = useAppSelector((state) => state.ProfileReducer)
const dispatch = useAppDispatch()

const roleParam = (e: string) => {
dispatch(ChangeRole(!profile.roleIsAdmin))
dispatch(ChangeRoleUser(!profile.roleIsUser))
}

    return (
        <label className="switch">
        <input type="checkbox" onChange={(e: React.FormEvent<HTMLInputElement>) => roleParam(e.currentTarget.value)}/>
        <span className="slider round"></span>
        </label>
    )
}

export default Switcher