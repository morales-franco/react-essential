import React, { Component, Fragment } from 'react'
import { Button, Card, CardContent, List, ListItem, ListSubheader, ListItemIcon, ListItemText, TextField, IconButton } from '@material-ui/core';
import ScatterPlot from '@material-ui/icons/ScatterPlot'
import Edit from '@material-ui/icons/Edit'

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

    state = {
        edit : false,
        name : this.props.name
    }

    edit = e =>  {
        this.setState({ edit : !this.state.edit });
    };

    handleChange = e => {
        let newState = { ...this.state }; //newState is a Copy of state
        newState.name = e.currentTarget.value;
        this.setState(newState);
        this.props.onUpdateFood( this.props.index, newState.name);
    };

    render(){

        //Accedemos a los parametros que estan en la url (declarados previamente en el Router)
    //    const { params } = this.props.match;  

        return(
            // <div className="food">
            //    <h1>{ params.name }! - From URL</h1>
            //     <h1>{this.props.name}!</h1>
            //     {this.props.quantity}
            //     <Ingredient></Ingredient>
            //     <Button variant="contained" color="secondary">Click me!</Button>
            // </div>
            <Card className="card" key={this.props.key }>
                <CardContent>
                    <List 
                        component="nav"
                        subheader = {
                            <ListSubheader component="div">
                                {
                                    this.state.edit ? 
                                        (<TextField 
                                            label="Food.." 
                                            type = "text" 
                                            margin = "normal"
                                            variant = "outlined"
                                            value = {this.state.name} 
                                            onChange = { this.handleChange }/>
                                        )
                                        :
                                        ( this.state.name )
                                }
                                <IconButton
                                    size="small"
                                    onClick = { this.edit }>
                                    <Edit />
                                </IconButton>
                            </ListSubheader>
                        }>

                        {
                            this.props.ingredients.map((ingredient, i) => 
                            (
                                <ListItem button key={i}>
                                    <ListItemIcon>
                                        <ScatterPlot />
                                    </ListItemIcon>
                                    <ListItemText inset primary={ingredient} />
                                </ListItem>
                            ))
                        }

                    </List>
                </CardContent>
            </Card>
        )
    }
}

export default Food;