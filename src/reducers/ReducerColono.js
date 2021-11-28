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
        default:
            return {
                ...state,
                colono: null,
                colonos: null
            }
    }
}