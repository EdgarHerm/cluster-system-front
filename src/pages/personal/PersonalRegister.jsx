import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const PersonalRegister = () => {

    const [correo, setCorreo] = useState('')
    const [contrasenia, setContrasenia] = useState('')
    const [idRol, setIdRol] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellidos,setApellidos] = useState('')
    const [telefono, setTelefono] = useState('')
    const [empresa, setEempresa] = useState('')
    const [zona, setZona] = useState('')
    const [turno,setTurno] = useState('')
    const state = useSelector(state => state.turno);
    const dispatch = useDispatch();
    const clear = () => {
        setCorreo('');
        setContrasenia('');
        setIdRol('');
        setNombre('');
        setApellidos('');
        setTelefono('');
        setEempresa('');
        setZona('');
        setTurno('');
    };
    useEffect(() => {
        handleGetAll();
    }, [])

    const handleFetch = async ({ url, method, body, type }) => {
        switch (method) {
            case 'POST':
                await fetch(
                    url, {
                    method: method,
                    headers: new Headers({
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                        'Access-Control-Allow-Headers': 'Authorization,Lang'
                    }),
                    body: body,
                }).then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.log(response);

                    }
                }).then((data) => {
                    console.log(data);
                    dispatch({
                        type: type,
                        payload: data
                    })
                }).catch((error) => {
                    console.log(error);
                });
                break;
            case 'GET':
                await fetch(
                    url, {
                    method: method
                }).then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else console.log(response);
                }).then((data) => {
                    console.log(data['0']);
                    dispatch({
                        type: type,
                        payload: data
                    })
                }).catch((error) => {
                    console.log(error);
                });
                break;
            default:
                break;
        }
    }


    const handleGetAll = (e) => {
        handleFetch({
            url: "https://deadcousing.pythonanywhere.com/turno/mostrar",
            method: "GET",
            body: JSON.stringify({
            }),
            type: "GET_TURNOS"
        });
        console.log(state.turnos.map(turno => turno.horaInicio));
    }

    const handleRegister = (e) => {
        e.preventDefault();
        handleFetch({
            url: "https://deadcousing.pythonanywhere.com/empleado/agregar",
            method: "POST",
            body: JSON.stringify({
                correo: correo,
                contraseña: contrasenia,
                idRol: idRol,
                nombre: nombre,
                apellidos: apellidos,
                telefono: telefono,
                estatus: 1,
                empresa: empresa,
                zona: zona,
                turno: turno
            }),
            type: "ADD_EMPLEADO"
        });
        clear();
    }

    const image = 'https://media.istockphoto.com/photos/security-guard-listening-to-earpiece-against-building-picture-id614438318'
    return (

        <div className="container">
            <form action="" className="m-5 bg-white">
                <div class="card-header  bg-color2 text-center mb-2">
                    <h5 class="card-title">Registro de Empleado</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center" >
                        <img src={image} alt="..." className="img-fluid rounded-middle m-2" />

                        <div className="form-group mt-3 mb-3">
                        <button type="submit" className="btn btn-gold" onClick={handleRegister} >Guardar</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Datos Personales</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Nombres</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    id="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Apellidos</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="apellidos"
                                    id="apellidos"
                                    value={apellidos}
                                    onChange={(e) => setApellidos(e.target.value)}
                                    placeholder="Apellidos"
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Teléfono</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="telefono"
                                    id="telefono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    placeholder="Telefono"
                                />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Datos de Usuario</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Correo</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="correo"
                                    id="correo"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                            <label htmlFor="">Rol</label>
                                <select name='idRol' id='idrol' value ={idRol} className="form-control" onChange={(e) => setIdRol(e.target.value)}>
                                   <option default>Seleccione</option>
                                   <option value="1">Administrador</option>
                                   <option value="2">Empleado</option>
                                </select>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="contrasenia"
                                    id="contrasenia"
                                    value={contrasenia}
                                    onChange={(e) => setContrasenia(e.target.value)}
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Confirmar Contraseña</label>
                                <input name='confirmarContraseña' type="password" className="form-control" />
                            </div>
                        </div>

                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Datos de Personal</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Empresa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="empresa"
                                    id="empresa"
                                    value={empresa}
                                    onChange={(e) => setEempresa(e.target.value)}
                                    placeholder="Empresa"
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Zona</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="zona"
                                    id="zona"
                                    value={zona}
                                    onChange={(e) => setZona(e.target.value)}
                                    placeholder="Zona"
                                />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div class="card-header  bg-color2 mt-2 ">
                                <h5 class="card-title">Turno - Personal</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Turno</label>
                                <select value = {turno} name='turno' id='turno' className="form-control"  onChange={(e) => setTurno(e.target.value)}>
                                    {
                                        state.turnos.map((turno) =>{
                                            return(
                                                <option value={turno.idTurno}>{turno.horaInicio}- {turno.horaFin}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PersonalRegister
