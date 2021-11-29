import React from 'react'

const VisitasRegister = () => {
    const image = 'https://media.istockphoto.com/photos/happy-millennial-couple-visiting-realtor-buying-first-home-picture-id1051395272'
    return (

        <div className="container">
            <form action="" className="m-5 bg-white">
                <div class="card-header  bg-color2 text-center mb-2">
                    <h5 class="card-title">Registro de Visita</h5>
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
                            <div class="card-header  bg-color2 mt-2 ">
                                <h5 class="card-title">Vivienda o Colono</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Vivienda</label>
                                <select name='vivienda' className="form-control">
                                    <option value="">Seleccione</option>
                                    <option value="1">Si</option>
                                    <option value="2">No</option>
                                </select>
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
                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Datos visitante</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Nombres</label>
                                <input name='nombres' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Apellidos</label>
                                <input name='apellidos' type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Datos Vehiculo</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Marca</label>
                                <input name='marca' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Modelo</label>
                                <input name='modelo' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Color</label>
                                <input name='color' type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default VisitasRegister
