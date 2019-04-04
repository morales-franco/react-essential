import React, { Component } from 'react'
import { IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete'


export class Country extends Component{

    componentWillUnmount(){
        console.log("[Country]Componente desmontado!");
    }

    delete = (name) => {
        this.props.onDelete(name);
    }
  
    render(){
        return(
            <li>
                <IconButton size="small" onClick={() => this.delete(this.props.name) } >
                    <Delete/>
                </IconButton>
                {this.props.name}
            </li>
        )
    }
}

export default Country;