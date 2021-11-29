import React from 'react'

const FormularioRecepcionPago = ({ image, data, handleSuccess, handleChange, onFileChange, listaPagos, colonos, handleGetAllColono,
    handleGetAllPagos }) => {

    const { fechaPago, fotoEvidencia, fechaRecepcion, descripcion, idColono, idListaPago } = data;
    return (

        <div className="container">
            <form action="" className="m-5 bg-white">
                <div className="card-header  bg-color2 text-center mb-2">
                    <h5 className="card-title">Registro de Pago</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center" >
                        <img src={image} alt="..." className="img-fluid rounded-middle m-2" />

                        <div className="form-group mt-3 mb-3">
                            <button className="btn btn-gold btn-block" onClick={handleSuccess}>Guardar</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row m-2">
                            <div className="card-header  bg-color2">
                                <h5 className="card-title">Seleccion Pago y Colono</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Pago</label>
                                <select
                                    className="form-control"
                                    name="idListaPago"
                                    value={idListaPago}
                                    onChange={handleChange}
                                >
                                    {listaPagos === undefined || listaPagos.length === null ?
                                        <>
                                            <option value="">No hay pagos</option>
                                        </>

                                        :
                                        listaPagos.filter(pago => pago.estatus === 1).map(pago => (
                                            <option key={pago.idListaPago} value={pago.idListaPago}>{pago.motivoPago}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Colono</label>
                                <select
                                    className="form-control"
                                    name="idColono"
                                    value={idColono}
                                    onChange={handleChange}>
                                    {colonos === undefined || colonos.length === 0 ?
                                        <>
                                            {handleGetAllColono}
                                            <option value="">Cargando...</option>
                                        </>
                                        :
                                        colonos.filter(colono => colono.estatus === 1).map(colono => (
                                            <option key={colono.idColono} value={colono.idColono}>{colono.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="card-header  bg-color2">
                                <h5 className="card-title">Datos del Pago</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Fecha del Pago</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fechaPago"
                                    value={fechaPago}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Foto Evidencia</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="fotoEvidencia"
                                    onChange={onFileChange}
                                    accept="image/*"
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Descripción</label>
                                <textarea
                                    className="form-control"
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default FormularioRecepcionPago
