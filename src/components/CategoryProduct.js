import React from "react";
import { Link } from "react-router-dom";

const CategoryProduct = ({ title, id, price, image }) => {
  return (
    <li className='product'>
      <Link to={`/changingroom/product/${id}`} className='product__content'>
        <div className='product__image'>
          <img src={image} alt={title} />
        </div>
        <div className='product__details'>
          <h5>{title}</h5>
          <p>£{price}</p>
        </div>
      </Link>
    </li>
  );
};

export default CategoryProduct;
