import {combineReducers} from 'redux';
import {alertboxRe,alertboxCbg,alertboxCmsg} from './../reducer/alertbox/index.js';

const rootReducer = combineReducers({
	alertboxRe,alertboxCbg,alertboxCmsg
})

export default rootReducer