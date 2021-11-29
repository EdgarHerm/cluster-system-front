import React from 'react'
import { useState } from 'react'
import PagoRegistoRequest from '../../../requests/PagoRegistoRequest'
import FormularioPagoRegistro from './componentes/FormularioPagoRegistro'

const PagosRegister = ({ history }) => {
    const image = 'https://image.shutterstock.com/image-vector/monthly-salary-on-time-money-260nw-1811290201.jpg'

    const [data, setData] = useState({
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

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(data)
        PagoRegistoRequest.agregar(data);
        history.push('/pagos');
    }


    return (
        <>
            <FormularioPagoRegistro handleChange={handleChange} handleSuccess={handleRegister} data={data} image={image} />
        </>
    )
}

export default PagosRegister
