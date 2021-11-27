import { createStore, combineReducers } from 'redux';
import ReducerTurno from '../reducers/ReducerTurno';
import ReducerUser from '../reducers/ReducerUser';
import { ReducerVivienda } from '../reducers/ReducerVivienda';

const rootReducer = combineReducers({
    turno: ReducerTurno,
    user: ReducerUser,
    viviendas: ReducerVivienda,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)