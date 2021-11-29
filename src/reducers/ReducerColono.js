export const ReducerColono = (state = {}, action) => {
    switch (action.type) {
        case 'GET_COLONO':
            return {
                ...state,
                colono: action.payload
            }
        case 'lIST_COLONO':
            return {
                ...state,
                colonos: action.payload
            }
        case 'DELETE_COLONO':
            console.log(action.payload);
            return {
                ...state,
                colonos: state.colonos.filter(colono => colono.id !== action.payload)
            }
        default:
            return state;
    }
}