import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Viviendas from '../../../requests/Viviendas';

const TableViviendas = ({ viviendas, estatus }) => {
    const dispatch = useDispatch();

    const handleGetAll = async () => {
        let response = await Viviendas.consultar(0);
        dispatch({
            type: 'VIVIENDA_LIST',
            payload: response
        })
    }
    const handleDelete = ({ idDomicilio }) => {
        Viviendas.eliminar(idDomicilio);
        handleGetAll();
    }

    const handleActive = ({ idDomicilio }) => {
        Viviendas.activar(idDomicilio);
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

                {viviendas === null ? null : viviendas.filter(vivienda => vivienda.estatus === estatus).map(vivienda => (
                    <tr key={vivienda.idDomicilio}>
                        <td>{vivienda.calle}</td>
                        <td>{vivienda.numero}</td>
                        <td>{vivienda.descripcion}</td>
                        {vivienda.estatus === 1 ?
                            <td>
                                <button className="btn btn-danger m-2" 
                                onClick={() => handleDelete({ idDomicilio: vivienda.idDomicilio })}>Delete</button>
                                <Link to={`/vivienda/${vivienda.idDomicilio}`} >
                                    <button className="btn btn-warning m-2">Edit</button>
                                </Link>
                            </td>
                            : null}
                        {vivienda.estatus === 0 ?
                            <td>
                                <button className="btn btn-success" onClick={() => handleActive({ idDomicilio: vivienda.idDomicilio })}>Activate</button>
                            </td>
                            : null}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableViviendas
