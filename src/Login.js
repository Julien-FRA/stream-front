import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import e from "cors";

// fetch('http://localhost:3000/users')
//     .then((response) => {
//         return response.json()
//     })
//     .then((result) => {
//         console.log(result)
//     })

async function loginUser(credentials) {
  return fetch("http://localhost:3000/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

async function registerUser(credentials) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    console.log(token);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const token = await registerUser({
      username,
      password,
    });
    setToken(token);
    console.log(token);
  };

  const [show, logShow] = useState(true);
  const [showr, regShow] = useState(false);

  return (
    <div className="form-section">
      <div className="log-button">
        <input
          type="button"
          value="Se connecter"
          className="login-input"
          onClick={() => {
            logShow(true);
            regShow(false);
          }}
        ></input>
        <input
          type="button"
          value="Nous rejoindre"
          className="subscribe-input"
          onClick={() => {
            regShow(true);
            logShow(false);
          }}
        ></input>
      </div>
      <div className="log">
        {show ? (
          <form
            className="register-form"
            onSubmit={handleSubmit}
            id="Register-in"
          >
            <img
              src={process.env.PUBLIC_URL + "/controller.png"}
              className="logo-wow"
            ></img>
            <label>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                name="username"
                placeholder="Username"
                className="form-input"
              />
            </label>
            <label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
                className="form-input"
              />
            </label>
            <input type="submit" className="form-submit" value="Connection" />
          </form>
        ) : null}
      </div>
      <div className="log">
        {showr ? (
          <form
            className="register-form"
            onSubmit={handleRegister}
            id="Register-in"
          >
            <img
              src={process.env.PUBLIC_URL + "/controller.png"}
              className="logo-wow"
            ></img>
            <label>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                name="username"
                placeholder="New username"
                className="form-input"
              />
            </label>
            <label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="New Password"
                className="form-input"
              />
            </label>
            <input type="submit" className="form-submit" value="S'inscrire" />
          </form>
        ) : null}
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;