import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PagoRegistoRequest from '../../../requests/PagoRegistoRequest';
import TablePagoRegistro from './componentes/TablePagoRegistro';

const PagosScreenAll = () => {
    const dispatch = useDispatch();
    const listaPagos = useSelector(state => state.listPagos.pagoRegistros);
    const [init, setInit] = useState(0)

    const hanleGetAll = async () => {
        let response = await PagoRegistoRequest.consultar(0);
        dispatch({
            type: 'PAGO_REGISTRO_LIST',
            payload: response
        });
    }

    const handleDelete = async ({ idListaPago }) => {
        PagoRegistoRequest.eliminar(idListaPago);
        hanleGetAll();
    }

    const handleActive = async ({ idListaPago }) => {
        PagoRegistoRequest.activar(idListaPago);
        hanleGetAll();
    }

    useEffect(() => {
        if (init === 0) {
            hanleGetAll();
            setInit(1);
        }
    }, [listaPagos])


    return (

        <div className="container" >
            <div action="" className="bg-white m-5 ">

                <div className="card-header  bg-color2 text-center mb-2">
                    <h5 className="card-title">Lista de Pagos</h5>
                </div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-active-tab" data-bs-toggle="tab" data-bs-target="#nav-active" type="button" role="tab" aria-controls="nav-active" aria-selected="true">Activos</button>
                        <button className="nav-link" id="nav-inactive-tab" data-bs-toggle="tab" data-bs-target="#nav-inactive" type="button" role="tab" aria-controls="nav-inactive" aria-selected="false">Inactivos</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-active" role="tabpanel" aria-labelledby="nav-active-tab">
                        <TablePagoRegistro listaPagos={listaPagos} estatus={1}
                            handleDelete={handleDelete}
                            handleActive={handleActive} />
                    </div>
                    <div className="tab-pane fade" id="nav-inactive" role="tabpanel" aria-labelledby="nav-inactive-tab">
                        <TablePagoRegistro listaPagos={listaPagos} estatus={0}
                            handleDelete={handleDelete}
                            handleActive={handleActive} />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default PagosScreenAll
