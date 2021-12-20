import './App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <Switch>
        <Route exact path='/'>
          <div>pre-login home page</div>
        </Route>
        <PrivateRoute path='/home' component={<div><h1>logged in home page component will go here</h1></div>}/>

      </Switch>
    </div>
  );
}

export default App;
