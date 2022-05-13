export const initialState = {
  el: {},
  items: [],
  flag: true,
};

export default function fetchProductsReducer(state = initialState, action) {
  console.log(action.key)
  switch (action.type) {
    case "Set_Products":
      return { ...state, items: action.data }
    case "delete_product":
      return {
        ...state,
        items: state.items.filter((el) => el.title !== action.el.title),
      };
    case "Add_products":
      return { ...state, items: [action.result, ...state.items] };
    case "SendproductToUpdate":
      return { items: state.items, el: action.el, flag: false };
    case "Update_product":
      return {
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
    default:
      return state;
  }
}
