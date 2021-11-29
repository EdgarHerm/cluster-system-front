export const ReducerLogin = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.user,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                error: action.error,
            };
        case 'LOGIN_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}