// import { fromJS } from 'immutable';

/* Constants */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_REQUESTED = 'INCREMENT_REQUESTED';
const DECREMENT_REQUESTED = 'DECREMENT_REQUESTED';
const LOGIN_PAGE = 'LOGIN_PAGE';
const SIGNUP_PAGE = 'SIGNUP_PAGE';

/* Reducer */

const initialState = {
  value: 0,
  isIncrementing: false,
  isDecrementing: false,
  onLoginPage: false,
  onSignupPage: false
};



function counterReducer(state = initialState, action = {}) {
  switch (action.type) {

  case INCREMENT:
    // const newState = {}
    // Object.assign(newState, state)
    // newState.value = state.value - 1;
    // return newState;

    return {...state, value: state.value + 1};
  
  case DECREMENT:
    // const newState = {}
    // Object.assign(newState, state)
    // newState.value = state.value - 1;
    // return newState;

    return {...state, value: state.value - 1};

  case INCREMENT_REQUESTED: 
    return {...state, isIncrementing: true};

  case DECREMENT_REQUESTED: 
    return {...state, isDecrementing: true};

  case LOGIN_PAGE:
    return {...state, onLoginPage: true, onSignupPage: false};

  case SIGNUP_PAGE:
    return {...state, onLoginPage: false, onSignupPage: true};

  default:
    return state;
  }
}

export default counterReducer;


/* Actions */

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function loginPage() {
  return {
    type: LOGIN_PAGE,
  };
}
export function signupPage() {
  return {
    type: SIGNUP_PAGE,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}


// Thunk Example
export function incrementIfEven() {
  return (dispatch, getState) => {
    if (getState().counter.get('value') % 2 === 0) {
      return dispatch(increment());
    }
  };
}