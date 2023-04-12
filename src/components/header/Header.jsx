import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../store/auth";

const Header = () => {
  const { userData } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/auth");
  };

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
        <li className="ms-auto text-light mx-5">User name: {userData.name}</li>
        <li>
          <Button className="btn btn-danger" onClick={logOutHandler}>
            Log out
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
