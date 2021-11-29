export const ReducerVivienda = (state, action) => {
    switch (action.type) {
        case 'VIVIENDA_LIST':
            return {
                ...state,
                vivienda: action.payload
            }
        case 'VIVIENDA_ADD':
            return {
                ...state,
                vivienda: action.payload
            }
        case 'VIVIENDA_DELETE':
            return {
                ...state,
                vivienda: action.payload
            }
        case 'VIVIENDA_UPDATE':
            return {
                ...state,
                viviendas: action.payload
            }
        default:
            return {
                ...state,
                vivienda: null,
                viviendas:[]
            }
    }
}