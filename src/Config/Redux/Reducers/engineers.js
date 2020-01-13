const initialState = {
  dataEngineers: [],
  isLoading: false,
  isError: false,
};

export default engineers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_ENGINEERS_PENDING':
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case 'GET_ALL_ENGINEERS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataEngineers: action.payload //isi payload dari action
      };
    case 'GET_ALL_ENGINEERS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

// const userAuth = (state = initialState, action) => {
// switch (action.type) {
//     case 'REGISTER_PENDING':
//         case 'LOGIN_PENDING':
//             return {
//                 ...state,
//                 isError: false,
//                 isLoading: true
//             };
//     case 'REGISTER FULFILLED':
//         case 'LOGIN_FULFILLED':
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: false
//             };
//     case 'REGISTER_REJECTED':
//         case 'LOGIN_REJECTED':
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//             };
//     default:
//         return state;
// }
// }

// export default userAuth;
