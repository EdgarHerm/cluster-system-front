import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PagoRecepcionRequest from '../../../requests/PagoRecepcionRequest';
import TablaRecepcionPago from './componentes/TablaRecepcionPago';

const PagosReceptionAll = () => {
    const dispatch = useDispatch();
    const listaRecepcionPago = useSelector(state => state.listRecepcionPagos.recepcionPagos);
    const [init, setInit] = useState(0)


    const handleCancelar = async ({ idRecepcionPago }) => {
        console.log(idRecepcionPago)
        PagoRecepcionRequest.cancelar(idRecepcionPago)
        handleGetAll();
    }

    const handleAceptar = async ({ idRecepcionPago }) => {
        console.log(idRecepcionPago)
        PagoRecepcionRequest.aceptar(idRecepcionPago)
        handleGetAll();
    }

    const handleGetAll = async () => {
        let response = await PagoRecepcionRequest.consultar(0);
        dispatch({
            type: 'PAGO_RECEPCION_LIST',
            payload: response['Recepcion']
        });
    }

    useEffect(() => {
        if (init === 0) {
            handleGetAll();
            setInit(1);
        }
    }, [listaRecepcionPago])

    return (

        <div className="container" >
            <div action="" className="bg-white m-5 ">

                <div className="card-header  bg-color2 text-center mb-2">
                    <h5 className="card-title">Recepción de Pagos</h5>
                </div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-standby-tab" data-bs-toggle="tab" data-bs-target="#nav-standby" type="button" role="tab" aria-controls="nav-standby" aria-selected="true">Pendientes</button>

                        <button className="nav-link" id="nav-accept-tab" data-bs-toggle="tab" data-bs-target="#nav-accept" type="button" role="tab" aria-controls="nav-accept" aria-selected="false">Aceptados</button>

                        <button className="nav-link" id="nav-cancel-tab" data-bs-toggle="tab" data-bs-target="#nav-cancel" type="button" role="tab" aria-controls="nav-cancel" aria-selected="false">Cancelados</button>

                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-standby" role="tabpanel" aria-labelledby="nav-standby-tab">
                        <TablaRecepcionPago
                            listaRecepcionPago={listaRecepcionPago}
                            handleCancelar={handleCancelar}
                            handleAceptar={handleAceptar}
                            handleGetAll={handleGetAll}
                            estatus={2}
                        />
                    </div>

                    <div className="tab-pane fade show " id="nav-accept" role="tabpanel" aria-labelledby="nav-accept-tab">
                        <TablaRecepcionPago
                            listaRecepcionPago={listaRecepcionPago}
                            handleCancelar={handleCancelar}
                            handleAceptar={handleAceptar}
                            estatus={1}
                        />
                    </div>

                    <div className="tab-pane fade show " id="nav-cancel" role="tabpanel" aria-labelledby="nav-cancel-tab">
                        <TablaRecepcionPago
                            listaRecepcionPago={listaRecepcionPago}
                            handleCancelar={handleCancelar}
                            handleAceptar={handleAceptar}
                            estatus={0}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PagosReceptionAll
