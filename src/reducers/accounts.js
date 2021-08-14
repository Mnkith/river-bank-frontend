const initialState = {
  type: false,
  loggedIn: false,
  currentUser: {}
};

export default function authReducer(state = [], action) {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      };
    // case NOT_AUTHENTICATED:
    //   return {
    //     authChecked: true,
    //     loggedIn: false,
    //     currentUser: {}
    //   };
    default:
      return state;
  }
}