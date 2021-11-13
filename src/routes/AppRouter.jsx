import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import VehiculoScreen from '../pages/VehiculoScreen'
import ColonoScreen from '../pages/ColonoScreen'
import Login from '../pages/Login'
import Footer from '../components/Footer'
import Visita from '../pages/Visita'

const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/vehiculo" component={VehiculoScreen} />
                <Route exact path="/colono" component={ColonoScreen} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/visita" component={Visita} />
                <Route exact path="/" ><Login /></Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
