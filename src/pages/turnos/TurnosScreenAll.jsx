import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TurnoRequest from '../../requests/TurnoRequest';

const TurnosScreenAll = () => {
    const dispatch = useDispatch();
    const turnos = useSelector(state => state.turno.turno);

    const handleGetAll = async () => {
        let response = await TurnoRequest.mostrar();
        dispatch({
            type: 'GET_TURNOS',
            payload: response
        });
    }
    const handleDelete = async (idTurno) => {
        TurnoRequest.eliminar(idTurno);
        handleGetAll();
    }


    const [init, setInit] = useState(0)

    useEffect(() => {
        if (init === 0) {
            handleGetAll()
            setInit(1)
        }
    }, [turnos])

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
                    {turnos === null ? null :
                        turnos.filter(turno => turno.estatus === 1).map(turno => (
                            <tr key={turno.idTurno} >
                                <td>{turno.horaInicio}</td>
                                <td>{turno.horaFin}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(turno.idTurno)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default TurnosScreenAll
