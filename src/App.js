import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Countries from './components/Countries';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/">
          <Countries />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
