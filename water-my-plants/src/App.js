import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <Switch>
        <Route exact path='/'>
          <div>pre-login home page</div>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
