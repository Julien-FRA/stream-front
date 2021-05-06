import React, { useState, Component } from "react";
import PropTypes from 'prop-types';
import "./Channel.css";
import e from "cors";
// import { response } from "express";
// import { render } from "@testing-library/react";

// class Channel extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ChannelSchema: []
//     };
//   }

//   componentDidMount() {
//     fetch('http://localhost:3000/channels')
//     .then(response => response.json())
//     .then(channel => this.setState({ ChannelSchema: channame}));
//   };
  
//   render() {
//     return (
//       <div>
//         <p>{ this.state.channel.map( channel => (<h1>{ channel.ChannelSchema}</h1>)) }</p>
//       </div>
//     )
//   }
// }



async function addChannel(credentials) {
  return fetch('http://localhost:3000/channels', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

async function deleteChannel(credentials) {
  return fetch('http://localhost:3000/channels/6092c0d0007aa5485cf121a3', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function Channel() {
  const [channame, setChanName] = useState();

  const channels = fetch('http://localhost:3000/channels')
  .then((response) => {
      return response.json()
  })
  .then((result) => {
      console.log(result[0]);
  });

  console.log(channels);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await addChannel({
      channame
    });
    console.log(token);
  }

  const handleDelete = async e => {
    e.preventDefault();
    const token = await deleteChannel({
      channame
    });
    console.log(token);
  }

  // useEffect(() => {
  //   fetch("http://localhost:3000/channels")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setChanName(result.items);
  //       },
  //     )
  // }, [])
 
  return (
    <section className="channel-section" id="testchan">
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
      <form className="change-channel" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          onChange={e => setChanName(e.target.value)}
          name="channame"
          placeholder="ChanName"
        />
      </label>
      <input type="submit" />
      </form>
      <form className="change-channel" onSubmit={handleDelete}>
      <input type="submit" value="Supprimer un channel"/>
      </form>
    </section>
  );
}

export default Channel;