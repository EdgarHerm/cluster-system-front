export const ReducerEmpleado = (state =[], action) => {
    const { type } = action
    switch (type) {
        case 'ADD_EMPLEADO':
            return {
                ...state,
                empleado: action.payload
            }
        case 'DELETE_EMPLEADO':
            return {
                ...state,
                empleado: action.payload
            }
        case 'UPDATE_EMPLEADO':
            return {
                ...state,
                empleado: action.payload
            }
        case 'GET_EMPLEADOS':
            return {
                ...state,
                empleado: action.payload
            }
        default:
            return {
                ...state,
                empleado: null,
                empleado: []
            }

    }
}

export default ReducerEmpleado;