import React from 'react'

const TablaVisitas = ({
    visitas, dateFormat, handleEntrada, handleSalida, handleCancelar, estatus
}) => {
    return (

        <table className="table table-light">
            <thead>
                <tr>
                    <th>Visitante</th>
                    <th>Domicilio</th>
                    <th>Fecha Entrada</th>
                    <th>Fecha Salida</th>
                    <th>Colono</th>
                    <th>Vehiculo</th>
                    <th>Matricula</th>
                    <th>Funciones</th>
                </tr>
            </thead>
            <tbody>
                {visitas === null || visitas === undefined ?
                    <div class="d-flex justify-content-center">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : visitas.filter(visita => visita.estatusV === estatus).map((visita) => {
                        return (
                            <tr id={visita.idVisita}>
                                <td>{visita.nombreV}</td>
                                <td>{visita.calle + " #" + visita.numero}</td>
                                <td>
                                    {
                                        dateFormat(visita.fechaEntrada) === "2000-01-01 00:00:00" ? "Visita Programada"
                                            : dateFormat(visita.fechaEntrada)
                                    }
                                </td>
                                <td>{
                                    dateFormat(visita.fechaSalida) === "2000-01-01 00:00:00" ? "Sin Salida"
                                        : dateFormat(visita.fechaSalida)
                                }
                                </td>
                                <td>{visita.nombre}</td>
                                <td>{visita.modelo + " " + visita.color}</td>
                                <td>{visita.matricula}</td>
                                <td>
                                    {estatus !== 0 && dateFormat(visita.fechaEntrada) === "2000-01-01 00:00:00" ?
                                        <button
                                            className="btn btn-success"
                                            onClick={() => handleEntrada({ idVisita: visita.idVisita })}
                                        >
                                            Entrada
                                        </button>
                                        : null
                                    }
                                    <br />
                                    {estatus !== 0 && dateFormat(visita.fechaSalida) === "2000-01-01 00:00:00" ?
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => handleSalida({ idVisita: visita.idVisita })}>
                                            Salida
                                        </button>
                                        : null
                                    }
                                    <br />
                                    {estatus === 0 ? null :
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleCancelar({ idVisita: visita.idVisita })}
                                        >
                                            Cancelar
                                        </button>
                                    }
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default TablaVisitas
