import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const TurnosRegister = () => {
    const [horaInicio, setHoraInicio] = useState('00:00');
    const [horaFin, setHoraFin] = useState('00:00');
    const state = useSelector(state => state.turno);
    const turnos = state
    const dispatch = useDispatch();
    const initTurno = () => {
        setHoraInicio('00:00');
        setHoraFin('00:00');
    }
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
        e.preventDefault();
        handleFetch({
            url: "https://deadcousing.pythonanywhere.com/turno/mostrar",
            method: "GET",
            body: JSON.stringify({
            }),
            type: "GET_TURNOS"
        });
        initTurno();
        console.log("state: "+state.turnos);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        handleFetch({
            url: "https://deadcousing.pythonanywhere.com/turno/agregar",
            method: "POST",
            body: JSON.stringify({
                horaInicio: horaInicio,
                horaFin: horaFin
            }),
            type: "ADD_TURNO"
        });
        initTurno();
    }
    const image = 'https://media.istockphoto.com/photos/wall-clock-isolated-on-white-ten-past-ten-picture-id590618818'
    return (
        <div className="container">
            <form action="" className="bg-white m-5 ">
                <div className="card-header  bg-color2 text-center mb-2">
                    <h5 className="card-title">Registro de Turnos</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center  " >
                        <img src={image} alt="..." className="img-fluid rounded-middle ms-3 mt-2" />
                        <div className="form-group mt-3 mb-3">
                            <button type="submit" className="btn btn-gold" onClick={handleRegister} >Guardar</button>
                        </div>

                        <div className="form-group mt-3 mb-3">
                            <button type="submit" className="btn btn-gold" onClick={handleGetAll} >GetAll</button>
                        </div>
                    </div>
                    <div className="col-8 ">

                        <div className="card-header  bg-color2 text-center m-2">
                            <h5 className="card-title">Datos del Turno</h5>
                        </div>
                        <div className="row m-2">
                            <div className="form-group col">
                                <label htmlFor="">Hora Inicio</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="horaInicio"
                                    id="horaInicio"
                                    value={horaInicio}
                                    onChange={(e) => setHoraInicio(e.target.value)}
                                    placeholder="Hora Inicio"
                                />

                            </div>
                            <div className="form-group col">
                                <label htmlFor="">Hora Fin</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="horaFin"
                                    id="horaFin"
                                    value={horaFin}
                                    onChange={(e) => setHoraFin(e.target.value)}
                                    placeholder="Hora Fin"
                                />
                            </div>
                        </div>
                        <div className="">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TurnosRegister
