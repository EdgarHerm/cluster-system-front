import React, { useState } from 'react'
import Viviendas from '../../requests/Viviendas';

const ViviendasRegister = ({ history }) => {
    const [data, setData] = useState({
        calle: '',
        numero: '',
        descripcion: ''
    })
    const { calle, numero, descripcion } = data;
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        Viviendas.agregar(data);
        history.push('/viviendas');
    }
    
    const image = 'https://st.depositphotos.com/1658611/3469/i/600/depositphotos_34698097-stock-photo-street-of-large-suburban-homes.jpg'

    return (
        <div className="container">
            <form action="" className="bg-white m-5 ">
                <div className="card-header  bg-color2 text-center mb-2">
                    <h5 className="card-title">Registro de Viviendas</h5>
                </div>
                <div className="row ">
                    <div className="col-4 text-center  " >
                        <img src={image} alt="..." className="img-fluid rounded-middle ms-3 mt-2" />
                        <div className="form-group mt-3 mb-3">
                            <button className="btn btn-gold btn-block" onClick={handleRegister}>Guardar</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row m-2">
                            <div className="form-group col">
                                <label htmlFor="">Calle</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Calle'
                                    name="calle"
                                    value={calle}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="">Número</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Número"
                                    name="numero"
                                    value={numero}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="">Descripción</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Descripción"
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ViviendasRegister
