import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const MobileMenu = () => {
  const menuIsOpen = useSelector((state) => state.global.menuIsOpen);
  return (
    <nav className={`mobileMenu ${menuIsOpen ? "mobileMenu--isOpen" : ""}`}>
      <ul className='mobileMenu__list'>
        <MenuItem name='home' />
        <MenuItem name='womens' />
        <MenuItem name='mens' />
        <MenuItem name='jewelery' />
      </ul>
    </nav>
  );
};

export default MobileMenu;
