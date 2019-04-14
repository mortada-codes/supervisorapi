import {
    get_complains_success , get_complains_fail , get_mobile_complain_success , get_mobile_complain_fail , complains_deleted , complains_deleted_success , complains_deleted_fail , change_complain , change_complain_success , change_complain_fail , 
    update_complains , update_complains_success , update_complains_fail , get_complains_statistics_success , get_complains_statistics_fail , get_complain_type_success , get_complain_type_fail , get_complain_history_success , 
    get_complain_history_fail , get_complain_image_by_id , get_complain_image_by_id_success , get_complain_image_by_id_fail ,
    check_complain_version_success , check_complain_version_fail , get_complain_types_dashboard_success , get_complain_types_dashboard_fail , update_complain_status_success , 
    update_complain_status_fail , update_complain_status , complains_transfered_success , complains_transfered_fail , get_complain_status_success , get_complain_status_fail , 
    add_complain_from_web , add_complain_from_web_success , add_complain_from_web_fail} from '../action/ActionTypes';
import {
    getComplains , MobileComplains , DeletedComplains , ChangeComplainStatus , UpdateComplainsTransfered , GetComplainStatistics , GetComplainsType , 
    GetComplainHistory , GetComplainImageById , CheckComplainVerison , ComplainTypesDashboard , UpdateComplainStatus , ComplainsTransfered , GetComplainStatus , AddComplainFromWeb} from '../api/Complains'

export const GetComplainsAction = (complainId) => {
    // return function to store.dispatch
    return async (dispatch) => {
        try {
            const result = await getComplains(complainId)
            if (result) {
                dispatch({type: get_complains_success , payload: result})
                return
            }
            dispatch({type: get_complains_fail , error: result.error})
        } catch (error) {
            dispatch({type: get_complains_fail , error: error.message})
        }
    }
}

export const getMobileComplainAction = (userId , statusId , pageIndex , pageSize) => {
    return async (dispatch) => {
      try {
        const result = await MobileComplains(userId , statusId , pageIndex , pageSize)
        if (result) {
          dispatch({type: get_mobile_complain_success , payload: result})
          return
        }
        dispatch({type: get_mobile_complain_success , error: result.error})
      } catch (error) {
        dispatch({type: get_mobile_complain_fail , error: error.message})
      }
    }
}

export const DeletedComplainsAction = (userId) => {
    return async (dispatch) => {
        try {
            const result = await DeletedComplains(userId)
            if (result) {
                dispatch({type: complains_deleted_success , payload: result})
                return
            }
            dispatch({type: complains_deleted_fail , error: result.error})
        } catch (error) {
            dispatch({type: complains_deleted_fail , error: error.message})
        }
    }
}

export const ChangedComplainAction = (userId , compId , newStatusId) => {
    return async (dispatch) => {
        try {
            const result = await ChangeComplainStatus(userId , compId , newStatusId)
            if (result) {
                dispatch({type: change_complain , payload: result})
                return
            }
            dispatch({type: complains_deleted_fail , error: result.error})
        } catch (error) {
            dispatch({type: change_complain_fail , error: error.message})
        }
    }
}

export const UpdateComplainsAction = (complainId , isTransfered) => {
    return async (dispatch) => {
        try {
            const result = await UpdateComplainsTransfered(complainId , isTransfered)
            if (result) {
                dispatch({type: update_complains_success , payload: result})
                return
            }
            dispatch({type: update_complains_fail , error: result.error})
        } catch (error) {
            dispatch({type: update_complains_fail , error: error.message})
        }
    }
}

export const GetComplainsStatisticsAction = (locationId , userId) => {
    return async (dispatch) => {
        try {
            const result = await GetComplainStatistics(locationId , userId)
            if (result) {
                dispatch({type: get_complains_statistics_success , payload: result})
                return
            }
            dispatch({get_complains_statistics_fail , error: result.error})
        } catch (error) {
            dispatch({type: get_complains_statistics_fail , erorr: error.message})
        }
    }
}

export const GetComplainTypeAction = () => {
    return async (dispatch) => {
        try {
            const result = await GetComplainsType()
            if (result) {
                dispatch({type: get_complain_type_success , payload: result})
                return
            }
            dispatch({type: get_complain_type_fail , error: result.error})
        } catch (error) {
            dispatch({type: get_complain_type_fail , error: error.message})
        }
    }
}

export const GetComplainHistoryAction = (complainId) => {
    return async (dispatch) => {
        try {
            const result = await GetComplainHistory(complainId)
            if (result) {
                dispatch({type: get_complain_history_success , payload: result})
                return
            }
            dispatch({type: get_complain_history_fail , error: result.error})
        } catch (error) {
            dispatch({type: get_complain_history_fail , error: error.message})
        }
    }
}

export const GetComplainImageByIdAction = (ComplainId , ImagesId) => {
    return async (dispatch) => {
        try {
            const result = await GetComplainImageById(ComplainId , ImagesId)
        if (result) {
            dispatch({type: get_complain_image_by_id_success , payload: result})
            return
        }
            dispatch({type: get_complain_image_by_id_fail , error: result.error})
        } catch (error) {
            dispatch({type: get_complain_image_by_id_fail , error: error.message})
        }
    }
}

export const CheckComplainVersionAction = (CurrentVersion) => {
    return async (dispatch) => {
        try {
            const result = await CheckComplainVerison(CurrentVersion)
            if (result) {
                dispatch({type: check_complain_version_success , payload: result})
                return
            }
            dispatch({type: check_complain_version_fail , error: result.error})
        } catch (error) {
            dispatch({type: check_complain_version_fail , erorr: error.message})
        }
    }
}

export const ComplainTypesDashboardAction = (ContractorId , userId , FilterContractorId , interval , datefrom , dateto , complainType , complainStatus) => {
    return async (dispatch) => {
        try {
            const result = await ComplainTypesDashboard(ContractorId , userId , FilterContractorId , interval , datefrom , dateto , complainType , complainStatus)
            if (result) {
                dispatch({type: get_complain_types_dashboard_success , payload: result})
                return
            }
            dispatch({type: get_complain_types_dashboard_fail , error: result.error})
        } catch (error) {
            dispatch({type: get_complain_types_dashboard_fail , error: error.message})
        }
    }
}

export const UpdateComplainStatusAction = (id , statusId , userId , NotResolved , comment , ResonId) => {
    return async (dispatch) => {
        try {
            const result = await UpdateComplainStatus(id , statusId , userId , NotResolved , comment , ResonId)
            if (result) {
                dispatch({type: update_complain_status , message: `Complain ${id} updated`})
                dispatch({type: update_complain_status_success , payload: result})
                return
            }
            dispatch({type: update_complain_status_fail , error: result.error})
        } catch (error) {
            dispatch({type: update_complain_status_fail , error: error.message})
        }
    }
}

export const ComplainsTransferedAction = (userId) => {
    return async (dispatch) => {
        try {
            const result = await ComplainsTransfered(userId)
            if (result) {
                dispatch({type: complains_transfered_success , payload: result})
                return
            }
            dispatch({type: complains_transfered_fail , error: result.error})
        } catch (error) {
            dispatch({type: complains_transfered_fail , error: error.message})
        }
    }
}

export const ComplainStatusAction = (Id , RowId , TableName) => {
    return async (dispatch) => {
        try {
            const result = await GetComplainStatus(Id , RowId , TableName)
            if (result) {
                dispatch({type: get_complain_status_success , payload: result})
                return
            }
            dispatch({type: get_complain_status_fail , error: result.error})
        } catch (error) {
            dispatch({type: get_complain_status_fail , error: error.message})
        }
    }
}

export const AddComplainFromWebAction = (updatedBy , Id , CityId , MunicipalityId , DistrictId , ZoneId , ComplainTypeId , Description , Lat , Long , StatusId , ContractId , ContractorId , CitizenId , CitizenNameAr , CitizenNameEn , IdNumber , CellPhone , CitizenEmail , CreatedBy) => {
    return async (dispatch) => {
        try {
            const result = await AddComplainFromWeb(updatedBy , Id , CityId , MunicipalityId , DistrictId , ZoneId , ComplainTypeId , Description , Lat , Long , StatusId , ContractId , ContractorId , CitizenId , CitizenNameAr , CitizenNameEn , IdNumber , CellPhone , CitizenEmail , CreatedBy)
            if (result) {
                dispatch({type: add_complain_from_web , payload: result})
                dispatch({type: add_complain_from_web_success , payload: result})
                return
            }
            dispatch({type: add_complain_from_web_fail , error: result.error})
        } catch (error) {
            dispatch({type: add_complain_from_web_fail , error: error.message})
        }
    }
}