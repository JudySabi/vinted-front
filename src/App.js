import "./assets/scss/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Offer from "./containers/Offer";
import Home from "./containers/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
