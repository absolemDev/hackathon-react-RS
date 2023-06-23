import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navlink-wrapper">
        <Link className="navlink-item navlink-item-main" to="/">
          Главная
        </Link>
        <Link className="navlink-item" to="/favorites">
          Избранные
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
