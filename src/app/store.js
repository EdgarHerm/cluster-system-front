import { createStore, combineReducers } from 'redux';
import ReducerTurno from '../reducers/ReducerTurno';
import ReducerUser from '../reducers/ReducerUser';
import ReducerEmpleado from '../reducers/ReducerEmpleado';
import ReducerVisita from '../reducers/ReducerVisita';
import { ReducerVivienda } from '../reducers/ReducerVivienda';

const rootReducer = combineReducers({
    turno: ReducerTurno,
    empleado: ReducerEmpleado,
    user: ReducerUser,
    visita: ReducerVisita,
    viviendas: ReducerVivienda,
    //login: ReducerLogin
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)