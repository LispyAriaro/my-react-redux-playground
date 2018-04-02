import axios from 'axios';

import { USER_TOKEN, OWNER_OR_SUPERVISOR_DATA } from '../configs';

export const LOGIN_PAGE = 'LOGIN_PAGE';
export const SIGNUP_PAGE = 'SIGNUP_PAGE';

export const LOGIN_ATTEMPTED = 'LOGIN_ATTEMPT';
export const SIGNUP_ATTEMPTED = 'SIGNUP_ATTEMPT';

export const LOGIN_RESULT = 'LOGIN_RESULT';
export const SIGNUP_RESULT = 'SIGNUP_RESULT';


/* Actions */

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

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
};

export function doLogin(businessManagerEmail, businessAdminPassword) {
  const postData = {
    email : businessManagerEmail,
    password : businessAdminPassword
  }

  return dispatch => {
    dispatch({
      type: LOGIN_ATTEMPTED
    });
  
    axios.post('http://localhost:2000/api/v1/businesslogin', postData, axiosConfig)
    .then((res) => {
      const serverResponse = res.data;
      console.log("serverResponse: ", serverResponse);

      if(serverResponse && serverResponse.success) {
        var currentUserData = serverResponse.data;
        localStorage.clear();

        if(currentUserData && (currentUserData.is_owner || currentUserData.is_supervisor)) {
            localStorage.setItem(USER_TOKEN, serverResponse.token);
            localStorage.setItem(OWNER_OR_SUPERVISOR_DATA, JSON.stringify(currentUserData));
        }
        // if(currentUserData && currentUserData.is_owner) {
        //   $state.go('mc-admin.businesshome');
        // } else if(currentUserData && currentUserData.is_supervisor) {
        //   $state.go('mc-admin.businesshome');
        // }

        dispatch({
          type: LOGIN_RESULT,
          payload: {
            success: true,
            data: serverResponse.data
          }
        });
      } else {
        dispatch({
          type: LOGIN_RESULT,
          payload: {
            success: false,
            message: serverResponse.message
          }
        });
      }
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);

      dispatch({
        type: LOGIN_RESULT,
        payload: {
          success: false,
          message: err.message
        }
      });
    })

    // axios.get('/api/v1/businesslogin')
    //   .then(res => {
    //     const people = res.data.map(person => {
    //       person.note = 'none';
    //       return person;
    //     });
    //     dispatch(getUsersAsync(people));
    //   });
  }
}
