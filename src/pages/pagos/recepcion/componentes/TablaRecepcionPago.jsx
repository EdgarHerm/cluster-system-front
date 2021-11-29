import React from 'react';
import { Link } from 'react-router-dom';

const TablaRecepcionPago = ({
    listaRecepcionPago,
    estatus,
    handleAceptar,
    handleCancelar,
}) => {

    const dateFormat = (date) => {
        try {

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
        } catch (error) {
            console.log(error);
            return date;
        }

    }


    return (
        <>
            {
                listaRecepcionPago === undefined || listaRecepcionPago === null ?
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
                                    <th scope="col">Recepcion</th>
                                    <th scope="col">Colono</th>
                                    <th scope="col">Pago</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Fecha de Pago</th>
                                    <th scope='col'>Evidencia</th>
                                    {
                                        estatus === 0 ? null :
                                            <th scope='col'>Opciones</th>
                                    }

                                </tr>
                            </thead>
                            <tbody>
                                {listaRecepcionPago.filter(
                                    recepcionPago => recepcionPago.estatus === estatus).map(recepcionPago => (
                                        <tr key={recepcionPago.idRecepcionPago}>
                                            <td>
                                                {dateFormat(recepcionPago.fechaRecepcion)}
                                            </td>
                                            <td>
                                                {recepcionPago.nombre + " " + recepcionPago.apellidos}
                                            </td>
                                            <td>
                                                {recepcionPago.motivoPago}
                                            </td>
                                            <td>
                                                {recepcionPago.monto}
                                            </td>
                                            <td>
                                                {dateFormat(recepcionPago.fechaPago)}
                                            </td>
                                            <td>
                                                <img src={'data:image/jpeg;base64,' + recepcionPago.fotoEvidencia} alt='foto' width='50' height='50' />
                                            </td>

                                            <td>
                                                {recepcionPago.estatus !== 0 ?
                                                    <>
                                                        {recepcionPago.estatus === 2 ?
                                                            <>
                                                                <button className="btn btn-success"
                                                                    onClick={() => handleAceptar({
                                                                        idRecepcionPago: recepcionPago.idRecepcionPago
                                                                    })}>
                                                                    Aceptar
                                                                </button>
                                                            </>

                                                            : null}

                                                        <button className="btn btn-danger m-2"
                                                            onClick={() => handleCancelar({
                                                                idRecepcionPago: recepcionPago.idRecepcionPago
                                                            })}>
                                                            Cancelar
                                                        </button>
                                                    </>
                                                    : null}
                                                {/* 
                                                <Link to={`/pago/${recepcionPago.idRecepcionPago}`} >
                                                    <button className="btn btn-warning m-2">Detalle</button>
                                                </Link> */}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </>
            }
        </>
    )
}

export default TablaRecepcionPago
