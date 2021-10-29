import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" >Clúster Taurus</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Visitas</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Administración
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><NavLink className="dropdown-item" to="/colono">Colonos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/vehiculo">Vehículos</NavLink></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" >Viviendas</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
