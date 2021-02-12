import React from "react";
import Hero from "../components/Hero";
import CategoriesHome from "../components/CategoriesHome";
const HomePage = () => {
  return (
    <main className='homePage'>
      <Hero />
      <CategoriesHome />
    </main>
  );
};

export default HomePage;
