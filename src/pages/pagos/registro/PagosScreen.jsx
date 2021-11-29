import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import PagoRegistoRequest from '../../../requests/PagoRegistoRequest';
import FormularioPagoRegistro from './componentes/FormularioPagoRegistro';

const PagosScreen = ({ history }) => {
    const image = 'https://image.shutterstock.com/image-vector/monthly-salary-on-time-money-260nw-1811290201.jpg'

    const dispatch = useDispatch();
    const pagoRegistro = useSelector(state => state.listPagos.pagoRegistro);
    const { id } = useParams();

    const [init, setInit] = useState(0);
    const [data, setData] = useState({
        idListaPago: '',
        motivoPago: '',
        monto: '',
        descripcion: '',
        fechaFin: '',
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const hanleGetAll = async () => {
        let response = await PagoRegistoRequest.consultar(0);
        dispatch({
            type: 'PAGO_REGISTRO_LIST',
            payload: response.data
        });
    }


    const hanleGet = async ({ idListaPago }) => {
        let response = await PagoRegistoRequest.consultar(idListaPago);
        dispatch({
            type: 'PAGO_REGISTRO_GET',
            payload: response[0]
        });
    }

    const handleEdit = (e) => {
        e.preventDefault()
        PagoRegistoRequest.modificar(data);
        hanleGetAll();
        history.push('/pagos');
    }

    useEffect(() => {
        if (init === 0) {
            hanleGet(id);
            setInit(1);
        } else if (init === 1) {
            setData({
                idListaPago: pagoRegistro.idListaPago,
                motivoPago: pagoRegistro.motivoPago,
                monto: pagoRegistro.monto,
                descripcion: pagoRegistro.descripcion,
                fechaFin: dateFormat(pagoRegistro.fechaFin),
            })
        }
        if (pagoRegistro === undefined || pagoRegistro === null) {
            setInit(1);
        }
    }, [pagoRegistro])

    const dateFormat = (date) => {
        let dateSplit = date.split(' ');
        let dia = dateSplit[1];
        let mes = dateSplit[2];
        let anio = dateSplit[3];
        switch (mes) {
            case 'Jan':
                mes = '01';
                break;
            case 'Feb':
                mes = '02';
                break;
            case 'Mar':
                mes = '03';
                break;
            case 'Apr':
                mes = '04';
                break;
            case 'May':
                mes = '05';
                break;
            case 'Jun':
                mes = '06';
                break;
            case 'Jul':
                mes = '07';
                break;
            case 'Aug':
                mes = '08';
                break;
            case 'Sep':
                mes = '09';
                break;
            case 'Oct':
                mes = '10';
                break;
            case 'Nov':
                mes = '11';
                break;
            case 'Dec':
                mes = '12';
                break;
            default:
                mes = '0';
                break;
        }
        return `${anio}-${mes}-${dia}`;
    }

    return (
        <>
            {
                pagoRegistro === undefined || pagoRegistro === null ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    pagoRegistro.idListaPago === undefined || pagoRegistro.idListaPago === null ?
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-warning" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <FormularioPagoRegistro
                            handleChange={handleChange}
                            handleSuccess={handleEdit}
                            data={data}
                            image={image} />
            }
        </>
    )
}

export default PagosScreen
