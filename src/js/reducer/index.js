import {combineReducers} from 'redux';
import {alertboxRe,alertboxCbg} from './../reducer/alertbox/index.js';

const rootReducer = combineReducers({
	alertboxRe,alertboxCbg
})

export default rootReducer