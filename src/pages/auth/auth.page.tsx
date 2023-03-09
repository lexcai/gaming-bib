import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../assets/scss/auth/auth.scss";
import logo from "../../assets/img/logo/logo_react.svg";

const AuthPage = () => {
  return (
    <div className="Auth">
      <nav className="Auth__Menu container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="Auth__Logo">
              <img src={logo} alt="ceci est un logo"/>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <ul className="Auth__Category">
              <Link to="/auth/login"><li>Connexion</li></Link>
              <Link to="/auth/sign"><li>Inscription</li></Link>
            </ul>
          </div>
        </div>
      </nav>
        <Outlet></Outlet>
    </div>
  );
};

export default AuthPage;
