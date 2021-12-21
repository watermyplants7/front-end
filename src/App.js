<<<<<<< HEAD
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import LandingPage from "./components/landingPage/landingPage";
import Login from "./components/login";
import { Header } from "./components/Header";
=======
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import LandingPage from './components/landingPage/landingPage';
import Login from './components/login';
import AddPlant from './components/AddPlant';
import EditPlant from './components/EditPlant';
import Logout from './components/logout';
>>>>>>> bf5921a2350467a965218767d5dceeeb1c50025c

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route path="/register">
=======
        <Route exact path='/'>
            <div>pre-login home page</div>
          </Route>
          <Route path='/register'>
>>>>>>> bf5921a2350467a965218767d5dceeeb1c50025c
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
<<<<<<< HEAD
          <Route exact path="/">
            <div>pre-login home page</div>
          </Route>
          <PrivateRoute path="/home" component={LandingPage} />
=======
          <PrivateRoute path='/home' component={LandingPage}/>
          <PrivateRoute path='/edit' component={EditPlant}/>
          <PrivateRoute path='/add' component={AddPlant} />
          <PrivateRoute path='/logout' component={Logout}/>
>>>>>>> bf5921a2350467a965218767d5dceeeb1c50025c
        </Switch>
      </Router>
    </div>
  );
}

export default App;
