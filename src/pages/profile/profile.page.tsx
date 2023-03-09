import React from "react";
import "../../assets/scss/profile/profile.scss";
import Navbar from "../../components/game/utils/navbar";
import profileImg from "../../assets/img/profile/profile.jpg";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  document.title = "Gaming Library - Profil";

  return (
    <div className="Profile">
      <Navbar></Navbar>
      <div className="Profile__Main">
        <div className="Profile__Main__Title">
          <h1>Mon compte</h1>
        </div>
        <div className="Profile__Main__Avatar">
          <i className="bi bi-pencil-fill"></i>
          <img src={profileImg} alt="ceci est la tete du profil" />
        </div>
        <form className="Profile__Main__Form">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <span>Surnom</span>
            </label>
            <div className="Profile__Main__Form__Input">
              <input type="text" className="form-control" id="username" />
              <button type="button" className="btn btn-primary">
                <span>Edit</span>
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <span>Adresse mail</span>
            </label>
            <div className="Profile__Main__Form__Input">
              <input type="email" className="form-control" id="email" />
              <button type="button" className="btn btn-primary">
                <span>Edit</span>
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <span>Password</span>
            </label>
            <div className="Profile__Main__Form__Input">
              <input type="password" className="form-control" id="password" />
              <button type="button" className="btn btn-primary">
                <span>Change</span>
              </button>
            </div>
          </div>
        </form>
        <div className="Profile__Main__Logout">
          <Link to={'/auth/login'}>
            <button type="button" className="btn btn-primary">
              Déconnexion
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
