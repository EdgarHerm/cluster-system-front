import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-color1 ">
            <div className="container-fluid">

                <Link className="navbar-brand txt-color3"to={'/'} >
                    <img src="TaurusCluster_sinFondo.png" className='nav-logo' alt="" />
                </Link>
                <Link className="navbar-brand txt-color3" to={'/'} >
                    <h2>Clúster Taurus</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link txt-color3" to={'/visita'}>Visitas</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle txt-color3" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Administración
                            </Link>
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
    