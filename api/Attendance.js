import fetch from '../util/fetchy';
const Attendance_Url = () => (`http://192.168.50.123:5558/finalfleetapi/api/Attendance`)

export async function Attendance(locationId , workerId , createdBy , updatedBy , description) {
    const now = new Date();
    try {
        const AttendanceObject = {
            "location_id": locationId,
            "worker_id": workerId,
            "CreatedOn": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "CreatedBy": createdBy,
            "UpdatedOn": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "UpdatedBy": updatedBy,
            "absence_description": description,
            "isDeleted": true,
            "absenceDate": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
        }
        const AttendanceResult = await fetch(Attendance_Url() , {
            method: 'POST',
            body: JSON.stringify(AttendanceObject),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (AttendanceResult.ok) {
            const AttendanceData = await AttendanceResult.json()
            return AttendanceData
        }
        return {error: 'Please try again later'}
    } catch (error) {
        return {error: 'Error just happened!'}
    }
}