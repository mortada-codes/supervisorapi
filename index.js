import {applyMiddleware , createStore , compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import { Login } from './api/Authentication'
import {GetComplainsAction , getMobileComplainAction , DeletedComplainsAction , ChangedComplainAction , UpdateComplainsAction , GetComplainsStatisticsAction , GetComplainTypeAction , GetComplainHistoryAction , CheckComplainVersionAction , ComplainTypesDashboardAction , UpdateComplainStatusAction , ComplainsTransferedAction , ComplainStatusAction , AddComplainFromWebAction} from './action/ComplainsAction'
import {LoginAction , ChangePasswordAction , ForgotPasswordAction} from './action/AuthAction'
import {CheckContractorAction} from './action/ContractorAction'
import {UnderGroundStoreAction , NearestUnderGroundStoreAction} from './action/UnderGroundStoreAction'
import {AttendanceAction} from './action/AttendanceAction'
import {DetailCodeAction} from  './action/DetailCodeAction'
import {BoxesAction} from './action/BoxesAction'
import {getComplains , MobileComplains , DeletedComplains , ChangeComplainStatus , UpdateComplainsTransfered , GetComplainStatistics , GetComplainsType , GetComplainHistory} from './api/Complains';
import reducers from './reducer/index';


let store = createStore(reducers , applyMiddleware(ReduxThunk))

store.subscribe((state) => {
    //this where you can log data don't comment the log nothing will be visible 
    console.log('current state: ' , JSON.stringify(store.getState()))
    //console.log('complains ids: ' , store.getState().complains.complainsList.map(i => i.Id))
    //console.log('complains list length: ' , store.getState().complains.complainsList.length)
})

// console.log(Login('0540000000' , '0123456789').then((result) => {
//     console.log(result)
// }))

// console.log(getComplains('252810').then((result) => {
//     console.log(result)
// }))

// console.log(MobileComplains('111' , '1' , '1' , '1').then((result) => {
//     console.log(result)
// }))

// console.log(DeletedComplains('111').then((result) => {
//     console.log(result)
// }))

// console.log(ChangeComplainStatus('111' , '252888' , '4').then((result) => {
//     console.log(result)
// }))

// console.log(GetComplainsType().then((result) => {
//     console.log(result)
// }))



//store.dispatch(GetComplainsAction('252810'))
// store.dispatch(GetComplainsAction('252810'))
// store.dispatch(GetComplainsAction('252810'))
//store.dispatch(DeletedComplainsAction('111'))
//store.dispatch(getMobileComplainAction('111' , '1' , '0' , '100'))
//store.dispatch(ChangedComplainAction('111' , '252888' , '4'))
//store.dispatch(UpdateComplainsAction('252888' , true))
//store.dispatch(GetComplainsStatisticsAction('-1' , '111'))
//store.dispatch(GetComplainTypeAction())
//store.dispatch(GetComplainHistoryAction('252886'))
//store.dispatch(LoginAction('admin' , 'P@ssw0rd' , false))
//store.dispatch(ChangePasswordAction('admin' , 'P@ssw0rd' , 'P@ssw0rd'))
//store.dispatch(CheckContractorAction('83'))
//store.dispatch(UnderGroundStoreAction())
//store.dispatch(CheckComplainVersionAction('1.4.9'))
//store.dispatch(ComplainTypesDashboardAction('84' , '111' , '84' , null , null , null , null , null))
//store.dispatch(AttendanceAction('80' , '1089' , '111' , '111' , 'sample description'))
// store.dispatch(getMobileComplainAction('111' , '1' , '0' , '10'))
// store.dispatch(getMobileComplainAction('111' , '1' , '0' , '10'))
// store.dispatch(getMobileComplainAction('111' , '1' , '1' , '10'))
// store.dispatch(getMobileComplainAction('111' , '1' , '2' , '10'))
// store.dispatch(getMobileComplainAction('111' , '1' , '3' , '10'))
// store.dispatch(getMobileComplainAction('111' , '1' , '4' , '10'))
//store.dispatch(UpdateComplainStatusAction('252888' , '7' , '111' , true , "Comment" , '1'))
//store.dispatch(DetailCodeAction('1'))
//store.dispatch(NearestUnderGroundStoreAction('21.3891' , '39.8579'))
//store.dispatch(BoxesAction())
//store.dispatch(ForgotPasswordAction('64197' , '0580642627'))
//store.dispatch(ComplainsTransferedAction('111'))
//store.dispatch(ComplainStatusAction('12' , '12' , 'Complain'))
store.dispatch(AddComplainFromWebAction('1' , '252888' , '1167' , '1178' , '1215' , '1170' , '69' , 'description' , '31.3561795' , '30.067083' , '2' , '98' , '81' , '16' , 'Ali' , 'Ali' , 'Ali@gmail.com' , '0123456789' , '0540000000' , '1'))
//252886 252887