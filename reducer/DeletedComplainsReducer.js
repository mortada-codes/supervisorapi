import {complains_deleted , complains_deleted_success , complains_deleted_fail} from '../action/ActionTypes'

const initialState = {
    DeletedComplainsList: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case complains_deleted:
    return { ...state , DeletedComplainsList: action.payload};

    case complains_deleted_success:
    const data = action.payload
    const ListData = state.DeletedComplainsList.concat(data);
    //console.log("Deleted: " , ListData)
    return {...state , DeletedComplainsList: ListData}

    case complains_deleted_fail:
    return {...state , fail: action.error}

  default:
    return state
  }
};
