import { LOGIN_PAGE, SIGNUP_PAGE } from '../actions/access';


const initialState = {
  onLoginPage: false,
  onSignupPage: false
};


function accessReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SIGNUP_PAGE:
        return {...state, onLoginPage: false, onSignupPage: true};
    case LOGIN_PAGE:
        return {...state, onLoginPage: true, onSignupPage: false};

    default:
        return state;
  }
}

export default accessReducer;
