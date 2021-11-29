import React, { useState } from 'react'
import TurnoRequest from '../../requests/TurnoRequest';

const TurnosRegister = ({ history }) => {
    const [data, setData] = useState({
        horaInicio: '00:00',
        horaFin: '00:00',
    })
    const { horaInicio, horaFin } = data;
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Registrando...")
        console.log(data);
        TurnoRequest.agregar(data);
        history.push('/turnos');
    }

    const image = 'https://media.istockphoto.com/photos/wall-clock-isolated-on-white-ten-past-ten-picture-id590618818'
    return (
        <div className="container">
            <form action="" className="bg-white m-5 ">
                <div className="card-header  bg-color2 text-center mb-2">
                    <h5 className="card-title">Registro de Turnos</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center  " >
                        <img src={image} alt="..." className="img-fluid rounded-middle ms-3 mt-2" />
                        <div className="form-group mt-3 mb-3">
                            <button className="btn btn-gold" onClick={handleRegister} >Guardar</button>
                        </div>
                    </div>
                    <div className="col-8 ">

                        <div className="card-header  bg-color2 text-center m-2">
                            <h5 className="card-title">Datos del Turno</h5>
                        </div>
                        <div className="row m-2">
                            <div className="form-group col">
                                <label htmlFor="">Hora Inicio</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="horaInicio"
                                    id="horaInicio"
                                    value={horaInicio}
                                    onChange={handleChange}
                                    placeholder="Hora Inicio"
                                />

                            </div>
                            <div className="form-group col">
                                <label htmlFor="">Hora Fin</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="horaFin"
                                    id="horaFin"
                                    value={horaFin}
                                    onChange={handleChange}
                                    placeholder="Hora Fin"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TurnosRegister
