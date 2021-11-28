import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import ColonoRequest from '../../../requests/ColonoRequest';

const TableColonos = ({ colonos, estatus }) => {

    const dispatch = useDispatch();

    const handleGetAll = async () => {
        let response = await ColonoRequest.consultar(0);
        dispatch({
            type: 'lIST_COLONO',
            payload: response
        })
    }

    const handleDelete = ({ idColono }) => {
        ColonoRequest.eliminar(idColono);
        handleGetAll();
    }

    const handleActive = ({ idColono }) => {
        ColonoRequest.activar(idColono);
        handleGetAll();
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Calle</th>
                    <th scope="col">Numero</th>
                    <th scope="col">Descripción</th>
                    <th scope='col'>Options</th>
                </tr>
            </thead>
            <tbody>

                {colonos === null ? null : colonos.filter(colono => colono.estatus === estatus).map(colono => (
                    <tr key={colono.idColono}>
                        <td>Simbolico Image</td>
                        <td>{colono.nombre} {colono.apellidos}</td>
                        <td>{colono.calle} {colono.numero} </td>
                        <td> {colono.telefono} </td>
                        {colono.estatus === 1 ?
                            <td>
                                <button className="btn btn-danger m-2"
                                    onClick={() => handleDelete({ idColono: colono.idColono })}>Delete</button>
                                <Link to={`/vivienda/${colono.idColono}`} >
                                    <button className="btn btn-warning m-2">Edit</button>
                                </Link>
                            </td>
                            : null}
                        {colono.estatus === 0 ?
                            <td>
                                <button className="btn btn-success" onClick={() => handleActive({ idColono: colono.idColono })}>Activate</button>
                            </td>
                            : null}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableColonos
