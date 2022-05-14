import { CatchError } from "../actions/error.action";
import { SetProducts } from "../actions/products.actions";
import { productsQuery } from "../services/products.service";



export const allProducts = () => (dispatch) => {
    productsQuery().then((response) => response.json())
    .then((data) => {
      dispatch(SetProducts(data));
    })
    .catch((err) => {
      dispatch(CatchError(err))
    });
};

