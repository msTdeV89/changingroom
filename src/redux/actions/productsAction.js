import * as actions from "./actionTypes";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  await axios.get("https://fakestoreapi.com/products").then((res) => {
    sessionStorage.setItem("changProducts", JSON.stringify([...res.data]));
    dispatch({ type: actions.GET_PRODUCTS, payload: [...res.data] });
  });
};
