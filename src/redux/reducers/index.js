import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import globalReducer from "./globalReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  global: globalReducer,
  products: productsReducer,
});

export default rootReducer;
