import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import RequestLogin from '../requests/RequestLogin';
import Swal from 'sweetalert2'



const Login = ({ history }) => {
    //const [usuario, setUsuario] = useState('candeGTZ7@gmail.com');
    //const [contrasenia, setContrasenia] = useState('CandeGTZ7');
    const dispatch = useDispatch();

    // CommonJS
    const Swal = require('sweetalert2')

    const [user, setUser] = useState({
        usuario: '',
        contrasenia: ''
    });

    const { usuario, contrasenia } = user;
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        let response = await RequestLogin.login(user);
        dispatch({
            type: 'LOGIN',
            payload: response
        });
        try {
            if (response['idRol']) {
                if (response['idRol'] === 1) {

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        background: '#222126',
                        title: 'Inicio de Session Exitoso',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    history.push('/');
                } else {
                    //alert('No tiene permisos para acceder a esta sección');
                    localStorage.clear();
                    sessionStorage.clear();

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        background: '#222126',
                        title: 'No tiene permisos para acceder a esta sección',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            } else {
                //alert('Usuario o contraseña incorrectos');
                localStorage.clear();
                sessionStorage.clear();

                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    background: '#222126',
                    title: 'Usuario o contraseña incorrectos',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.log("Error: " + error);
        }

    };



    const image_path = "./assets/img/TaurusCluster_sinFondo.png";
    return (
        <div className='m-0 vh-100 row justify-content-center align-items-center' >
            <div className="col-6 p-1 text-center bg-color1 card" style={{ width: "25rem" }}>
                <h1 className=''>Login</h1>

                <img src={image_path} className="card-img-top logo" alt="..." />
                <div className="card-body">
                    <form >
                        <img src="" alt="" />
                        <div className='form-group'>
                            <label htmlFor="usuario">Usuario</label>
                            <input
                                type="email"
                                className='form-control'
                                placeholder="Correo del Usuario"
                                name='usuario'
                                id="usuario"
                                value={usuario}
                                onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="contrasenia">Contraseña</label>
                            <input
                                type="password"
                                className='form-control'
                                placeholder="Contraseña"
                                name='contrasenia'
                                id="contrasenia"
                                value={contrasenia}
                                onChange={handleChange} />
                        </div>
                        <br />
                        <button className="btn btn-gold" onClick={handleLogin} >Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
