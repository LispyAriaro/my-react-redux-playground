
export const LOGIN_PAGE = 'LOGIN_PAGE';
export const SIGNUP_PAGE = 'SIGNUP_PAGE';


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
