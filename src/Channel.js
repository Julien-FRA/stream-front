import React from "react";
import "./Channel.css";

function Channel() {
  return (
    <section className="channel-section">
      <figure className="channel-choice">
        <img
          src={process.env.PUBLIC_URL + "/mic.jpg"}
          className="logo-mic"
        ></img>
        <figcaption>
          <h4 className="channel-name">Channel 1</h4>
        </figcaption>
      </figure>
      <figure className="channel-choice">
        <img
          src={process.env.PUBLIC_URL + "/mic.jpg"}
          className="logo-mic"
        ></img>
        <figcaption>
          <h4 className="channel-name">Channel 2</h4>
        </figcaption>
      </figure>
      <figure className="channel-choice">
        <img
          src={process.env.PUBLIC_URL + "/mic.jpg"}
          className="logo-mic"
        ></img>
        <figcaption>
          <h4 className="channel-name">Channel 3</h4>
        </figcaption>
      </figure>
      <figure className="channel-choice">
        <img
          src={process.env.PUBLIC_URL + "/mic.jpg"}
          className="logo-mic"
        ></img>
        <figcaption>
          <h4 className="channel-name">Channel 4</h4>
        </figcaption>
      </figure>
      <figure className="channel-choice">
        <img
          src={process.env.PUBLIC_URL + "/mic.jpg"}
          className="logo-mic"
        ></img>
        <figcaption>
          <h4 className="channel-name">Channel 5</h4>
        </figcaption>
      </figure>
      <figure className="channel-choice">
        <img
          src={process.env.PUBLIC_URL + "/mic.jpg"}
          className="logo-mic"
        ></img>
        <figcaption>
          <h4 className="channel-name">Channel 6</h4>
        </figcaption>
      </figure>
    </section>
  );
}

export default Channel;