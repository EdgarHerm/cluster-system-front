import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ColonoRequest from '../../requests/ColonoRequest';
import Viviendas from '../../requests/Viviendas';

const ColonosRegister = ({ history }) => {
    const dispatch = useDispatch();
    const viviendas = useSelector(state => state.viviendas.vivienda);
    const [init, setInit] = useState(1)

    const [data, setData] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        fotografia: '',
        correo: '',
        contrasena: '',
        confirmarContrasena: '',
        idDomicilio: ''
    })
    const { nombre, apellidos, telefono, fotografia, correo, contrasena, confirmarContrasena, idDomicilio } = data;

    const handleChange = (e) => {
        setData({

            ...data, [e.target.name]: e.target.value
        })
    }
    const handleGetAll = async () => {
        let response = await Viviendas.consultar(0);
        dispatch({
            type: 'VIVIENDA_LIST',
            payload: response
        })

    }

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(data);
        ColonoRequest.agregar(data);
        history.push('/colonos');
    }
    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setData({
                ...data,
                fotografia: reader.result.split(',')[1]
            })
            console.log(reader.result.split(',')[1]);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const onFileChange = (event) => {
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            getBase64(file);
        }
    }
    useEffect(() => {
        if (init === 1) {
            handleGetAll();
            setInit(0);
        }
    }, [viviendas])

    const image = 'https://www.elegircarrera.net/blog/wp-content/uploads/2017/11/personas-importantes-universidad-amigos-2000x1200.jpg'

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
                            <button className="btn btn-gold btn-block" onClick={handleRegister}>Guardar</button>
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
                                    accept=".png"
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
                                    {viviendas === null ? <option>Cargando...</option> : viviendas.filter(vivienda => vivienda.estatus === 1).map(vivienda => (
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

export default ColonosRegister
