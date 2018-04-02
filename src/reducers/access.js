import { 
  LOGIN_PAGE, 
  SIGNUP_PAGE,
  LOGIN_ATTEMPTED, 
  SIGNUP_ATTEMPTED,
  LOGIN_RESULT, 
  SIGNUP_RESULT
} from '../actions/access';

const initialState = {
  onLoginPage: false,
  onSignupPage: false,
  loginAttempted: false,
  signupAttempted: false
};


function accessReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SIGNUP_PAGE:
      return {...state, onLoginPage: false, onSignupPage: true};
    case LOGIN_PAGE:
      return {...state, onLoginPage: true, onSignupPage: false};

    case LOGIN_ATTEMPTED:
      return {...state, loginAttempted: true};
    case SIGNUP_ATTEMPTED:
      return {...state, signupAttempted: true};

    case LOGIN_RESULT:
      return {...state, loginAttempted: false};
    case SIGNUP_RESULT:
      return {...state, signupAttempted: false};
      
    default:
      return state;
  }
}

export default accessReducer;
