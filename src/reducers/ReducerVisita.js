export const ReducerTurno = (state =[], action) => {
    const { type } = action
    switch (type) {
        case 'ADD_VISITA':
            return {
                ...state,
                visita: action.payload
            }
        case 'DELETE_VISITA':
            return {
                ...state,
                visita: action.payload
            }
        case 'UPDATE_VISITA':
            return {
                ...state,
                visita: action.payload
            }
        case 'GET_VISITAS':
            return {
                ...state,
                visitas: action.payload
            }
        default:
            return {
                ...state,
                visita: null,
                visitas: []
            }

    }
}

export default ReducerTurno;