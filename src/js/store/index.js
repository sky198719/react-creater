import {createStore} from 'redux';
import rootReducer from './../reducer/index.js';

export default function configureStore(initialState){
	const store = createStore(rootReducer,initialState)
	return store
}