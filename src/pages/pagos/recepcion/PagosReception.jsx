import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ColonoRequest from '../../../requests/ColonoRequest';
import PagoRecepcionRequest from '../../../requests/PagoRecepcionRequest';
import PagoRegistoRequest from '../../../requests/PagoRegistoRequest';
import FormularioRecepcionPago from './componentes/FormularioRecepcionPago';

const PagosReception = ({ history }) => {
    const image = 'https://media.istockphoto.com/vectors/calendar-payday-loan-monthly-payment-flat-color-line-icon-vector-id1192933425'
    const dispatch = useDispatch();
    const listaPagos = useSelector(state => state.listPagos.pagoRegistros);
    const colonos = useSelector(state => state.colonos.colonos);

    const [data, setData] = useState({
        fechaPago: "",
        fotoEvidencia: "",
        fechaRecepcion: new Date(),
        descripcion: "",
        idColono: "",
        idListaPago: ""
    });


    const handleChange = (e) => {
        console.log(e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleGetAll = async () => {
        let response = await PagoRecepcionRequest.consultar(0);
        dispatch({
            type: 'PAGO_RECEPCION_LIST',
            payload: response['Recepcion']
        });
    }

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(data)
        PagoRecepcionRequest.agregar(data);
        handleGetAll();
        history.push('/pagos-recepcion');
    }

    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setData({
                ...data,
                fotoEvidencia: reader.result.split(',')[1]
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

    const handleGetAllColono = async () => {
        let response = await ColonoRequest.consultar(0);
        dispatch({
            type: 'lIST_COLONO',
            payload: response
        })
    }
    const handleGetAllPagos = async () => {
        let response = await PagoRegistoRequest.consultar(0);
        dispatch({
            type: 'PAGO_REGISTRO_LIST',
            payload: response
        });
    }

    const [init, setInit] = useState(1)
    useEffect(() => {
        if (init === 1) {
            handleGetAllColono();
            handleGetAllPagos();
            setInit(0)
            console.log('Aqui vamos de nuevo xd')
        }
    }, [])



    return (
        <>

            <FormularioRecepcionPago
                handleChange={handleChange}
                handleSuccess={handleRegister}
                onFileChange={onFileChange}
                handleGetAllColono={handleGetAllColono}
                handleGetAllPagos={handleGetAllPagos}
                image={image}
                data={data}
                listaPagos={listaPagos}
                colonos={colonos}
            />
        </>
    )
}

export default PagosReception
