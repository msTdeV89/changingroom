import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoriesItem = ({ title, reverse, img, link }) => {
  const Image = styled.div`
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
  `;

  return (
    <Link
      className='category'
      to={`/changingroom${link}`}
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <div className='category__image'>
        <Image className=''></Image>
      </div>
      <h5 className='category__title'>{title}</h5>
    </Link>
  );
};

export default CategoriesItem;
