import { ThunkAction} from "redux-thunk";
import { SetAction, SetProducts } from "../actions/products.actions";
import { productsQuery } from "../services/products.service";

export default interface IData{
  id: string,
  title: string,
  description: string,
  urlToImg: string
}
export const allProducts = ():ThunkAction<void,{},{},SetAction> => (dispatch) => {
    productsQuery().then((response) => response.json())
    .then((data: IData[]) => {
      dispatch(SetProducts(data));
    })
};

