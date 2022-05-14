export const initialState = {
  el: {},
  items: [],
  flag: true,
  isLoad: true,
  btnFlag: true,
  err: null
};

export default function fetchProductsReducer(state = initialState, action) {
  switch (action.type) {
    case "Set_Products":
      return { ...state, items: action.data, isLoad: !state.isLoad, btnFlag: !state.btnFlag}
    case "delete_product":
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.el.id),
      };
    case "Add_products":
      return { ...state, items: [action.result, ...state.items] };
    case "SendproductToUpdate":
      return {
           ...state,
        items: state.items,
         el: action.el, 
         flag: false };
    case "Update_product":
      return {
        ...state,
        el: "",
        flag: !state.flag,
        items: state.items.map((el) => {
          if (el.id === action.result.id) {
            return (el = action.result);
          }
          return el;
        }),
      };
    case "SearchProduct":
      return {
        ...state,
        items: state.items.filter((el) =>
          el.title.toLowerCase().includes(action.item.toLowerCase())
        ),
      };
    case 'Set_Err':
      return{
        ...state,
        err: action.data
      }
    default:
      return state;
  }
}
