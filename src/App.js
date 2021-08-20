import './App.css';
import { Route, Switch } from 'react-router-dom';
import CalculatorContainer from './components/CalculatorContainer';
import Quote from './pages/Quote';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calc">
        <CalculatorContainer />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </div>
);

export default App;
