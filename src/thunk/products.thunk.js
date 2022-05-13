import { getProductsQuery } from "../services/products.service";

export const getAllProducts = () => (dispatch) => {
    getProductsQuery().then(response => response.json())
    .then((data) => {
        dispatch({type: 'Set_Products', data})
    })
    .catch((err) => {
        dispatch({type: 'Set_Err', data: err})
    })
}