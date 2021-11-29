import { createStore, combineReducers } from 'redux';
import ReducerTurno from '../reducers/ReducerTurno';
import ReducerUser from '../reducers/ReducerUser';
import ReducerEmpleado from '../reducers/ReducerEmpleado';
import ReducerVisita from '../reducers/ReducerVisita';
import { ReducerVivienda } from '../reducers/ReducerVivienda';
import { ReducerColono } from '../reducers/ReducerColono';
import { ReducerPagoRegistro } from '../reducers/ReducerPagoRegistro';
import { ReducerPagoRecepcion } from '../reducers/ReducerPagoRecepcion';

const rootReducer = combineReducers({
    turno: ReducerTurno,
    empleado: ReducerEmpleado,
    user: ReducerUser,
    visita: ReducerVisita,
    viviendas: ReducerVivienda,
    colonos: ReducerColono,
    listPagos: ReducerPagoRegistro,
    listRecepcionPagos: ReducerPagoRecepcion
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)