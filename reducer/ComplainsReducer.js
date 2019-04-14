import {
  get_complains_success , get_complains_fail , get_mobile_complain_success , get_mobile_complain_fail , complains_deleted , complains_deleted_success , complains_deleted_fail , change_complain , change_complain_success , change_complain_fail , 
  update_complains , update_complains_success , update_complains_fail , get_complains_statistics_success , get_complains_statistics_fail , 
  get_complain_type_success , get_complain_type_fail , get_complain_history_success , get_complain_history_fail , 
  get_complain_image_by_id , get_complain_image_by_id_success , get_complain_image_by_id_fail , check_complain_version_success , 
  check_complain_version_fail , get_complain_types_dashboard_success , get_complain_types_dashboard_fail , update_complain_status_success , 
  update_complain_status_fail , update_complain_status , complains_transfered_success , complains_transfered_fail , 
  get_complain_status_success , get_complain_status_fail , add_complain_from_web , add_complain_from_web_success , add_complain_from_web_fail} from '../action/ActionTypes';

const initialState = {
    complainsList: [] , ComplainChanged: undefined , UpdateComplains: undefined , ComplainStatisticsList: undefined , ComplainsType: [] , 
    ComplainHistoryList: [] , ComplainImage: [] , Version: undefined , ComplainTypesDashboard: [] , Status: undefined , ComplainsTransfered: [] , ComplainStatus: [] , ComplainFromWeb: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {

    case get_complains_success:
    const data = [action.payload]

    const ListData = state.complainsList.concat(data.filter(function(item , pos , self) {
      return !state.complainsList.find(i => i.Id === item.Id)
    }))
    return { ...state  , complainsList: ListData};

    case get_complains_fail:
    return {...state , error: action.error}

    case get_mobile_complain_success:
    const MobileListData = action.payload
    const MobileList = state.complainsList.concat(MobileListData.filter(function(item , pos , self) {
      return !state.complainsList.find(i=> i.Id === item.Id)
    }))

   // const MobileList = new Set([...MobileListData , ...state.complainsList])
    return {...state , complainsList: MobileList}

    case get_complains_fail:
    return {...state , fail: action.error}

    case complains_deleted:
    return { ...state , complainsList: action.payload};

    case complains_deleted_success:
    const deletedData = action.payload
    const deletedDataList = state.complainsList.filter(i => deletedData.indexOf(i.Id) == -1)
    return { ...state , complainsList: deletedDataList }

    case complains_deleted_fail:
    return {...state , fail: action.error}

    case change_complain:
    return {...state , ComplainChanged: action.payload}

    case change_complain_success:
    return {...state , ComplainChanged: action.payload.ComplainChanged}

    case change_complain_fail:
    return {...state , fail: action.error}

    case update_complains:
    return {...state , UpdateComplains: action.payload.UpdateComplains}

    case update_complains_success:
    return {...state , UpdateComplains: action.payload}

    case update_complains_fail:
    return {...state , fail: action.error}

    case get_complains_statistics_success:
    const statisticsData = action.payload
   
    const statisticsList = statisticsData.reduce(function(acc , i) {
      acc[i.ComplainStatusId] = i.NoOfComplains
      return acc
    }, {})
    //const NumberOfComplains = Object.assign(statisticsList)
    return {...state , ComplainStatisticsList: statisticsList}

    case get_complain_type_success:
    const ComplainTypeData = action.payload
    const ComplainTypeList = state.ComplainsType.concat(ComplainTypeData)
    return {...state , ComplainsType: ComplainTypeList}

    case get_complain_type_fail:
    return {...state , fail: action.error}

    case get_complain_history_success:
    const ComplainHistoryData = action.payload
    const ComplainHistoryList = state.ComplainHistoryList.concat(ComplainHistoryData)
    return {...state , ComplainHistoryData: ComplainHistoryList}

    case get_complain_history_fail:
    return {...state , fail: action.error}

    case get_complain_image_by_id:
    return {...state , ComplainImage: action.payload.ComplainImage}

    case get_complain_image_by_id_success:
    return {...state , ComplainImage: action.payload}

    case get_complain_image_by_id_fail:
    return {...state , fail: action.error}

    case check_complain_version_success:
    return {...state , Version: action.payload}

    case check_complain_version_fail:
    return {...state , fail: action.error}

    case get_complain_types_dashboard_success:
    return {...state , ComplainTypesDashboard: action.payload}

    case get_complain_types_dashboard_fail:
    return {...state , fail: action.error}

    case update_complain_status:
    return {...state , sucess: action.message}

    case update_complain_status_success:
    return {...state , Status: action.payload}

    case update_complain_status_fail:
    return {...state , fail: action.error}

    case complains_transfered_success:
    const complainsTransferedData = action.payload
    const complainTransferedList = state.ComplainsTransfered.concat(complainsTransferedData)
    return {...state , ComplainsTransfered: complainTransferedList}

    case complains_transfered_fail:
    return {...state , fail: action.error}

    case get_complain_status_success:
    return {...state , ComplainStatus: action.payload}

    case get_complain_status_fail:
    return {...state , fail: action.error}

    case add_complain_from_web:
    return {...state , ComplainFromWeb: action.payload.ComplainFromWeb}

    case add_complain_from_web_success:
    return {...state , ComplainFromWeb: action.payload}

    case add_complain_from_web_fail:
    return {...state , fail: action.error}

    default:
    return state
  }
};
