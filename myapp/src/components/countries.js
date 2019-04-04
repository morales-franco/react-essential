import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import  Country  from './country'

export class Countries extends Component{

    constructor(){
        super();
        this.state = {
            countries : [] 
        }
    }

    //Se ejecuta cuando los componentes estan incializados
    //Una vez que termina el Render
    //Simil INIT Angular
    componentDidMount(){
        this.loadCountries();
    }

    //Se ejecuta cuando se actualiza el estado de un componente! (ante una modificación)
    componentDidUpdate(){
        console.log("[Countries]Componente actualizado!");
    }

    loadCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ countries : data})
            })
            .catch(error => console.log(error))
    }

    delete = (name) => {
        let newState = { ...this.state };
        
        newState.countries = newState.countries
            .filter( country => country.name !== name  );

            this.setState(newState);
    }

    render(){
        return(
            <div>
                <h1>Countries!</h1>
                <ul>
                    {
                        this.state.countries.map((country, i) => (
                            <Country key={i} name={country.name} onDelete={ this.delete } />
                            ))
                    }
                </ul>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.loadCountries}>
                    Load List!
                </Button>
            </div>
        )
    }
}

export default Countries;