import fetch from '../util/fetchy';
const Check_Contractor_URL = (ContractorId) => (`http://192.168.50.123:5558/HelpdeskAPI/api/Contractor/CheckContractor?ContractorId=${ContractorId}`)

export async function CheckContractor(ContractorId) {
    try {
        const result = await fetch(Check_Contractor_URL(ContractorId))
        if(result.ok) {
            const data = await result.json()
            return data
        }
        return {error: 'Something went wrong!'}
    } catch (error) {
        return {error: 'Error just happened!'}
    }
}