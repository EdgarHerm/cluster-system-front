export const ReducerTurno = (state =[], action) => {
    const { type } = action
    switch (type) {
        case 'ADD_TURNO':
            return {
                ...state,
                turno: action.payload
            }
        case 'DELETE_TURNO':
            return {
                ...state,
                turno: action.payload
            }
        case 'UPDATE_TURNO':
            return {
                ...state,
                turno: action.payload
            }
        case 'GET_TURNOS':
            return {
                ...state,
                turnos: [action.payload]
            }
        default:
            return {
                ...state,
                turno: null,
                turnos: []
            }

    }
}

export default ReducerTurno;