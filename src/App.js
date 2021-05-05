import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Channel from './Channel';
import Stream from './Stream';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <article className="border-color glow"><Login setToken={setToken} /></article>
  }

  return (
    <article className="border-color glow">
      <BrowserRouter>
        <Switch>
          <Route path="/channel">
            <Channel />
          </Route>
          <Route path="/stream">
            <Stream />
          </Route>
        </Switch>
      </BrowserRouter>
    </article>
  );
}

export default App;
