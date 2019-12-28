import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      welcomeText: 'Hello, Goran',
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.welcomeText}</p>
          <button onClick={() => this.setState({ welcomeText: 'Name is changed' })}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
