import {check_contractor_success , check_contractor_fail} from '../action/ActionTypes'

const initialState = {
    ContractorState: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {

    case check_contractor_success:
    return { ...state , ContractorState: action.payload };

    case check_contractor_fail:
    return {...state , fail: action.error}

    default:
    return state
  }
};