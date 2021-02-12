import * as actions from "../actions/actionTypes";

const initCart = () => {
  if (localStorage.getItem("changCart")) {
    return JSON.parse(localStorage.getItem("changCart"));
  } else return [];
};

const initialState = {
  products: initCart(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM_TO_CART:
      {
        const exist = state.products.find(
          (item) => item.id === action.payload.id
        );
        if (exist) {
          return {
            ...state,
            products: state.products.map((item) => {
              if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 };
              } else {
                return item;
              }
            }),
          };
        }
      }
      return { ...state, products: [...state.products, action.payload] };
    case actions.INCREASE_ITEM_FROM_CART: {
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }),
      };
    }
    case actions.DECREASE_ITEM_FROM_CART: {
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }),
      };
    }
    case actions.REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
