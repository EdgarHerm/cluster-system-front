import React from 'react'
import FormularioColono from './FormularioColono';
import FormularioVehiculo from './FormularioVehiculo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Clúster Taurus</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarScroll">
                            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li class="nav-item">
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Visitas</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Administración
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><Link className="dropdown-item" to="/colonos">Colonos</Link></li>
                                        <li><Link className="dropdown-item" to="/vehiculo">Vehículos</Link></li>
                                        <li><hr class="dropdown-divider"></hr></li>
                                        <li><a class="dropdown-item" href="#">Viviendas</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/colonos">
                        <FormularioColono />
                    </Route>
                    <Route path="/vehiculo">
                        <FormularioVehiculo />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default NavBar
