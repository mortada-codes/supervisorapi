import {get_mobile_complain_success , get_mobile_complain_fail} from '../action/ActionTypes';

const initialState = {
    MobileComplainList: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case get_mobile_complain_success:
    const data = action.payload
    const ListData = state.MobileComplainList.concat(data)
    return { ...state , MobileComplainList: ListData};

    case get_mobile_complain_fail:
    return {...state , fail: action.error}

  default:
    return state
  }
};
