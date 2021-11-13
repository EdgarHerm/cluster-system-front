import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Login from '../pages/Login'
import Footer from '../components/Footer'
import ColonosScreenAll from '../pages/colonos/ColonosScreenAll'
import VisitasScreenAll from '../pages/visitas/VisitasScreenAll'
import VehiculosScreenAll from '../pages/vehiculos/VehiculosScreenAll'


const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/vehiculo" component={VehiculosScreenAll} />
                <Route exact path="/colono" component={ColonosScreenAll} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/visita" component={VisitasScreenAll} />
                <Route exact path="/" ><Login /></Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
