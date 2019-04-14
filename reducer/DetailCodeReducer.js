import {get_detail_code_success , get_detail_code_fail} from '../action/ActionTypes'

const initialState = {
    DetailCodeList: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case get_detail_code_success:
    return { ...state , DetailCodeList: action.payload};

    case get_detail_code_fail:
    return {...state , fail: action.error}

    default:
    return state
  }
};
