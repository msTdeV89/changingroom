import React from "react";
import styled from "styled-components";
import pct1 from "../assets/slider1.jpg";

const Header = () => {
  const Bgc = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${pct1});
    background-position: center;
    background-size: cover;
    opacity: 0.9;
    transition: 1s;
  `;
  return (
    <section className='hero'>
      <div className='hero__banner'>
        <h1 className='hero__title'>find your own style</h1>
        <Bgc className='hero__background'></Bgc>
      </div>
    </section>
  );
};

export default Header;
