import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';

export class Flag extends Component{

    render(){
        return(
            <div>
                <h1>Flag!</h1>
            </div>
        )
    }
}

export class Ingredient extends Component{
    render(){
        return(
            <Fragment>
                <h4>Ingredient</h4>
            </Fragment>
        )
    }
}


class Food extends Component{

    render(){
        return(
            <div className="food">
                <h1>{this.props.name}!</h1>
                {this.props.quantity}
                <Ingredient></Ingredient>
                <Button variant="contained" color="secondary">Click me!</Button>
            </div>
        )
    }
}

export default Food;