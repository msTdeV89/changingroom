import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);
  const sum = () => {
    let count = 0;
    for (let product of products) {
      count += product.price * product.amount;
    }
    return count.toFixed(2);
  };
  const total = sum();
  return (
    <section className='cart'>
      <ul className='cart__list'>
        {products.length === 0 ? (
          <p className='cart__empty'>Your cart is empty.</p>
        ) : (
          products.map(({ id, image, title, price, amount }) => (
            <CartItem
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
              amount={amount}
            />
          ))
        )}
      </ul>
      <div className='cart__summary'>
        <h3>
          Total: <span>£{total || "00.00"}</span>
        </h3>
        <button className='btn cart__pay'>Pay</button>
      </div>
    </section>
  );
};

export default CartPage;

// <CartItem
// key={4321}
// image='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
// title='bluza'
// price={23.42}
// />
