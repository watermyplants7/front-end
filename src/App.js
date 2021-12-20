import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import LandingPage from './components/landingPage/landingPage';
import Login from './components/login';
import AddPlant from './components/AddPlant';
import EditPlant from './components/EditPlant';
import Logout from './components/logout';

function App() {
  return (
    <div className="App">
      <h1>Replace this element with Header component</h1>
      <Router>
        <Switch>
        <Route exact path='/'>
            <div>pre-login home page</div>
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/home' component={LandingPage}/>
          <PrivateRoute path='/edit' component={EditPlant}/>
          <PrivateRoute path='/add' component={AddPlant} />
          <PrivateRoute path='/logout' component={Logout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;