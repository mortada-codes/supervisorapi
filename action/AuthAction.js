import {user_login , login_success , login_fail , change_password_success , change_password_fail , forgot_password , forgot_password_success , forgot_password_fail} from '../action/ActionTypes';
import {Login , ChangePassword , ForgotPassword} from '../api/Authentication';

export const LoginAction = (userName , password , encryptedData) => {
  return async (dispatch) => {
    try {
      const AuthResult = await Login(userName , password , encryptedData)
      if (AuthResult) {
        dispatch({type: login_success , payload: AuthResult})
        return
      }
      dispatch({type: login_fail , error: AuthResult.error})
    } catch (error) {
      dispatch({type: login_fail , error: error.message})
    }
  }
}

export const ChangePasswordAction = (userName , oldPassword , newPassword) => {
  return async (dispatch) => {
    try {
      const ChangePasswordResult = await ChangePassword(userName , oldPassword , newPassword)
      if (ChangePasswordResult) {
        dispatch({type: change_password_success , payload: ChangePasswordResult})
        return
      }
      dispatch({type: change_password_fail , error: ChangePasswordResult.error})
    } catch (error) {
      dispatch({type: change_password_fail , error: error.message})
    }
  }
}

export const ForgotPasswordAction = (userName , MobileNumber) => {
  return async (dispatch) => {
    try {
      const ForgotPasswordResult = await ForgotPassword(userName , MobileNumber)
      if (ForgotPasswordResult) {
        dispatch({type: forgot_password , payload: ForgotPasswordResult})
        dispatch({type: forgot_password_success , payload: ForgotPasswordResult})
      }
      dispatch({type: forgot_password_fail , error: ForgotPasswordResult.error})
    } catch (error) {
      dispatch({type: forgot_password_fail , erorr: error.message})
    }
  }
}