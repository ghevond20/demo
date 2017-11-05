import React, { Component } from 'react';
import { render } from 'react-dom'
import logo from './logo.svg';
import './App.css';
import NewsFeedContainer from './container/NewsFeed'

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <NewsFeedContainer />
      </div>
    );
  }
}

export default App;
