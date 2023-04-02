import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>NOTES APP</h1>
      <ul className="nav">
        <li>
          <NavLink end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="note/add">Add</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
