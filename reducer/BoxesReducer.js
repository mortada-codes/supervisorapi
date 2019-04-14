import {get_boxes_success , get_boxes_fail} from '../action/ActionTypes'

const initialState = {
    BoxesList: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case get_boxes_success:
    return { ...state , BoxesList: action.payload};

    case get_boxes_fail:
    return {...state , fail: action.error}

    default:
    return state
  }
};
