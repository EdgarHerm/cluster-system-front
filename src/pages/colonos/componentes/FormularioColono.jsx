import React from 'react'

const FormularioColono = ({
    image, handleSuccess, data, handleChange, onFileChange,viviendas
}) => {
    const { nombre,
        apellidos,
        fotografia,
        telefono,
        correo,
        contrasena,
        confirmarContrasena,
        idDomicilio } = data


    return (

        <div className="container">
            <form action="" className="m-5 bg-white">
                <div className="card-header  bg-color2 text-center mb-2">
                    <h5 className="card-title">Registro de Colono</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center  " >
                        <img src={image} alt="..." className="img-fluid rounded-middle " />

                        <div className="form-group mt-3 mb-3">
                            <button className="btn btn-gold btn-block" onClick={handleSuccess}>Guardar</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row m-2">
                            <div className="card-header  bg-color2">
                                <h5 className="card-title">Datos Personales</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Nombres</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleChange}
                                    placeholder="Nombres"
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Apellidos</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="apellidos"
                                    value={apellidos}
                                    onChange={handleChange}
                                    placeholder="Apellidos"
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Teléfono</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="telefono"
                                    value={telefono}
                                    onChange={handleChange}
                                    placeholder="Teléfono"
                                />
                            </div>

                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Fotografia</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="fotografia"
                                    onChange={onFileChange}
                                    placeholder="Fotografia"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="card-header  bg-color2">
                                <h5 className="card-title">Datos de Usuario</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Correo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="correo"
                                    value={correo}
                                    onChange={handleChange}
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="col-6"></div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="contrasena"
                                    value={contrasena}
                                    onChange={handleChange}
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Confirmar Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="confirmarContrasena"
                                    value={confirmarContrasena}
                                    onChange={handleChange}
                                    placeholder="Confirmar Contraseña"
                                />
                            </div>
                        </div>
                        <div className="row m-2">

                            <div className="card-header  bg-color2 mt-2 ">
                                <h5 className="card-title">Colono Vivienda</h5>
                            </div>
                            <div className="form-group mt-3 col-6">
                                <label htmlFor="">Vivienda</label>
                                <select
                                    className="form-control"
                                    name="idDomicilio"
                                    value={idDomicilio}
                                    onChange={handleChange}
                                >
                                    {viviendas === undefined || viviendas === null ? <option>Cargando...</option> : viviendas.filter(vivienda => vivienda.estatus === 1).map(vivienda => (
                                        <option key={vivienda.idDomicilio} value={vivienda.idDomicilio}>{vivienda.calle} {vivienda.numero}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioColono
