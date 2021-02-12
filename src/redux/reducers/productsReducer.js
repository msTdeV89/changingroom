import * as actions from "../actions/actionTypes";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
