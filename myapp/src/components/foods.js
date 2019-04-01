import React, { Component } from 'react'
import { GridList } from '@material-ui/core';
// import Restaurant from '@material-ui/icons/Restaurant'
import  Food  from './food'


export class Foods extends Component{


    goBack = e => {
        e.preventDefault();
        this.props.history.push("/");
      }

    handleUpdateFood = (index,updatedName) => {
        console.log(updatedName);
        //say news to the parent
        this.props.onUpdateFood(index,updatedName);
    }

    render(){
        return(
            <div>
                {/* <h1>Foods!</h1>
                <Button variant="contained" color="secondary" onClick={ this.goBack}>
                    Back!
                 </Button> */}

                {/* {
                    data.foods.map((food,i) => {
                    return <div key={i}>>
                                <div> {food.name } </div>
                                <div> {food.ingredients } </div>
                            </div>
                    })
                } */}

                {/* <List 
                    component="nav"
                    subheader= { <ListSubheader
                                    component="div">
                                        Foods
                                 </ListSubheader> }>
                
                    {
                        data.foods.map((food,i) => {
                            return <ListItem button key={i}>
                                        <ListItemIcon>
                                            <Restaurant/>
                                        </ListItemIcon>
                                        <ListItemText insert primary= {food.name} />>
                                   </ListItem>
                        })
                    }
                </List> */}
                <GridList>
                    {
                        this.props.foods.map((food,i) => 
                        (
                            <Food 
                                key={i} 
                                name={ food.name } 
                                ingredients = { food.ingredients } 
                                index = { i }
                                onUpdateFood = { this.handleUpdateFood }></Food>
                        ))
                    }
                </GridList>

            </div>
        )
    }
}

export default Foods;