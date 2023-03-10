import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo/logo_react.svg";
import { signOut } from "firebase/auth"
import { auth } from "../../../firebase-config";

const Navbar = () => {
    const navigate = useNavigate()

    const logOut = async () => {
      try {
        await signOut(auth)
        navigate("/auth/login")
      } catch {
        alert(
          "For some reasons we can't deconnect, please check your internet connexion and retry."
        )
      }
    }

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
                <i className="bi bi-person-badge-fill"></i>Compte
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="Navbar__Logout">
        <nav>
          <ul>
            {/* <Link to={"/auth/login"}> */}
              <li>
                <i className="bi bi-box-arrow-left" onClick={logOut}></i>Deconnexion
              </li>
            {/* </Link> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
