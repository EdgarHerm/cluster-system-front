export const ReducerUser = (state, action) => {
    const { type } = action
    switch (type) {
        case '@@INIT':
            return {
                isLogin: false,
                user: null
            }
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
            return {
                isLogin: false,
                user: null
            }
    };
}

export default ReducerUser;
