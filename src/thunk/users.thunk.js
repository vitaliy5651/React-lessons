import { CatchError } from "../actions/error.action";
import { SetUsers } from "../actions/users.action";
import { usersQuery } from "../services/users.service";


export const allUsers = () => (dispatch) => {
    usersQuery()
    .then((response) => response.json())
    .then((data) => {
      dispatch(SetUsers(data));
    })
    .catch((err) => {
      dispatch(CatchError(err));
    });
};