import React, { Component, Fragment } from 'react'

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
                <h1>Ingredient</h1>
            </Fragment>
        )
    }
}


class Food extends Component{

    render(){
        return(
            <div>
                <h1>Food</h1>
                <Ingredient></Ingredient>
            </div>
        )
    }
}

export default Food;