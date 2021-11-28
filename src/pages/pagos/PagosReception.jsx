import React from 'react'

const PagosReception = () => {
    const image = 'https://media.istockphoto.com/vectors/calendar-payday-loan-monthly-payment-flat-color-line-icon-vector-id1192933425'
    return (

        <div className="container">
            <form action="" className="m-5 bg-white">
                <div class="card-header  bg-color2 text-center mb-2">
                    <h5 class="card-title">Registro de Pago</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center" >
                        <img src={image} alt="..." className="img-fluid rounded-middle m-2" />

                        <div className="form-group mt-3 mb-3">
                            <button type="submit" className="btn btn-gold">Guardar</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Seleccion Pago y Colono</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Pago</label>
                                <select name='lista_pagos' className="form-control">
                                    <option value="">Seleccione</option>
                                    <option value="1">Si</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Colono</label>
                                <select name='lista_colono' className="form-control">
                                    <option value="">Seleccione</option>
                                    <option value="1">Si</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Datos del Pago</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Fecha del Pago</label>
                                <input name='fechaPago' type="date" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Foto Evidencia</label>
                                <input name='montos' type="file" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Descripción</label>
                                <textarea name='descripcion' type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PagosReception
