import React from "react";

const Register = () => {
  document.title = "Gaming Library - Inscription";

  return (
    <div className="Register">
      <div className="Register__Description">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          perferendis dolorum, dolores placeat corporis minus aliquid reiciendis
          quaerat quae sint perspiciatis aperiam quidem atque optio nam alias,
          maiores unde quis?
        </p>
      </div>
      <form className="Register__Form">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Adresse Mail"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Nouveau mot de passe"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Retapez votre nouveau mot de passe"
          />
        </div>
        <button type="button" className="btn btn-primary">
          <span>S'inscrire</span>
          <i className="bi bi-arrow-right bi-2x"></i>
        </button>
      </form>
    </div>
  );
};

export default Register;
