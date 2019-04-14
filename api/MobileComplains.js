const MOBILE_COMPLAIN_URL = (userId , statusId , pageIndex , pageSize) => (`http://192.168.50.123:5558/HelpdeskAPI/api/Mobile/GetMobileComplainsByUserIdAndStatusIdByPage?userId=${userId}&statusId=${statusId}&pageIndex=${pageIndex}&pageSize=${pageSize}`);
import fetch from 'node-fetch';

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