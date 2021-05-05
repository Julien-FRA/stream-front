import React, { useState } from "react";
import PropTypes from 'prop-types';
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
  return fetch('http://localhost:3000/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

async function registerUser(credentials) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    console.log(token);
  }

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <div className="log-button">
        <input
          type="button"
          value="Se connecter"
          className="login-input"
        ></input>
        <input
          type="button"
          value="Nous rejoindre"
          className="subscribe-input"
        ></input>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/controller.png"}
        className="logo-wow"
      ></img>
      <label>
        <input
          type="text"
          onChange={e => setUserName(e.target.value)}
          name="username"
          placeholder="Username"
          className="form-input"
        />
      </label>
      <label>
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
          className="form-input"
        />
      </label>
      <input type="submit" className="form-submit" />
    </form>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;