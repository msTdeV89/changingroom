import React from "react";
import Category from "./CategoriesItem";
import man from "../assets/man.jpg";
import women from "../assets/women.jpg";
import jewelery from "../assets/jewellery.jpg";

const CategoriesHome = () => {
  return (
    <section className='categories'>
      <Category title='Womens' img={women} link='/category/womens' />
      <Category title='Mens' img={man} reverse link='/category/mens' />
      <Category title='Jewelery' img={jewelery} link='/category/jewelery' />
    </section>
  );
};

export default CategoriesHome;
