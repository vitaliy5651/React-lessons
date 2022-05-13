import { productsQuery } from "../services/products.service";



export const allProducts = () => (dispatch) => {
  console.log("enter func");
    productsQuery().then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "Set_Products",
        data
      });
      console.log(data);
    })
    .catch((err) => {
      dispatch({ type: "Set_Err", data: err });
    });
};

