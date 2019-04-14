import {get_under_ground_store_success , get_under_ground_store_fail , get_nearest_under_ground_store_success , get_nearest_under_ground_store_fail} from './ActionTypes'
import {GetUnderGroundStore , GetNearestUnderGroundStore} from '../api/UnderGroundStore'

export const UnderGroundStoreAction = () => {
    return async (dispatch) => {
        try {
            const UnderGroundResult = await GetUnderGroundStore()
            if (UnderGroundResult) {
                dispatch({type: get_under_ground_store_success , payload: UnderGroundResult})
                return
            }
            dispatch({type: get_under_ground_store_fail , error: UnderGroundResult.error})
        } catch (error) {
            dispatch({type: get_under_ground_store_fail , error: error.message})
        }
    }
}

export const NearestUnderGroundStoreAction = (Latitude , Longitude) => {
    return async (dispatch) => {
        try {
            const NearestUnderGroundResult = await GetNearestUnderGroundStore(Latitude , Longitude)
            if (NearestUnderGroundResult) {
                dispatch({type: get_nearest_under_ground_store_success , payload: NearestUnderGroundResult})
                return
            }
            dispatch({type: get_nearest_under_ground_store_fail , error: NearestUnderGroundResult.error})
        } catch (error) {
            dispatch({type: get_nearest_under_ground_store_fail , error: error.message})
        }
    }
}