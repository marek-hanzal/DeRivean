import {combineReducers} from 'redux';
import payload from './payload/reducer';
import status from './status/reducer';

const pages = combineReducers({
	status,
	payload,
});

export default pages;
