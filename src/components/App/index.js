import React, { Component } from 'react';
import Welcome from '../Welcome';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">PEREZGA</h1>
        </header>
        <Welcome />
      </div>
    );
  }
}

export default App;
