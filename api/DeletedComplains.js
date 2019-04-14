import fetch from 'node-fetch';
const DELETED_COMPLAINS_URL = (userId) => (`http://192.168.50.123:5558/HelpdeskAPI/api/Mobile/getDeletedComplainsForMobileByUser?userId=${userId}`)

export async function DeletedComplains(userId) {
    try {
        const complainDeletedResult = await fetch(DELETED_COMPLAINS_URL(userId))
        if (complainDeletedResult.ok) {
            const data = await complainDeletedResult.json()
            return data
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened!'}
    }
}