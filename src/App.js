import './App.css';
import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component { /* eslint-disable-line react/prefer-stateless-function */
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
