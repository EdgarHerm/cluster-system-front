import React from 'react'

const FormularioPagoRegistro = ({ image, data, handleSuccess, handleChange }) => {
    const { motivoPago, monto, descripcion, fechaFin } = data

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
                                <h5 className="card-title">Datos de Pago</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Motivo Pago</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="motivoPago"
                                    value={motivoPago}
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Monto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="monto"
                                    value={monto}
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Fecha Fin</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fechaFin"
                                    value={fechaFin}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Descripción</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioPagoRegistro
