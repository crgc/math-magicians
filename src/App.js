import './App.css';
import { Route, Switch } from 'react-router-dom';
import CalculatorContainer from './components/CalculatorContainer';
import Quote from './pages/Quote';
import NoMatch from './pages/NoMatch';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/">
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
