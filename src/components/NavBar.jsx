import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const image_path = "./assets/img/TaurusCluster_sinFondo.png";

const NavBar = ({ history }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.clear();
        sessionStorage.clear();
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-color1 " style={localStorage.getItem('token') ? null : { display: 'none' }} >
            <div className="container-fluid">

                <Link className="navbar-brand txt-color3" to={'/'} >
                    <img src={image_path} className='nav-logo' alt="" />
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
                                Colonos
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><NavLink className="dropdown-item" to="/colonos">Colonos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/registro-colono">Registro Colonos</NavLink></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><NavLink className="dropdown-item" to="/vehiculos">Vehiculos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/registro-vehiculo">Registro Vehiculos</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle txt-color3" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Visitas
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><NavLink className="dropdown-item" to="/registro-visita">Registro Visitas</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/visitas">Visitas</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle txt-color3" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Viviendas
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><NavLink className="dropdown-item" to="/registro-vivienda">Registro Viviendas</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/viviendas">Viviendas</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle txt-color3" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Personal
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><NavLink className="dropdown-item" to="/registro-personal">Registro Personal</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/personal">Personal</NavLink></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><NavLink className="dropdown-item" to="/registro-turno">Registro Turnos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/turnos">Turnos</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle txt-color3" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pagos
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><NavLink className="dropdown-item" to="/pagos">Pagos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/registro-pago">Registro Pagos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/recepcion-pago">Recepcion Pagos</NavLink></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className="m-2">
                    <p>{sessionStorage ? sessionStorage.nombre : ''}</p>
                </div>
                <button className='btn btn-gold' onClick={handleLogout}>
                    Cerrar Sesion
                </button>
            </div>
        </nav>

    )
}

export default withRouter(NavBar)
