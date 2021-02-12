import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/actionTypes";

const Header = () => {
  const menuIsOpen = useSelector((state) => state.global.menuIsOpen);
  const items = useSelector((state) => state.cart.products);
  const sum = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.amount;
    });
    return total;
  };
  const total = sum();
  const dispatch = useDispatch();
  return (
    <header className='header'>
      <div className='header__container'>
        <IconButton
          className='header__bars'
          onClick={() => dispatch({ type: actions.HANDLE_MENU })}
        >
          {menuIsOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <div className='header__logo' to='/changingroom'>
          <Link to='/changingroom'>ChangingRoom</Link>
        </div>
        <nav className='header__menu'>
          <ul className='header__list'>
            <MenuItem name='home' desktop />
            <MenuItem name='womens' desktop />
            <MenuItem name='mens' desktop />
            <MenuItem name='jewelery' desktop />
          </ul>
        </nav>
        <Link className='header__cart' to='/changingroom/cart'>
          <ShoppingCartIcon />
          <p>{total || 0}</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
