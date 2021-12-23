import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import LandingPage from "./components/landingPage/landingPage";
import Login from "./components/login";
import AddPlant from './components/AddPlant';
import EditPlant from './components/EditPlant';
import Logout from './components/logout';
import { Header } from "./components/Navbar";
import EditProfile from "./components/editProfile";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <div>Water My Plants</div>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/home" component={LandingPage} />
          <PrivateRoute path="/editProfile" component={EditProfile} />
          <PrivateRoute path="/edit" component={EditPlant} />
          <PrivateRoute path="/add" component={AddPlant} />
          <PrivateRoute path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
