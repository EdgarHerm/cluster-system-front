export const ReducerTurno = (state = {}, action) => {
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
                turno: action.payload
            }
        default:
            return {
                ...state,
                turno: null
            }

    }
}

export default ReducerTurno;