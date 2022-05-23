import { SetProducts } from "../actions/products.actions";
import { productsQuery } from "../services/products.service";

export default interface IData{
  id: string,
  title: string,
  description: string,
  urlToImg: string,
  Rating: number
}
export const allProducts = (): any => (dispatch: any) => {
    productsQuery().then((response) => response.json())
    .then((data: IData[]) => {
      dispatch(SetProducts(data));
    })
};

