import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo/logo_react.svg";

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="Navbar__Menu">
        <div className="Navbar__Logo">
          <img src={logo} alt="ceci est un logo" />
        </div>
        <nav>
          <ul>
            <Link to={"/dashboard/game"}>
              <li>
                <i className="bi bi-collection-fill"></i>Librairie
              </li>
            </Link>
            <Link to={"/dashboard/favoris"}>
              <li>
                <i className="bi bi-heart-fill"></i>Favoris
              </li>
            </Link>
            <Link to={"/profile"}>
              <li>
                <i className="bi bi-person-badge-fill"></i>Mon compte
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="Navbar__Logout">
        <nav>
          <ul>
            <Link to={"/auth/login"}>
              <li>
                <i className="bi bi-box-arrow-left"></i>Deconnexion
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
