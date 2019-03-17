import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header"
import Food, { Flag } from "./components/food"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Food/>
        <Flag/>
      </div>
    );
  }
}

export default App;
