import React from 'react'

const TurnosRegister = () => {
    const image = 'https://media.istockphoto.com/photos/wall-clock-isolated-on-white-ten-past-ten-picture-id590618818'
    return (

        <div className="container">
            <form action="" className="bg-white m-5 ">
                <div class="card-header  bg-color2 text-center mb-2">
                    <h5 class="card-title">Registro de Turnos</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center  " >
                        <img src={image} alt="..." className="img-fluid rounded-middle ms-3 mt-2" />
                        <div className="form-group mt-3 mb-3">
                            <button type="submit" className="btn btn-gold">Guardar</button>
                        </div>
                    </div>
                    <div className="col-8 ">

                        <div class="card-header  bg-color2 text-center m-2">
                            <h5 class="card-title">Datos del Turno</h5>
                        </div>
                        <div className="row m-2">
                            <div className="form-group col">
                                <label htmlFor="">Hora Inicio</label>
                                <input name='hrInicio' type="text" className="form-control" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="">Hora Fin</label>
                                <input name='hrFin' type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TurnosRegister
