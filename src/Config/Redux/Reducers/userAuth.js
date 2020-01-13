const initialState = {
    isLoading: false,
    isError: false,
};

const userAuth = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_PENDING':
            case 'LOGIN_PENDING':
                return {
                    ...state,
                    isError: false,
                    isLoading: true
                };
        case 'REGISTER FULFILLED':
            case 'LOGIN_FULFILLED':
                return {
                    ...state,
                    isLoading: false,
                    isError: false
                };
        case 'REGISTER_REJECTED':
            case 'LOGIN_REJECTED':
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                };
        default:
            return state;
    }
}

export default userAuth;