import * as actions from "./actionTypes";

export const handleAddToCart = (item) => ({
  type: actions.ADD_ITEM_TO_CART,
  payload: item,
});
export const handleUpdateItemInCart = (item) => ({
  type: actions.UPDATE_ITEM_IN_CART,
  payload: item,
});
export const increaseItemFromCart = (id) => ({
  type: actions.INCREASE_ITEM_FROM_CART,
  payload: id,
});
export const decreaseItemFromCart = (id) => ({
  type: actions.DECREASE_ITEM_FROM_CART,
  payload: id,
});
export const removeItemFromCart = (id) => ({
  type: actions.REMOVE_ITEM_FROM_CART,
  payload: id,
});
