import React from "react";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login__Description">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          perferendis dolorum, dolores placeat corporis minus aliquid reiciendis
          quaerat quae sint perspiciatis aperiam quidem atque optio nam alias,
          maiores unde quis?
        </p>
      </div>
      <form className="Login__Form">
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
            placeholder="Mot de passe"
          />
        </div>
        <button type="button" className="btn btn-primary mb-3">
          <span>Se connecter</span>
          <i className="bi bi-arrow-right bi-2x"></i>
        </button>
        <div className="Login__ForgotPassword">
          <p>Mot de passe oublié ?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
