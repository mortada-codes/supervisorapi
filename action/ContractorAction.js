import {check_contractor_success , check_contractor_fail} from './ActionTypes'
import {CheckContractor} from '../api/Contractor'

export const CheckContractorAction = (ContractorId) => {
    return async (dispatch) => {
        try {
            const CheckContractorResult = await CheckContractor(ContractorId)
            if (CheckContractorResult) {
                dispatch({type: check_contractor_success , payload: CheckContractorResult})
                return
            }
            dispatch({type: check_contractor_fail , error: CheckContractorResult.error})
        } catch (error) {
            dispatch({type: check_contractor_fail , error: error.message})
        }
    }
}