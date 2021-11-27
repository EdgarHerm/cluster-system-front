import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrTurno from './Components/TrTurno';

const TurnosScreenAll = () => {
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
    const dispatch = useDispatch();
    const state = useSelector(state => state.turno);

    useEffect(() => {
        handleGetAll();
    }, [])

    const handleGetAll = () => {
        handleFetch({
            url: "https://deadcousing.pythonanywhere.com/turno/mostrar",
            method: "GET",
            body: JSON.stringify({
            }),
            type: "GET_TURNOS"
        });
    }

    return (
        <div className="container bg-white m-5">
            <div className="card-header  bg-color2 text-center ">
                <h5 className="card-title">Registro de Turnos</h5>
            </div>
            <table className='table table-light' >
                <thead>
                    <tr>
                        <th>Hora Inicio</th>
                        <th>Hora Fin</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.turnos.map((turno) => {
                            return (
                                <TrTurno key={turno.idTurno} {...turno} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TurnosScreenAll
