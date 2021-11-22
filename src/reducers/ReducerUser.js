export const ReducerUser = (state, action) => {
    const { type } = action
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                isLogin: true,
                user: action.payload

            }
        case 'LOGOUT':
            return {
                ...state,
                isLogin: false,
                user: null
            }
        default:
            return state = null;
    };
}

export default ReducerUser;
