import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./navBar";
import useToken from "./useToken";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

function App() {
  const { token, setToken } = useToken();
  const { username, setUserName } = useToken();

  if (!token) {
    return (
      <main>
        <Router>
          <NavBar />
        </Router>
        <article className="border-color glow">
          <Login setToken={setToken} setUserName={setUserName} />
        </article>
      </main>
    );
  }

  return (
    <main>
      <Router>
        <NavBar />
        <article className="border-color glow">
          <Route path="/" exact component={Login} />
          <Route path="/join" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </article>
      </Router>
    </main>
  );
}

export default App;
