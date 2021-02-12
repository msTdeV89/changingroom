import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/actionTypes";

const MenuItem = ({ name, desktop }) => {
  const dispatch = useDispatch();

  return (
    <li className='menuItem'>
      <Link
        to={`${
          name === "home" ? "/changingroom" : `/changingroom/category/${name}`
        }`}
        onClick={() => {
          if (!desktop) dispatch({ type: actions.HANDLE_MENU });
        }}
      >
        {name}
      </Link>
    </li>
  );
};

export default MenuItem;
