export const ReducerPagoRecepcion = (state = {}, action) => {
    switch (action.type) {
        case 'PAGO_RECEPCION_LIST':
            return {
                ...state,
                recepcionPagos: action.payload
            };
        case 'PAGO_RECEPCION_GET':
            return {
                ...state,
                recepcionPago: action.payload
            };
        default:
            return state;
    }
}