import "./assets/scss/style.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
// CONTAINERS
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
// COMPONENTS
import Header from "./components/Header";

function App() {
  const [userToken, setUserToken] = useState();
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 1 }); // création du cookie
      setUserToken(token); // met à jour le userToken
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header setUser={setUser} userToken={userToken} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/user/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/user/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
