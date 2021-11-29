export const ReducerPagoRegistro = (state = {}, action) => {
    switch (action.type) {
        case 'PAGO_REGISTRO_LIST':
            return {
                ...state,
                pagoRegistros: action.payload
            };
        case 'PAGO_REGISTRO_GET':
            return {
                ...state,
                pagoRegistro: action.payload
            };
        default:
            return state;
    }
}