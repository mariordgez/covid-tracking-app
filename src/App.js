import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Countries />
        </Route>
        <Route path="/country/:id">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
