import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/actionTypes";
import { useSelector } from "react-redux";

const CartItem = ({ id, image, title, price }) => {
  const dispatch = useDispatch();
  const total = useSelector(
    (state) => state.cart.products.find((item) => item.id === id).amount
  );

  return (
    <li className='cartItem'>
      <div className='cartItem__image'>
        <img src={image} alt={title} />
      </div>
      <div className='cartItem__details'>
        <h5 className='cartItem__title'>{title}</h5>
        <div className='cartItem__amount'>
          <IconButton
            size='small'
            onClick={() => {
              if (total > 1) {
                dispatch({
                  type: actions.DECREASE_ITEM_FROM_CART,
                  payload: id,
                });
              } else {
                dispatch({ type: actions.REMOVE_ITEM_FROM_CART, payload: id });
              }
            }}
          >
            <RemoveIcon />
          </IconButton>
          <p>{total}</p>
          <IconButton
            size='small'
            onClick={() => {
              dispatch({ type: actions.INCREASE_ITEM_FROM_CART, payload: id });
            }}
          >
            <AddIcon />
          </IconButton>
        </div>
        <p>£{(price * total).toFixed(2)}</p>
      </div>
    </li>
  );
};

export default CartItem;
