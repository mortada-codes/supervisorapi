import {get_complains_success , get_complains_fail , get_mobile_complain_success , get_mobile_complain_fail} from './ActionTypes';
import {MobileComplains} from '../api/MobileComplains'

export const getMobileComplainAction = (userId , statusId , pageIndex , pageSize) => {
  return async (dispatch) => {
    try {
      const result = await MobileComplains(userId , statusId , pageIndex , pageSize)
      if (result) {
        dispatch({type: get_mobile_complain_success , payload: result})
        return
      }
      dispatch({type: get_mobile_complain_success , error: result.error})
    } catch (error) {
      dispatch({type: get_mobile_complain_fail , error: error.message})
    }
  }
}
