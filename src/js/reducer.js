import {combineReducers} from 'redux';
import {alertboxRe,alertboxCbg,alertboxCmsg} from './../mui/alertbox/reducer';

const rootReducer = combineReducers({
	alertboxRe,alertboxCbg,alertboxCmsg
})

export default rootReducer