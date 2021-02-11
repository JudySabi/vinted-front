import "./assets/scss/style.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
// COMPONENTS
import Header from "./components/Header";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Login from "./components/Login";

function App() {
  const [userToken, setUserToken] = useState();
  const setUser = (token) => {};

  return (
    <Router>
      <Header setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
