import { createStore, combineReducers } from 'redux';
import ReducerTurno from '../reducers/ReducerTurno';
import ReducerUser from '../reducers/ReducerUser';

const rootReducer = combineReducers({
    turno: ReducerTurno,
    user: ReducerUser
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)