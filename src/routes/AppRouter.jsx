import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import VehiculoScreen from '../pages/VehiculoScreen'
import ColonoScreen from '../pages/ColonoScreen'
import Login from '../pages/Login'

const AppRouter = () => {
    return (
        <Router>
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/vehiculo" component={VehiculoScreen} />
                <Route exact path="/colono" component={ColonoScreen} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Login} />
            </Switch>
        </Router>
    )
}

export default AppRouter
