import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from './App';
import funcComp from './comps/funcComp'

export default (
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/funccomp" component={funcComp}/>
    </Switch>
)