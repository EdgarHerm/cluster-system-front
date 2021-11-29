import React from 'react'
import { Link } from 'react-router-dom'

const TablePagoRegistro = ({
    listaPagos,
    estatus,
    handleDelete,
    handleActive
}) => {

    const dateFormat = (date) => {
        let dateSplit = date.split(' ');
        let dia = dateSplit[1];
        let mes = dateSplit[2];
        let anio = dateSplit[3];
        switch (mes) {
            case 'Jan':
                mes = '01';
                break;
            case 'Feb':
                mes = '02';
                break;
            case 'Mar':
                mes = '03';
                break;
            case 'Apr':
                mes = '04';
                break;
            case 'May':
                mes = '05';
                break;
            case 'Jun':
                mes = '06';
                break;
            case 'Jul':
                mes = '07';
                break;
            case 'Aug':
                mes = '08';
                break;
            case 'Sep':
                mes = '09';
                break;
            case 'Oct':
                mes = '10';
                break;
            case 'Nov':
                mes = '11';
                break;
            case 'Dec':
                mes = '12';
                break;
            default:
                mes = '0';
                break;
        }
        return `${anio}-${mes}-${dia}`;
    }
    return (
        <>
            {
                listaPagos === undefined || listaPagos === null ?
                    <>
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-warning" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Motivo</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Inicio</th>
                                    <th scope="col">Fin</th>
                                    <th scope='col'>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaPagos === undefined || listaPagos === null ?

                                    <>
                                        <div className="d-flex justify-content-center">
                                            <div className="spinner-border text-warning" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    listaPagos.filter(pago => pago.estatus === estatus).map(pago => (
                                        <tr key={pago.idListaPago}>
                                            <td>
                                                {pago.motivoPago}
                                            </td>
                                            <td>
                                                {pago.monto}
                                            </td>
                                            <td>
                                                {dateFormat(pago.fechaInicio)}
                                            </td>
                                            <td>
                                                {dateFormat(pago.fechaFin)}
                                            </td>
                                            <td>
                                                {pago.descripcion}
                                            </td>
                                            {pago.estatus === 1 ?
                                                <td>
                                                    <button className="btn btn-danger m-2"
                                                        onClick={() => handleDelete({ idListaPago: pago.idListaPago })}>Delete</button>
                                                    <Link to={`/pago/${pago.idListaPago}`} >
                                                        <button className="btn btn-warning m-2">Edit</button>
                                                    </Link>
                                                </td>
                                                : null}
                                            {pago.estatus === 0 ?
                                                <td>
                                                    <button className="btn btn-success" onClick={
                                                        () => handleActive({
                                                            idListaPago: pago.idListaPago
                                                        })
                                                    }>
                                                        Activate
                                                    </button>
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

export default TablePagoRegistro
