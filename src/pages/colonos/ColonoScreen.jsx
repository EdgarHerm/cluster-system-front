import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ColonoRequest from '../../requests/ColonoRequest';
import Viviendas from '../../requests/Viviendas';
import FormularioColono from './componentes/FormularioColono'

const ColonoScreen = ({ history }) => {
    const image = 'https://www.elegircarrera.net/blog/wp-content/uploads/2017/11/personas-importantes-universidad-amigos-2000x1200.jpg'

    const dispatch = useDispatch();
    const viviendas = useSelector(state => state.viviendas.vivienda);
    const colono = useSelector(state => state.colonos.colono);

    const { id } = useParams();
    const [init, setInit] = useState(1)

    const [data, setData] = useState({
        idColono: '',
        idUsuario: '',
        idPersona: '',
        idDomicilio: '',
        fotografia: '',
        correo: '',
        contrasena: '',
        idRol: '',
        nombre: '',
        apellidos: '',
        telefono: '',
        confirmarContrasena: '',
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
    const handleGet = async (idColono) => {
        let response = await ColonoRequest.consultar(idColono);
        dispatch({
            type: 'GET_COLONO',
            payload: response[0]
        })
    }

    const handleEdit = (e) => {
        e.preventDefault();
        ColonoRequest.modificar(data);
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
            handleGet(id);
        } else if (init === 2) {
            setData({
                ...data,
                idColono: colono.idColono,
                idUsuario: colono.idUsuario,
                idPersona: colono.idPersona,
                idDomicilio: colono.idDomicilio,
                fotografia: colono.fotografia,
                correo: colono.correo,
                contrasena: colono.contraseña,
                idRol: colono.idRol,
                nombre: colono.nombre,
                apellidos: colono.apellidos,
                telefono: colono.telefono
            });
            handleGetAllViviendas();
        }
        setInit(0);
        if (colono === undefined || colono === null) {
            setInit(2);
        }

    }, [colono, viviendas]);
    return (
        <>{colono === null || colono === undefined ?
            <div>Cargando...</div>
            :
            colono.idColono === undefined ?
                <div>Cargando...</div>
                :
                < FormularioColono
                    image={image}
                    handleSuccess={handleEdit}
                    data={data}
                    handleChange={handleChange}
                    onFileChange={onFileChange}
                    viviendas={viviendas} />
        }
        </>
    )
}

export default ColonoScreen
