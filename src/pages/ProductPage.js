import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/actionTypes";

const ProductPage = () => {
  const [added, setAdded] = useState(false);
  const products = JSON.parse(sessionStorage.getItem("changProducts"));
  const history = useHistory();
  const dispatch = useDispatch();
  const path = history.location.pathname.slice(22);
  const product = products.find((product) => {
    return product.id === Number(path);
  });
  console.log(path);
  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    }
  }, [added]);
  return (
    <section className='productPage'>
      <div className='singleProduct'>
        <div className='singleProduct__image'>
          <img src={product.image} alt={product.title} />
        </div>
        <div className='singleProduct__details'>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className='singleProduct__price'>£{product.price}</p>
          <p
            className={`singleProduct__added ${
              added ? "singleProduct__added--visible" : ""
            }`}
          >
            Product added to your cart.
          </p>
          <div className='singleProduct__btns'>
            <button className='btn' onClick={history.goBack}>
              Back
            </button>
            <button
              className='btn'
              onClick={() => {
                setAdded(true);
                dispatch({
                  type: actions.ADD_ITEM_TO_CART,
                  payload: { ...product, amount: 1 },
                });
              }}
            >
              Add do cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
