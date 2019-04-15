import fetch from '../util/fetchy';
import BASE_API  from '../util/baseAPI'
const LOGIN_URL = (userName , password , encryptedData) => (`http://${BASE_API}/finalUAMAPI/api/User/Authenticate?userName=${userName}&password=${password}&encrypteddata=${encryptedData}`);
const Change_Password_URL = (userName , oldPassword , newPassword) => (`http://${BASE_API}/finalUAMAPI/api/User/ChangePassword?userName=${userName}&oldPassword=${oldPassword}&newPassword=${newPassword}`);
const Forgot_Password_URL = (userName , MobileNumber) => (`http://${BASE_API}/finalUAMAPI/api/User/ForgotPasswordandSMS?UserName=${userName}&MobileNumber=${MobileNumber}`)


export async function Login(userName , password , encryptedData) {
    try {

        const result = await fetch(LOGIN_URL(userName , password , encryptedData))

        if (result.ok) {
            const data = await result.json()
            return data
        }
        return {error: 'Please be sure from your information'}
    } catch (error) {
        console.error(error)
        return {error: 'Something went wrong!'}
    }
}

export async function ChangePassword(userName , oldPassword , newPassword) {
    try {
        const ChangePasswordResult = await fetch(Change_Password_URL(userName , oldPassword , newPassword))
        if (ChangePasswordResult.ok) {
            const ChangePasswordData = await ChangePasswordResult.json()
            return ChangePasswordData
        }
        //throw Error("")
        return {error: 'Please try again later!'}
    } catch (error) {
        return {error: 'Error just happened!'}
    }
}

export async function ForgotPassword(userName , MobileNumber) {
    try {
        const ForgotPasswordResult = await fetch(Forgot_Password_URL(userName , MobileNumber))
        if (ForgotPasswordResult.ok) {
            const ForgotPasswordData = await ForgotPasswordResult.json()
            return ForgotPasswordData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}