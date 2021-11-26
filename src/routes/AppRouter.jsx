import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import ColonosRegister from '../pages/colonos/ColonosRegister'
import ColonosScreenAll from '../pages/colonos/ColonosScreenAll'
import ColonoScreen from '../pages/colonos/ColonoScreen'

import VisitasRegister from '../pages/visitas/VisitasRegister'
import VisitasScreenAll from '../pages/visitas/VisitasScreenAll'
import VisitasScreen from '../pages/visitas/VisitasScreen'

import VehiculosRegister from '../pages/vehiculos/VehiculosRegister'
import VehiculosScreenAll from '../pages/vehiculos/VehiculosScreenAll'
import VehiculosScreen from '../pages/vehiculos/VehiculosScreen'

import ViviendasRegister from '../pages/viviendas/ViviendasRegister'
import ViviendasScreenAll from '../pages/viviendas/ViviendasScreenAll'
import ViviendasScreen from '../pages/viviendas/ViviendasScreen'

import PagosRegister from '../pages/pagos/PagosRegister'
import PagosScreenAll from '../pages/pagos/PagosScreenAll'
import PagosScreen from '../pages/pagos/PagosScreen'

import PersonalRegister from '../pages/personal/PersonalRegister'
import PersonalScreenAll from '../pages/personal/PersonalScreenAll'
import PersonalScreen from '../pages/personal/PersonalScreen'

import TurnosRegister from '../pages/turnos/TurnosRegister'
import TurnosScreenAll from '../pages/turnos/TurnosScreenAll'
import TurnosScreen from '../pages/turnos/TurnosScreen'

import Login from '../pages/Login'
import PagosReception from '../pages/pagos/PagosReception'


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {/* Colonos */}
                <Route exact path="/registro-colono" component={ColonosRegister} />
                <Route exact path="/colonos" component={ColonosScreenAll} />
                <Route exact path="/colono/:id" component={ColonoScreen} />

                {/* Visitas */}
                <Route exact path="/registro-visita" component={VisitasRegister} />
                <Route exact path="/visitas" component={VisitasScreenAll} />
                <Route exact path="/visita/:id" component={VisitasScreen} />

                {/* Vehiculos */}
                <Route exact path="/registro-vehiculo" component={VehiculosRegister} />
                <Route exact path="/vehiculos" component={VehiculosScreenAll} />
                <Route exact path="/vehiculo/:id" component={VehiculosScreen} />


                {/* Viviendas */}
                <Route exact path="/registro-vivienda" component={ViviendasRegister} />
                <Route exact path="/viviendas" component={ViviendasScreenAll} />
                <Route exact path="/vivienda/:id" component={ViviendasScreen} />

                {/* pagos */}
                <Route exact path="/registro-pago" component={PagosRegister} />
                <Route exact path="/pagos" component={PagosScreenAll} />
                <Route exact path="/pago/:id" component={PagosScreen} />
                <Route exact path="/recepcion-pago" component={PagosReception} />

                {/* personal */}
                <Route exact path="/registro-personal" component={PersonalRegister} />
                <Route exact path="/personal" component={PersonalScreenAll} />
                <Route exact path="/personal/:id" component={PersonalScreen} />

                {/* turnos */}
                <Route exact path="/registro-turno" component={TurnosRegister} />
                <Route exact path="/turnos" component={TurnosScreenAll} />
                <Route exact path="/turno/:id" component={TurnosScreen} />
                {/* Login */}
                <Route exact path="/login" component={Login} />
                {/* Default */}
                <Route exact path="/" component={VisitasRegister} />

                <Route component={() => <h1>404</h1>} />

            </Switch>
            <Footer />
        </Router>
    )
}
export default AppRouter
