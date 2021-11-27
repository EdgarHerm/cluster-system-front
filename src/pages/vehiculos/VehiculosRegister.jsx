import React from 'react'

const VehiculosRegister = () => {
    const image = 'https://d3nqlc6zkdn9bc.cloudfront.net/wp-content/uploads/2021/04/13131150/4-documentos-esenciales-para-conducir-tu-vehi%CC%81culo-.jpg'
    return (

        <div className="container">
            <form action="" className="m-5 bg-white">
                <div class="card-header  bg-color2 text-center mb-2">
                    <h5 class="card-title">Registro de Vehiculo</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center  " >
                        <img src={image} alt="Imagen-Vehiculo" className="img-fluid rounded-middle " />

                        <div className="form-group mt-3 mb-3">
                            <button type="submit" className="btn btn-gold">Guardar</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Datos Vehiculo</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Marca</label>
                                <input name='marca' type="text" className="form-control" required />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Modelo</label>
                                <input name='modelo' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Color</label>
                                <input name='color' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Matricula</label>
                                <input name='matricula' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Fotografia</label>
                                <input name='fotografia' type="file" className="form-control" />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div class="card-header  bg-color2 mt-2 ">
                                <h5 class="card-title">Vehiculo - Colono</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Colono</label>
                                <select name='colono' className="form-control">
                                    <option value="">Seleccione</option>
                                    <option value="1">Si</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default VehiculosRegister
