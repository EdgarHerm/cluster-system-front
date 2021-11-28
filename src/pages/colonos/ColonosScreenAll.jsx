import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ColonoRequest from '../../requests/ColonoRequest';
import TableColonos from './componentes/TableColonos';

const ColonosScreenAll = () => {
    const dispatch = useDispatch();
    const colonos = useSelector(state => state.colonos.colonos)

    const handleGetAll = async () => {
        let response = await ColonoRequest.consultar(0);
        dispatch({
            type: 'lIST_COLONO',
            payload: response
        })
    }

    const [init, setInit] = useState(0)

    useEffect(() => {
        if (init === 0) {
            handleGetAll()
            setInit(1)
        }
    }, [colonos])

    return (
        <div className="container" >
            <div action="" className="bg-white m-5 ">

                <div className="card-header  bg-color2 text-center mb-2">
                    <h5 className="card-title">Colonos</h5>
                </div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-active-tab" data-bs-toggle="tab" data-bs-target="#nav-active" type="button" role="tab" aria-controls="nav-active" aria-selected="true">Activos</button>
                        <button className="nav-link" id="nav-inactive-tab" data-bs-toggle="tab" data-bs-target="#nav-inactive" type="button" role="tab" aria-controls="nav-inactive" aria-selected="false">Inactivos</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-active" role="tabpanel" aria-labelledby="nav-active-tab">
                        <TableColonos colonos={colonos} estatus={1} />
                    </div>
                    <div className="tab-pane fade" id="nav-inactive" role="tabpanel" aria-labelledby="nav-inactive-tab">
                        <TableColonos colonos={colonos} estatus={0} />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ColonosScreenAll
