import {get_under_ground_store_success , get_under_ground_store_fail , get_nearest_under_ground_store_success , get_nearest_under_ground_store_fail} from '../action/ActionTypes'

const initialState = {
    UnderGroundStoreList: [] , NearestUnderGroundStoreList: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case get_under_ground_store_success:
    return { ...state , UnderGroundStoreList: action.payload};

    case get_under_ground_store_fail:
    return {...state , fail: action.error}

    case get_nearest_under_ground_store_success:
    return {...state , NearestUnderGroundStoreList: action.payload}

    case get_nearest_under_ground_store_fail:
    return {...state , fail: action.error}

    default:
    return state
  }
};
