import React from "react";
import { useHistory } from "react-router-dom";
import CategoryProduct from "../components/CategoryProduct";

const CategoryPage = () => {
  const history = useHistory();
  const products = JSON.parse(sessionStorage.getItem("changProducts"));
  const path = history.location.pathname.slice(23);
  const categories = () => {
    if (path === "mens") return "men clothing";
    if (path === "womens") return "women clothing";
    if (path === "jewelery") return "jewelery";
  };
  return (
    <section className='categoryPage'>
      <h2 className='categoryPage__title'>{path}</h2>
      <ul className='categoryPage__products'>
        {products
          .filter((product) => product.category === categories())
          .map(({ id, image, price, title }) => (
            <CategoryProduct
              key={id}
              id={id}
              image={image}
              price={price}
              title={title}
            />
          ))}
      </ul>
    </section>
  );
};

export default CategoryPage;
