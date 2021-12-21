import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import LandingPage from "./components/landingPage/landingPage";
import Login from "./components/login";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <div>pre-login home page</div>
          </Route>
          <PrivateRoute path="/home" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
