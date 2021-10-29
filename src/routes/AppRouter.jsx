import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import VehiculoScreen from '../pages/VehiculoScreen'
import ColonoScreen from '../pages/ColonoScreen'

const AppRouter = () => {
    return (
        <Router>
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/vehiculo" component={VehiculoScreen}/>
                <Route exact path="/colono" component={ColonoScreen}/>
            </Switch>
        </Router>
    )
}

export default AppRouter
