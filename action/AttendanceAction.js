import {insert_attendance , insert_attendance_success , insert_attendance_fail} from './ActionTypes';
import {Attendance} from '../api/Attendance'

export const AttendanceAction = (locationId , workerId , createdBy , updatedBy , description) => {
    return async (dispatch) => {
        try {
            const AttendanceResult = await Attendance(locationId , workerId , createdBy , updatedBy , description)
            if (AttendanceResult) {
                dispatch({type: insert_attendance_success , payload: AttendanceResult})
                return
            }
            dispatch({type: insert_attendance_fail , error: AttendanceResult.error})
        } catch (error) {
            dispatch({type: insert_attendance_fail , error: error.message})
        }
    }
}