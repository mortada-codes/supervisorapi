import {insert_attendance , insert_attendance_success , insert_attendance_fail} from '../action/ActionTypes'

const initialState = {
    Attendance: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {

    case insert_attendance:
    return { ...state , Attendance: action.payload.Attendance};

    case insert_attendance_success:
    return {...state , Attendance: action.payload}

    case insert_attendance_fail:
    return {...state , fail: action.error}

    default:
    return state
  }
};