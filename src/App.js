import React, { Component } from 'react';
import GithubRepo from './GithubRepo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Github Repositories</h1>
        <GithubRepo />
      </div>
    );
  }
}

export default App;
