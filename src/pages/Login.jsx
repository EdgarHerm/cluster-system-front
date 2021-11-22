import React, { useState } from 'react'
import { store } from '../app/store';

const Login = () => {
    const state = store.getState();
    const [usuario, setUsuario] = useState('candeGTZ@gmail.com');
    const [contrasenia, setContrasenia] = useState('CandeGTZ7');

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        const respuesta = await fetch(
            "https://deadcousing.pythonanywhere.com/sesion/login", {
            method: "POST",
            mode: "no-cors",
            credentials: 'omit', // include, *same-origin, omit
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                usuario: 'candeGTZ@gmail.com',
                contrasenia: 'CandeGTZ7'
            }),
        }).then((response) => {
            if (response.ok) {
                console.log(response);
                return response.json();
            } else {
                console.log(response);

            }
        });
        console.log('respuesta: ' + respuesta);

    }



    const handleConsole = () => {
        console.log(state);
    }
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
                            <input type="email" className='form-control' id="usuario"
                                value={usuario} onChange={(e) => setUsuario(e.target.value)}
                                aria-describedby="usuarioHelp" placeholder="Enter usuario" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="contrasenia">Contraseña</label>
                            <input type="password" className='form-control' id="contrasenia"
                                value={contrasenia} onChange={(e) => setContrasenia(e.target.value)}
                                placeholder="Contraseña" />
                        </div>
                        <br />
                        <button className="btn btn-gold" onClick={handleSubmitLogin} >Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
