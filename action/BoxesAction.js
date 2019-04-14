import {get_boxes_success , get_boxes_fail} from './ActionTypes';
import {Boxes} from '../api/Boxes';

export const BoxesAction = () => {
    return async (dispatch) => {
        try {
            const BoxesResult = await Boxes()
            if (BoxesResult) {
                dispatch({type: get_boxes_success , payload: BoxesResult})
                return
            }
            dispatch({type: get_boxes_fail , error: BoxesResult.error})
        } catch (error) {
            dispatch({type: get_boxes_fail , error: error.message})
        }
    }
}