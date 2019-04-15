import fetch from '../util/fetchy';
import BASE_API  from '../util/baseAPI'
const Check_Contractor_URL = (ContractorId) => (`http://${BASE_API}/HelpdeskAPI/api/Contractor/CheckContractor?ContractorId=${ContractorId}`)

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