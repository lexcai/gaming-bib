import React, { useContext, useEffect, useState } from "react";
import "../../assets/scss/profile/profile.scss";
import Navbar from "../../components/game/utils/navbar";
import profileImg from "../../assets/img/profile/profile.jpg";
import { UserContext } from "../../context/userContext";
import { Users } from "../../assets/utils/models/Users";

const ProfilePage = () => {
  document.title = "Gaming Library - Profil";

  const { currentUser, updateUsers } = useContext(UserContext);
  const [ userToUpdate, setUserToUpdate ] = useState<Users>(new Users());

  useEffect(() => {
    setUserToUpdate(currentUser);
  }, [currentUser])
  

  const userUpdate = async (uid: string, field: string, value: any) => {
    await updateUsers(uid, field, value);
  }

  const handleIDDiscordChange = (event: any) => {
    let user: Users = new Users();
    user = userToUpdate;
    user.DiscordID = event.target.value;
    setUserToUpdate(user);
  };

  const handleUsernameChange = (event: any) => {
    let user: Users = new Users();
    user = userToUpdate;
    user.username = event.target.value;
    setUserToUpdate(user);
  };

  return (
    <div className="Profile__Main">
      <div className="Profile__Main__Title">
        <h1>Mon compte</h1>
      </div>
      <form className="Profile__Main__Form">
        <div className="Profile__Main__Avatar">
          <i className="bi bi-pencil-fill"></i>
          <img src={profileImg} alt="ceci est la tete du profil" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <span>Adresse mail</span>
          </label>
          <div className="Profile__Main__Form__Input">
            <input
              type="email"
              value={currentUser.Mail}
              autoComplete="off"
              readOnly
              className="form-control"
              id="email"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            <span>Surnom</span>
          </label>
          <div className="Profile__Main__Form__Input">
            <input
              type="text"
              autoComplete="off"
              onChange={handleUsernameChange}
              value={currentUser.username}
              className="form-control"
              id="username"
            />
            <button type="button" className="btn btn-primary"  onClick={() => {userUpdate(currentUser.uid, "username", userToUpdate.username)}}>
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            <span>Id Discord</span>
          </label>
          <div className="Profile__Main__Form__Input">
            <input
              type="text"
              autoComplete="off"
              onChange={handleIDDiscordChange}
              value={currentUser.DiscordID}
              className="form-control"
              id="username"
            />
            <button type="button" className="btn btn-primary"  onClick={() => {userUpdate(currentUser.uid, "DiscordID", userToUpdate.DiscordID)}}>
              <span>Edit</span>
            </button>
          </div>
        </div>
        {/* <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <span>Password</span>
          </label>
          <div className="Profile__Main__Form__Input">
            <input
              type="password"
              autoComplete="off"
              className="form-control"
              id="password"
            />
            <button type="button" className="btn btn-primary">
              <span>Edit</span>
            </button>
          </div>
        </div> */}
      </form>
      {/* <div className="Profile__Main__Logout">
          <Link to={'/auth/login'}>
            <button type="button" className="btn btn-primary">
              Déconnexion
            </button>
          </Link>
        </div> */}
    </div>
  );
};

export default ProfilePage;
