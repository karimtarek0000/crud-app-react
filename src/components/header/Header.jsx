import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>NOTES APP</h1>
      <ul className="nav bg-primary rounded">
        <li>
          <NavLink end to="/">
            Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="note/add">Add Note</NavLink>
        </li>
        <li className="ms-auto">
          <NavLink to="note/add">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
