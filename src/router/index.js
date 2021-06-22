import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import Detil from '../pages/detil'
import Login from '../pages/Auth/index'
import Step from '../pages/Auth/step-two'
import PerviewData from '../pages/Auth/perviewData'
import Finish from '../pages/Auth/finish'

function Routers() {
    return (
        <Router>
            <Switch>
                <Route path='/signup/finish' component={Finish} />
                <Route path='/signup/perview-data' component={PerviewData} />
                <Route path='/signup/step-two' component={Step} />
                <Route path='/signup' component={Login} />
                <Route path="/detil/:id" component={Detil} />
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
            </Switch> 
        </Router>
    )
}

export default Routers
