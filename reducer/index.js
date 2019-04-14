import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ComplainsReducer from './ComplainsReducer';
import ContractorReducer from './ContractorReducer';
import UnderGroundStoreReducer from './UnderGroundStoreReducer';
import AttendanceReducer from './AttendanceReducer';
import DetailCodeReducer from './DetailCodeReducer';
import BoxesReducer from './BoxesReducer';


export default combineReducers({
    auth: AuthReducer,
    complains: ComplainsReducer,
    contractor: ContractorReducer,
    underGroundStore: UnderGroundStoreReducer,
    attendance: AttendanceReducer,
    detailCode: DetailCodeReducer,
    boxes: BoxesReducer
})