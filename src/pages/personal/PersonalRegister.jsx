import React from 'react'

const PersonalRegister = () => {
    const image = 'https://media.istockphoto.com/photos/security-guard-listening-to-earpiece-against-building-picture-id614438318'
    return (

        <div className="container">
            <form action="" className="m-5 bg-white">
                <div class="card-header  bg-color2 text-center mb-2">
                    <h5 class="card-title">Registro de Colono</h5>
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
                                <h5 class="card-title">Datos Personales</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Nombres</label>
                                <input name='nombre' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Apellidos</label>
                                <input name='apellidos' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Teléfono</label>
                                <input name='telefono' type="text" className="form-control" />
                            </div>

                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Fotografia</label>
                                <input name='fotografia' type="file" className="form-control" />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Datos de Usuario</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Correo</label>
                                <input name='correo' type="text" className="form-control" />
                            </div>
                            <div className="col-6"></div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Contraseña</label>
                                <input name='contraseña' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Confirmar Contraseña</label>
                                <input name='confirmarContraseña' type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="row m-2">
                            <div class="card-header  bg-color2">
                                <h5 class="card-title">Datos de Personal</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Empresador</label>
                                <input name='empresador' type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">zona</label>
                                <input name='contraseña' type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div class="card-header  bg-color2 mt-2 ">
                                <h5 class="card-title">Turno - Personal</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Turno</label>
                                <select name='turno' className="form-control">
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

export default PersonalRegister
