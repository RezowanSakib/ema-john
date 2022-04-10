import React from "react";
import logo from "../../images/Logo.svg";
import "../Header/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header container-fluid">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/Order">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to='/login'>Login</Link>
      </div>
    </nav>
  );
};

export default Header;
