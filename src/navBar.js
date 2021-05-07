import React, { useState, Component } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="nav-vertical">
      <ul class="ul-vertical">
        <Link to="/">
          <li>
            <img src={process.env.PUBLIC_URL + "/accueil.png"} alt="" />
          </li>
        </Link>

        <Link to="/join">
          <li>
            <img src={process.env.PUBLIC_URL + "/page-suivante.png"} alt="" />
          </li>
        </Link>

        <Link to="/">
          <li>
            <img src={process.env.PUBLIC_URL + "/proche.png"} />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
