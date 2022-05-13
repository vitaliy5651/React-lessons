import { SetUsers } from "../actions/users.action";
import { usersQuery } from "../services/users.service";


export const allUsers = () => (dispatch) => {
    usersQuery()
    .then((response) => response.json())
    .then((data) => {
      dispatch(SetUsers(data));
      console.log(data)
    })
    .catch((err) => {
      dispatch({ type: "Set_Err", data: err });
    });
};