import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import LandingPage from "./components/landingPage/landingPage";
import Login from "./components/login";
import AddPlant from "./components/AddPlant";
import EditPlant from "./components/EditPlant";
import Logout from "./components/logout";
import { Header } from "./components/Header";
import EditProfile from "./components/editProfile";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Register />
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home" component={LandingPage} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/edit" component={EditPlant} />
          <Route path="/add" component={AddPlant} />
          <Route path="/logout" component={Logout} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
