import React, { Component} from 'react'
import {Fab, TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'

class NewFood extends Component{
    newFood = React.createRef();

    //Alternative 1: Bind THIS
    // constructor(){
    //     super();
    //     this.addNewFood = this.addNewFood.bind(this);
    // }

    // addNewFood(event){
    //     console.log(event.target);
    //     console.log("Add new!");
    //     event.preventDefault();
    // }

    //Alternative 2: Use Arrow function for keeping CONTEXT
    addNewFood = (event) => {
       console.log(event.target);
       console.log("Add new!");

    //Original use! with common input
    //console.log(this.newFood.current.value);

    //Material use!
       console.log(this.newFood.value);
       event.preventDefault();

       this.props.onAddFood(this.newFood.value);
       this.newFood.value = "";
    }

    

    render(){
        return(
             <form autoComplete="false" onSubmit={this.addNewFood}>

                {/* 
                Original use! with common input
                <input ref={this.newFood} />
                 */}

                <TextField 
                    label="Food.."
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef = {e => (this.newFood = e) } 
                />

                <Fab 
                    color="primary"
                    size="medium"
                    className="dish-form-icon"
                    onClick={this.addNewFood}>
                    <AddIcon/>
                </Fab>

            </form>
        )
    }
}

export default NewFood;