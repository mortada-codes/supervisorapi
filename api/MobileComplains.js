import fetch from '../util/fetchy';
import BASE_API  from '../util/baseAPI'
const MOBILE_COMPLAIN_URL = (userId , statusId , pageIndex , pageSize) => (`http://${BASE_API}/HelpdeskAPI/api/Mobile/GetMobileComplainsByUserIdAndStatusIdByPage?userId=${userId}&statusId=${statusId}&pageIndex=${pageIndex}&pageSize=${pageSize}`);


export async function MobileComplains(userId , statusId , pageIndex , pageSize) {
    try {
        const mobileComplainResult = await fetch(MOBILE_COMPLAIN_URL(userId , statusId , pageIndex , pageSize))
        if (mobileComplainResult.ok) {
            const data = await mobileComplainResult.json()
            return data
        }
        return {error: 'Something went wrong!'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}