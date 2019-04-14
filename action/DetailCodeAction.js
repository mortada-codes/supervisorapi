import {get_detail_code_success , get_detail_code_fail} from './ActionTypes';
import {DetailCode} from '../api/DetailCode'

export const DetailCodeAction = (masterCodeId) => {
    return async (dispatch) => {
        try {
            const result = await DetailCode(masterCodeId)
            if (result) {
                dispatch({type: get_detail_code_success , payload: result})
                return
            }
            dispatch({type: get_detail_code_fail , error: result.error})
        } catch (error) {
            dispatch({type: get_detail_code_fail , error: error.message})
        }
    }
}