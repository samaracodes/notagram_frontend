import './App.css';
import React, { Component } from 'react'
import MainContainer from './containers/MainContainer'
import PostsContainer from './containers/PostsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
        <PostsContainer />
      </div>
    )
  }
}

export default App;
