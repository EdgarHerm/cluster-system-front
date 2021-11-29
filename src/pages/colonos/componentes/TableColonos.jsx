import React from 'react'
import { Link } from 'react-router-dom';

const TableColonos = ({ colonos, estatus, handleDelete, handleActive }) => {
    return (
        <>
            {colonos === null || colonos === undefined ?
                <div class="d-flex justify-content-center">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Foto</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Domicilio</th>
                                <th scope="col">Teléfono</th>
                                <th scope='col'>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colonos.filter(colono => colono.estatus === estatus).map(colono => (
                                <tr key={colono.idColono}>
                                    <td>
                                        <img src={'data:image/jpeg;base64,' + colono.foto} alt='foto' width='50' height='50' />
                                    </td>
                                    <td>{colono.nombre} {colono.apellidos}</td>
                                    <td>{colono.calle} {colono.numero} </td>
                                    <td> {colono.telefono} </td>
                                    {colono.estatus === 1 ?
                                        <td>
                                            <button className="btn btn-danger m-2"
                                                onClick={() => handleDelete({ idColono: colono.idColono })}>Delete</button>
                                            <Link to={`/colono/${colono.idColono}`} >
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
                </>
            }
        </>
    )
}

export default TableColonos
