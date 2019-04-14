import {complains_deleted , complains_deleted_success , complains_deleted_fail} from './ActionTypes';
import {DeletedComplains} from '../api/DeletedComplains'

export const DeletedComplainsAction = (userId) => {

    return async (dispatch) => {
        try {
            const result = await DeletedComplains(userId)
            if (result) {
                dispatch({type: complains_deleted_success , payload: result})
                return
            }
            dispatch({type: complains_deleted_fail , error: result.error})
        } catch (error) {
            dispatch({type: complains_deleted_fail , error: error.message})
        }
    }
}