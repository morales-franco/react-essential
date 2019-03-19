import React, { Component } from 'react';
import Header from "./components/header"
import Food, { Flag } from "./components/food"
import NewFood from "./components/newFood"

import './styles/App.css';


class App extends Component {

  food = "pasta";
  foods = ["pizza", "hot-dog", "burguer"]

  getCountFavouritesFoods(){
    return this.foods.length;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <NewFood/>
        <Flag></Flag>
        <Food name={ this.food } quantity={this.getCountFavouritesFoods()}/>
        My favorite food is { this.food } <br/>
        My favorites foods are:
        <ul>
          {
            this.foods.map((food,i) => {
              return <li key={i}> {food} </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
