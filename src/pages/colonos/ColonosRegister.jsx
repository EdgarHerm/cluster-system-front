import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ColonoRequest from '../../requests/ColonoRequest';
import Viviendas from '../../requests/Viviendas';
import FormularioColono from './componentes/FormularioColono';

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
    // const { nombre, apellidos, telefono, fotografia, correo, contrasena, confirmarContrasena, idDomicilio } = data;

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }
    const handleGetAllViviendas = async () => {
        let response = await Viviendas.consultar(0);
        dispatch({
            type: 'VIVIENDA_LIST',
            payload: response
        })
    }

    
    const handleGetAll = async () => {
        let response = await ColonoRequest.consultar(0);
        dispatch({
            type: 'lIST_COLONO',
            payload: response
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        ColonoRequest.agregar(data);
        handleGetAll();
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
            handleGetAllViviendas();
            setInit(0);
        }
    }, [viviendas])

    const image = 'https://www.elegircarrera.net/blog/wp-content/uploads/2017/11/personas-importantes-universidad-amigos-2000x1200.jpg'

    return (
        <FormularioColono
            image={image}
            handleSuccess={handleRegister}
            data={data}
            handleChange={handleChange}
            onFileChange={onFileChange}
            viviendas={viviendas} />
    )
}

export default ColonosRegister
