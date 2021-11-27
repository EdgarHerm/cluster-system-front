import React from 'react'
import { useDispatch } from 'react-redux';

const TrTurno = ({ horaInicio, horaFin, idTurno }) => {
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
    const handleDelete = () => {
        handleFetch({
            url: "https://deadcousing.pythonanywhere.com/turno/desactivar",
            method: "POST",
            body: JSON.stringify({
                idTurno: idTurno
            }),
            type: "DELETE_TURNO"
        });
        console.log("Esperemos que si se haya eliminado xd");
        handleGetAll();
    }
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
        <tr id={idTurno} >
            <td>{horaInicio}</td>
            <td>{horaFin}</td>
            <td>
                <button className='btn-success btn'> Editar </button>
                <button className='btn-danger btn' onClick={handleDelete} > Eliminar </button>
            </td>
        </tr>
    )
}

export default TrTurno
