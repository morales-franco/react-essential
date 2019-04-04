import React, { Component } from 'react';
import Header from "./components/header"
// import Food, { Flag } from "./components/food"
import NewFood from "./components/newFood"
import Foods from "./components/foods"
// import Button from '@material-ui/core/Button';
import data from "./assets/data/foods.json"

import './styles/App.css';


class App extends Component {

  state = {
    food : "pasta",
    foods : data.foods
  }

  getCountFavouritesFoods(){
    return this.state.foods.length;
  }

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/foods")
  }

  handledUpdateFood = (index, updatedFoodName) => {
    let newState = { ...this.state };
    newState.foods[index].name = updatedFoodName;

    this.setState(newState);
    
  }

  addFood = (foodName) => {
    let newState = { ...this.state };
    
    const newFood = {
      id : newState.foods.length,
      name : foodName,
      country : "Argentina",
      ingredients : ["Pollo", "Arroz"]
    };

    newState.foods.push(newFood);

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <NewFood onAddFood={this.addFood}/>
        {/* <Flag></Flag> */}
        {/* <Food name={ this.food } quantity={this.getCountFavouritesFoods()}/> */}
        {/* My favorite food is { this.food } <br/>
        My favorites foods are:
        <ul>
          {
            this.foods.map((food,i) => {
              return <li key={i}> {food} </li>
            })
          }
        </ul> */}
        {/* <Button variant="contained" color="secondary" onClick={ this.showDishes}>
            Select!
        </Button> */}

        <Foods foods= { this.state.foods } onUpdateFood={ this.handledUpdateFood }/>
      </div>
    );
  }
}

export default App;
