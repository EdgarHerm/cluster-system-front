import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Viviendas from '../../requests/Viviendas';
import FormViviendas from './components/FormViviendas';

const ViviendasScreen = ({ history }) => {

    const dispatch = useDispatch();
    const viviendas = useSelector(state => state.viviendas.viviendas);

    const { id } = useParams();
    const [init, setInit] = useState(1)
    const image = 'https://st.depositphotos.com/1658611/3469/i/600/depositphotos_34698097-stock-photo-street-of-large-suburban-homes.jpg';

    const [data, setData] = useState({
        idDomicilio: '',
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

    useEffect(() => {
        if (init === 1) {
            console.log('idVivienda' + id);
            handleGet(id);
            setInit(2);
        } else if (init === 2) {
            setData({
                idDomicilio: viviendas.idDomicilio,
                calle: viviendas.calle,
                numero: viviendas.numero,
                descripcion: viviendas.descripcion
            })
            setInit(0);
        }
    }, [viviendas])

    const handleGet = async (idVivienda) => {
        let response = await Viviendas.consultar(idVivienda);
        dispatch({
            type: 'VIVIENDA_UPDATE',
            payload: response
        })
    }

    const handleEdit = (e) => {
        e.preventDefault();
        Viviendas.editar(data);
        handleGet(0);
        history.push('/viviendas');
    }
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
                            <button className="btn btn-gold btn-block" onClick={handleEdit}>Guardar</button>
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

export default ViviendasScreen
