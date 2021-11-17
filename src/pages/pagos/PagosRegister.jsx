import React from 'react'

const PagosRegister = () => {
    const image = 'https://image.shutterstock.com/image-vector/monthly-salary-on-time-money-260nw-1811290201.jpg'
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
                                <h5 class="card-title">Datos de Pago</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Motivo Pago</label>
                                <input name='motivo' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Monto</label>
                                <input name='montos' type="number" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Fecha Inicio</label>
                                <input name='fechaIni' type="date" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Fecha Fin</label>
                                <input name='fechaFin' type="date" className="form-control" />
                            </div>

                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Descripción</label>
                                <input name='descripcion' type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PagosRegister
