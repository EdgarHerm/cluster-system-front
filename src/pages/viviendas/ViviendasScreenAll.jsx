import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Viviendas from '../../requests/Viviendas';
import TableViviendas from './components/TableViviendas';

const ViviendasScreenAll = () => {
    const dispatch = useDispatch();
    const viviendas = useSelector(state => state.viviendas.vivienda);

    const handleGetAll = async () => {
        let response = await Viviendas.consultar(0);
        dispatch({
            type: 'VIVIENDA_LIST',
            payload: response
        })

    }
    const [init, setInit] = useState(1)

    useEffect(() => {
        if (init === 1) {
            handleGetAll();
            setInit(0);
        }
    }, [viviendas])


    return (
        <div className="container">
            <div action="" className="bg-white m-5 ">

                <div className="card-header  bg-color2 text-center mb-2">
                    <h5 className="card-title">Viviendas</h5>
                </div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-active-tab" data-bs-toggle="tab" data-bs-target="#nav-active" type="button" role="tab" aria-controls="nav-active" aria-selected="true">Activos</button>
                        <button className="nav-link" id="nav-inactive-tab" data-bs-toggle="tab" data-bs-target="#nav-inactive" type="button" role="tab" aria-controls="nav-inactive" aria-selected="false">Inactivos</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-active" role="tabpanel" aria-labelledby="nav-active-tab">
                        <TableViviendas viviendas={viviendas} estatus={1} />
                    </div>
                    <div className="tab-pane fade" id="nav-inactive" role="tabpanel" aria-labelledby="nav-inactive-tab">
                        <TableViviendas viviendas={viviendas} estatus={0} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViviendasScreenAll
