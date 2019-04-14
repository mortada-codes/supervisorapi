import {user_login , login_success , login_fail , change_password_success , change_password_fail , forgot_password , forgot_password_success , forgot_password_fail} from '../action/ActionTypes';

const initialState = {
    user: undefined , changedPassword: undefined , SMS: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {

    case user_login:
    return { ...state , user: action.payload.user };

    case login_success:
    return {...state , user: action.payload}

    case login_fail:
    return {...state , fail: action.error}

    case change_password_success:
    return {...state , changedPassword: action.payload}

    case change_password_fail:
    return {...state , fail: action.error}

    case forgot_password:
    return {...state , SMS: action.payload.SMS}

    case forgot_password_success:
    return {...state , SMS: action.payload}

    case forgot_password_fail:
    return {...state , fail: action.error}

  default:
    return state
  }
};
