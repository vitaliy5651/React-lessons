import { ActionType, ProductsAction } from "../actions/products.actions";
import { IElement } from "../Components/ShowItems/SingleItem";
//import { IElement } from "../Components/ShowItems/SingleItem";
import IData from "../thunk/products.thunk";

interface IProductsState{
  el: IElement
  items: IData[]
  flag: boolean,
  isLoad: boolean,
  btnFlag: boolean,
}

export const initialState: IProductsState = {
  el: {id:'', title: '', description: '', urlToImg: ''},
  items: [],
  flag: true,
  isLoad: true,
  btnFlag: true
};

export default function fetchProductsReducer(state = initialState,  action: ProductsAction): IProductsState {
  switch (action.type) {
    case ActionType.Set_Action:
      return { ...state, items: action.payload, isLoad: !state.isLoad, btnFlag: !state.btnFlag}
    case ActionType.Delete_Action:
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload.id),
      };
    case ActionType.Add_Action:
      return { ...state, items: [action.payload, ...state.items] };
    case ActionType.Send_To_Update_Action:
      return {
           ...state,
        items: state.items,
         el: action.payload, 
         flag: false };
    case ActionType.Update_Action:
      return {
        ...state,
        flag: !state.flag,
        items: state.items.map((el) => {
          if (el.id === action.payload.id) {
            return (el = action.payload);
          }
          return el;
        }),
      };
    case ActionType.Search_Action:
      return {
        ...state,
        items: state.items.filter((el) =>
          el.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
}
