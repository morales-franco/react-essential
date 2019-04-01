import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './../App'
import Food from './food'
import Foods from './foods'
import Countries from './countries'
import NotFound from './notFound'

//Creo componente sin estado!     
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= { App } />
            <Route path="/foods" component= { Foods } />
            <Route path="/food/:name" component= { Food } />
            <Route path="/countries" component= { Countries } />
            <Route component= { NotFound } />
        </Switch>

    </BrowserRouter>
)

export default Router;